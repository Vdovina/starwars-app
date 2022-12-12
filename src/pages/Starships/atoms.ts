import { atom, selector } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Starship } from '../../types/Starship';

export const starshipsPage = atom({
  key: 'starshipsPage',
  default: 0,
});

export const searchStarshipsValue = atom({
  key: 'searchStarshipsValue',
  default: undefined,
});

export const starshipsState = selector({
  key: 'starships',
  get: async ({ get }) => {
    try {
      const page = get(starshipsPage);
      // const search = get(searchCharacterValue);
      const response = await (await fetch(`${API_ROUTES.GET_STARSHIPS}?page=${page + 1}`)).json();
      return {
        starships: (response?.results ?? []) as Starship[],
        total: (response?.count ?? 0) as number,
      };
    } catch (error) {
      throw error;
    }
  },
});
