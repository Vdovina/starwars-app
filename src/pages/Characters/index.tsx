import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { charactersPage, charactersState, searchCharacterValue } from './atoms';
import { columns } from './columns';
import { API_ROUTES, ROUTES } from '../../constants/routes';
import { Grid } from '../../components/table';
import './styles.css';

export const Characters = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(charactersPage);
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchCharacterValue);
  const { characters, total } = useRecoilValue(charactersState);

  return (
    <>
      <header>CHARACTERS</header>
      <div className="characters">
        <Grid
          rows={characters ?? []}
          columns={columns}
          total={total}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchValue={currentSearchValue}
          searchField="name"
          searchApi={API_ROUTES.GET_CHARACTERS}
          setSearchValue={setCurrentSearchValue}
          onRowClick={(id) => navigate(ROUTES.CHARACTER_CARD.replace(':id', id))}
        />
      </div>
    </>
  );
};
