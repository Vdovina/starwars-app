import { atom, selector } from 'recoil';
import type { Starship } from '../../types/Starship';
import type { CollectionState } from '../../types/CollectionState';
import { DEFAULT_PAGES } from '../../constants/constants';
import { getMergedStarshipList } from '../../service/starshipService';

export type CharacterListState = CollectionState<Starship>;

export const searchValue = atom({
  key: 'starships/searchValue',
  default: '',
});

export const starshipsState = atom({
  key: 'starships/data',
  default: selector({
    key: '#starships/data',
    get: async ({ get }) => {
      try {
        const searchParam = get(searchValue);
        const response = await getMergedStarshipList(DEFAULT_PAGES, { searchParam });
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
