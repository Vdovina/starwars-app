import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { planetsState, searchValue } from './atoms';
import { columns } from './columns';
import { ROUTES } from '../../constants/routes';
import { useVirtualScrolling } from '../../use/useVirtualScrolling';
import { getMergedPlanetsList } from '../../service/planetsService';
import { Grid, SearchInput, TableWrapper } from '../../components';
import { PAGE_SIZE } from '../../constants/constants';
import './styles.scss';

export const Planets = () => {
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(planetsState, getMergedPlanetsList, currentSearchValue, 5000);

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
