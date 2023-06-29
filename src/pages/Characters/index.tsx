import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchValue, charactersState } from './atoms';
import { columns } from './columns';
import { ROUTES } from '../../constants/routes';
import { Table, SearchInput, TableWrapper } from '../../components';
import { getMergedCharacterList } from '../../service/character-service';
import { useVirtualScrolling } from '../../use/use-virtual-scrolling';
import { PAGE_SIZE } from '../../constants/constants';
import './styles.scss';

function Characters() {
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] =
    useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(
    charactersState,
    getMergedCharacterList,
    currentSearchValue,
    5000,
  );

  return (
    <>
      <header>CHARACTERS</header>

      <TableWrapper>
        <div className="search-panel">
          <SearchInput
            placeholder="Search characters"
            value={currentSearchValue}
            onChange={setCurrentSearchValue}
          />
        </div>
        <Table
          rows={data?.data ?? []}
          columns={columns}
          total={data?.total}
          loading={loading}
          onLoad={onScroll}
          size={PAGE_SIZE}
          onRowClick={id => navigate(ROUTES.CHARACTER_CARD.replace(':id', id))}
        />
      </TableWrapper>
    </>
  );
}

export default Characters;
