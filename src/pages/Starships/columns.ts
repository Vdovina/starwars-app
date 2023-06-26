import { TColumn } from '../../components/table';
import { Starship } from '../../types/starship';

export const columns: TColumn<Starship>[] = [
  {
    accessor: 'name',
    Header: 'Name',
  },
  {
    accessor: 'model',
    Header: 'Model',
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
];
