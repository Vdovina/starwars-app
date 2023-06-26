import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { speciesPage, speciesState, searchSpeciesValue } from './atoms';
import { columns } from './columns';
import { API_ROUTES, ROUTES } from '../../constants/routes';
import { Grid } from '../../components/grid';
import './styles.scss';

export const Species = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(speciesPage);
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchSpeciesValue);
  const { species, total } = useRecoilValue(speciesState);

  return (
    <>
      <header>SPECIES</header>
      <div className="species">
        <Grid
          rows={species ?? []}
          columns={columns}
          total={total}
          onRowClick={(id) => navigate(ROUTES.SPECIES_CARD.replace(':id', id))}
        />
      </div>
    </>
  );
};
