import { atom, selector } from 'recoil';
import type { Planet } from '../../types/Planet';
import { CollectionState } from '../../types/CollectionState';
import { DEFAULT_PAGES } from '../../constants/constants';
import { getMergedPlanetsList } from '../../service/planetsService';

export type CharacterListState = CollectionState<Planet>;

export const searchValue = atom({
  key: 'planets/searchValue',
  default: '',
});

export const planetsState = atom({
  key: 'planets/data',
  default: selector({
    key: '#planets/data',
    get: async ({ get }) => {
      try {
        const searchParam = get(searchValue);
        const response = await getMergedPlanetsList(DEFAULT_PAGES, { searchParam });
        return {
          data: response?.results ?? [],
          total: response?.count ?? 0,
        };
      } catch (error) {
        throw error;
      }
    },
  }),
});
