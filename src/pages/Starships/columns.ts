import { TColumn } from '../../components/grid';
import { Starship } from '../../types/Starship';

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
