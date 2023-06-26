import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchValue, charactersState } from './atoms';
import { columns } from './columns';
import { ROUTES } from '../../constants/routes';
import { Grid, SearchInput, TableWrapper } from '../../components';
import { getMergedCharacterList } from '../../service/characterService';
import { useVirtualScrolling } from '../../use/useVirtualScrolling';
import { PAGE_SIZE } from '../../constants/constants';
import { LoadingStatus } from '../../constants/statuses';
import './styles.scss';

export const Characters = () => {
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(
    charactersState,
    getMergedCharacterList,
    currentSearchValue,
    5000
  );

  console.log(data, loading);

  return (
    <>
      <header>CHARACTERS</header>

      <TableWrapper>
        <div className="search-panel">
          <SearchInput value={currentSearchValue} onChange={setCurrentSearchValue} />
        </div>
        <Grid
          rows={data?.data ?? []}
          columns={columns}
          total={data?.total}
          loading={LoadingStatus.Loading}
          onLoad={onScroll}
          size={PAGE_SIZE}
          onRowClick={(id) => navigate(ROUTES.CHARACTER_CARD.replace(':id', id))}
        />
      </TableWrapper>
    </>
  );
};
