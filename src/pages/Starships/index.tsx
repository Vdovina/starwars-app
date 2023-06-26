import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { starshipsState, searchValue } from './atoms';
import { columns } from './columns';
import { ROUTES } from '../../constants/routes';
import { Grid, SearchInput, TableWrapper } from '../../components';
import { PAGE_SIZE } from '../../constants/constants';
import { useVirtualScrolling } from '../../use/useVirtualScrolling';
import { getMergedStarshipList } from '../../service/starshipService';
import './styles.scss';

export const Starships = () => {
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(starshipsState, getMergedStarshipList, currentSearchValue, 5000);

  return (
    <>
      <header>STARSHIPS</header>

      <TableWrapper>
        <div className="search-panel">
          <SearchInput value={currentSearchValue} onChange={setCurrentSearchValue} />
        </div>
        <Grid
          rows={data?.data ?? []}
          columns={columns}
          total={data?.total}
          loading={loading}
          onLoad={onScroll}
          size={PAGE_SIZE}
          onRowClick={(id) => navigate(ROUTES.CHARACTER_CARD.replace(':id', id))}
        />
      </TableWrapper>
    </>
  );
};
