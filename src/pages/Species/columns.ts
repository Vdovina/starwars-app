import { TColumn } from '../../components/grid';
import { Species } from '../../types/Species';

export const columns: TColumn<Species>[] = [
  {
    accessor: 'name',
    Header: 'Name',
  },
  {
    accessor: 'classification',
    Header: 'Classification',
  },
  {
    accessor: 'designation',
    Header: 'Designation',
  },
  {
    accessor: 'language',
    Header: 'Language',
  },
  {
    accessor: 'average_lifespan',
    Header: 'Average Lifespan',
  },
];
