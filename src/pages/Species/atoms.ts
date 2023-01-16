import { atom, selector } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Starship } from '../../types/Starship';

export const speciesPage = atom({
  key: 'speciesPage',
  default: 0,
});

export const searchSpeciesValue = atom({
  key: 'searchSpeciesValue',
  default: undefined,
});

export const speciesState = selector({
  key: 'species',
  get: async ({ get }) => {
    try {
      const page = get(speciesPage);
      // const search = get(searchCharacterValue);
      const response = await (await fetch(`${API_ROUTES.GET_SPECIES}?page=${page + 1}`)).json();
      return {
        species: (response?.results ?? []) as Starship[],
        total: (response?.count ?? 0) as number,
      };
    } catch (error) {
      throw error;
    }
  },
});
