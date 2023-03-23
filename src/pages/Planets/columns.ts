import { TColumn } from '../../components/grid';
import { Planet } from '../../types/Planet';

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
