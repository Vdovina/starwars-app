import { TColumn } from '../../components/table';
import { Vehicle } from '../../types/vehicle';

export const columns: TColumn<Vehicle>[] = [
  {
    accessor: 'name',
    Header: 'Name',
  },
  {
    accessor: 'model',
    Header: 'Model',
  },
  {
    accessor: 'vehicle_class',
    Header: 'Vehicle class',
  },
  {
    accessor: 'manufacturer',
    Header: 'Manufacturer',
  },
  {
    accessor: 'length',
    Header: 'Length',
  },
  {
    accessor: 'passengers',
    Header: 'Passengers',
  },
  {
    accessor: 'cargo_capacity',
    Header: 'Cargo capacity',
  },
];
