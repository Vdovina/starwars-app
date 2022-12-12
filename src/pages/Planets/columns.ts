import { TColumn } from '../../components/table';
import { Planet } from '../../types/Planet';

export const columns: TColumn<Planet>[] = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'diameter',
    label: 'Diameter',
  },
  {
    id: 'climate',
    label: 'Climate',
  },
  {
    id: 'gravity',
    label: 'Gravity',
  },
  {
    id: 'terrain',
    label: 'Terrain',
  },
  {
    id: 'population',
    label: 'Population',
  },
];
