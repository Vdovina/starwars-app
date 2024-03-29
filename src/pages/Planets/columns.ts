import { TColumn } from '../../components/table';
import { Planet } from '../../types/planet';

export const columns: TColumn<Planet>[] = [
  {
    accessor: 'name',
    Header: 'Name',
  },
  {
    accessor: 'diameter',
    Header: 'Diameter',
  },
  {
    accessor: 'climate',
    Header: 'Climate',
  },
  {
    accessor: 'gravity',
    Header: 'Gravity',
  },
  {
    accessor: 'terrain',
    Header: 'Terrain',
  },
  {
    accessor: 'population',
    Header: 'Population',
  },
];
