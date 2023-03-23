import { TColumn } from '../../components/grid';
import { Character } from '../../types/Character';

export const columns: TColumn<Character>[] = [
  {
    accessor: 'name',
    Header: 'Name',
  },
  {
    accessor: 'birth_year',
    Header: 'Birth Year',
  },
  {
    accessor: 'gender',
    Header: 'Gender',
  },
  {
    accessor: 'mass',
    Header: 'Mass',
  },
  {
    accessor: 'height',
    Header: 'Height',
  },
  {
    accessor: 'hair_color',
    Header: 'Hair Color',
  },
  {
    accessor: 'eye_color',
    Header: 'Eye Color',
  },
];
