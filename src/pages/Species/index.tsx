import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchValue, speciesState } from './atoms';
import { columns } from './columns';
import { ROUTES } from '../../constants/routes';
import { useVirtualScrolling } from '../../use/use-virtual-scrolling';
import { Table, SearchInput, TableWrapper } from '../../components';
import { PAGE_SIZE } from '../../constants/constants';
import { getMergedSpeciesList } from '../../service/species-service';
import './styles.scss';

export const Species = () => {
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(speciesState, getMergedSpeciesList, currentSearchValue, 5000);

  return (
    <>
      <header>SPECIES</header>

      <TableWrapper>
        <div className="search-panel">
          <SearchInput value={currentSearchValue} onChange={setCurrentSearchValue} />
        </div>
        <Table
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
