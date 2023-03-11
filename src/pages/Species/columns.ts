import { TColumn } from '../../components/grid';
import { Species } from '../../types/Species';

export const columns: TColumn<Species>[] = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'classification',
    label: 'Classification',
  },
  {
    id: 'designation',
    label: 'Designation',
  },
  {
    id: 'language',
    label: 'Language',
  },
  {
    id: 'average_lifespan',
    label: 'Average Lifespan',
  },
];
