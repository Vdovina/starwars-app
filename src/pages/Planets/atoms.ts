import { atom, selector } from 'recoil';
import type { Planet } from '../../types/planet';
import { CollectionState } from '../../types/collection-state';
import { DEFAULT_PAGES } from '../../constants/constants';
import { getMergedPlanetList } from '../../service/planet-service';

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
        const response = await getMergedPlanetList(DEFAULT_PAGES, { searchParam });
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
