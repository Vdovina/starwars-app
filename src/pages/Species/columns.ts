import { TColumn } from '../../components/table';
import { Species } from '../../types/species';

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
