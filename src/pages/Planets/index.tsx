import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { planetsPage, planetsState, searchPlanetsValue } from './atoms';
import { columns } from './columns';
import { API_ROUTES, ROUTES } from '../../constants/routes';
import { Grid } from '../../components/grid';
import './styles.scss';

export const Planets = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(planetsPage);
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchPlanetsValue);
  const { planets, total } = useRecoilValue(planetsState);

  return (
    <>
      <header>STARSHIPS</header>
      <div className="planets">
        <Grid
          rows={planets ?? []}
          columns={columns}
          total={total}
          onRowClick={(id) => navigate(ROUTES.PLANET_CARD.replace(':id', id))}
        />
      </div>
    </>
  );
};
