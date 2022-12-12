import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { starshipsPage, starshipsState, searchStarshipsValue } from './atoms';
import { columns } from './columns';
import { API_ROUTES, ROUTES } from '../../constants/routes';
import { Grid } from '../../components/table';
import './styles.css';

export const Starships = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(starshipsPage);
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchStarshipsValue);
  const { starships, total } = useRecoilValue(starshipsState);

  return (
    <>
      <header>STARSHIPS</header>
      <div className="starships">
        <Grid
          rows={starships ?? []}
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
