import { atom, selector, selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import type { Character } from '../../types/Character';

export const charactersPage = atom({
  key: 'charactersPage',
  default: 0,
});

export const searchCharacterValue = atom({
  key: 'searchCharacterValue',
  default: undefined,
});

export const charactersState = selector({
  key: 'characters',
  get: async ({ get }) => {
    try {
      const page = get(charactersPage);
      // const search = get(searchCharacterValue);
      const response = await (await fetch(`${API_ROUTES.GET_CHARACTERS}?page=${page + 1}`)).json();
      return {
        characters: (response?.results ?? []) as Character[],
        total: (response?.count ?? 0) as number,
      };
    } catch (error) {
      throw error;
    }
  },
});
