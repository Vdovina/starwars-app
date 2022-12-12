import { atom, selector, selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import type { Character } from '../../types/Character';

export const planetsPage = atom({
  key: 'planetsPage',
  default: 0,
});

export const searchPlanetsValue = atom({
  key: 'searchPlanetsValue',
  default: undefined,
});

export const planetsState = selector({
  key: 'planets',
  get: async ({ get }) => {
    try {
      const page = get(planetsPage);
      // const search = get(searchCharacterValue);
      const response = await (await fetch(`${API_ROUTES.GET_PLANETS}?page=${page + 1}`)).json();
      return {
        planets: (response?.results ?? []) as Character[],
        total: (response?.count ?? 0) as number,
      };
    } catch (error) {
      throw error;
    }
  },
});
