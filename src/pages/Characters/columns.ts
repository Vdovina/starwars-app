import { TColumn } from '../../components/grid';
import { Character } from '../../types/Character';

export const columns: TColumn<Character>[] = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'birth_year',
    label: 'Birth Year',
  },
  {
    id: 'gender',
    label: 'Gender',
  },
  {
    id: 'mass',
    label: 'Mass',
  },
  {
    id: 'height',
    label: 'Height',
  },
  {
    id: 'hair_color',
    label: 'Hair Color',
  },
  {
    id: 'eye_color',
    label: 'Eye Color',
  },
];
