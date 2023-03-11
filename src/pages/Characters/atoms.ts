import { atom, selector, selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import type { Character } from '../../types/Character';

export const page = atom({
  key: 'characters/page',
  default: 0,
});

export const size = atom({
  key: 'characters/size',
  default: 10,
});

export const searchValue = atom({
  key: 'character/searchValue',
  default: undefined,
});

export const charactersState = selector({
  key: 'characters',
  get: async ({ get }) => {
    try {
      const currentPage = get(page);
      const currentSize = get(size);
      // const search = get(searchValue);
      const response = await (await fetch(`${API_ROUTES.GET_CHARACTERS}?page=${currentPage + 1}&size=${currentSize}`)).json();
      return {
        characters: (response?.results ?? []) as Character[],
        total: (response?.count ?? 0) as number,
      };
    } catch (error) {
      throw error;
    }
  },
});
