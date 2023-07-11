import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { starshipsState, searchValue } from './atoms';
import { columns } from './columns';
import { ROUTES } from '../../constants/routes';
import { Table, SearchInput, TableWrapper } from '../../components';
import { PAGE_SIZE, VIRTUALIZATION_DELAY } from '../../constants/constants';
import { useVirtualScrolling } from '../../use/use-virtual-scrolling';
import { getMergedStarshipList } from '../../service/starship-service';
import './styles.scss';

function Starships() {
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] =
    useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(
    starshipsState,
    getMergedStarshipList,
    currentSearchValue,
    VIRTUALIZATION_DELAY,
  );

  return (
    <>
      <header>STARSHIPS</header>

      <TableWrapper>
        <div className="search-panel">
          <SearchInput
            placeholder="Search starships"
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

export default Starships;
