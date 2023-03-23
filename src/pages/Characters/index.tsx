import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import { page, size, charactersState, searchValue } from './atoms';
import { columns } from './columns';
import { API_ROUTES, ROUTES } from '../../constants/routes';
import './styles.scss';
import { Grid, Input, Loader, TableWrapper } from '../../components';

export const Characters = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(page);
  const [currentSize, setCurrentSize] = useRecoilState(size);
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchValue);
  const {
    state: loading,
    contents: { characters, total },
  } = useRecoilValueLoadable(charactersState);

  console.log(loading, characters)

  return (
    <>
      <header>CHARACTERS</header>

      <TableWrapper>
        <Input label="Search characters" value={currentSearchValue} onChange={setCurrentSearchValue} />
        <Grid
          // rows={[]}
          rows={characters ?? []}
          // rows={[...(characters ?? []), ...(characters ?? [])]}
          columns={columns}
          total={total}
          page={currentPage}
          setPage={setCurrentPage}

          size={currentSize}
          setSize={setCurrentSize}
          searchValue={currentSearchValue}
          searchField="name"
          searchApi={API_ROUTES.GET_CHARACTERS}
          setSearchValue={setCurrentSearchValue}
          onRowClick={(id) => navigate(ROUTES.CHARACTER_CARD.replace(':id', id))}
        />
      </TableWrapper>
    </>
  );
};
