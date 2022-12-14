import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { planetsPage, planetsState, searchPlanetsValue } from './atoms';
import { columns } from './columns';
import { API_ROUTES, ROUTES } from '../../constants/routes';
import { Grid } from '../../components/table';
import './styles.css';

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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchValue={currentSearchValue}
          searchField="name"
          searchApi={API_ROUTES.GET_CHARACTERS}
          setSearchValue={setCurrentSearchValue}
          // onRowClick={(id) => navigate(ROUTES.STARSHIP_CARD.replace(':id', id))}
        />
      </div>
    </>
  );
};
