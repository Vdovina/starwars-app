import { TColumn } from '../../components/table';
import { Starship } from '../../types/Starship';

export const columns: TColumn<Starship>[] = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'model',
    label: 'Model',
  },
  {
    id: 'manufacturer',
    label: 'Manufacturer',
  },
  {
    id: 'length',
    label: 'Length',
  },
  {
    id: 'passengers',
    label: 'Passengers',
  },
];
