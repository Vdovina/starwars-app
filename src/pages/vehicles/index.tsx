import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchValue, vehiclesState } from './atoms';
import { columns } from './columns';
import { ROUTES } from '../../constants/routes';
import { useVirtualScrolling } from '../../use/use-virtual-scrolling';
import { Table, SearchInput, TableWrapper } from '../../components';
import { PAGE_SIZE, VIRTUALIZATION_DELAY } from '../../constants/constants';
import { getMergedVehicleList } from '../../service/vehicle-service';

function Vehicles() {
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] =
    useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(
    vehiclesState,
    getMergedVehicleList,
    currentSearchValue,
    VIRTUALIZATION_DELAY,
  );

  return (
    <>
      <header>VEHICLES</header>

      <TableWrapper>
        <div className="search-panel">
          <SearchInput
            placeholder="Search vehicles"
            value={currentSearchValue}
            onChange={setCurrentSearchValue}
          />
        </div>
        <Table
          rows={data?.data ?? []}
          columns={columns}
          total={data?.total}
          loading={loading}
          onLoad={onScroll}
          size={PAGE_SIZE}
          onRowClick={id => navigate(ROUTES.VEHICLE_CARD.replace(':id', id))}
        />
      </TableWrapper>
    </>
  );
}

export default Vehicles;
