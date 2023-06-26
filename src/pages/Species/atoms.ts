import { atom, selector } from 'recoil';
import type { CollectionState } from '../../types/collection-state';
import type { Species } from '../../types/species';
import { getMergedSpeciesList } from '../../service/species-service';
import { DEFAULT_PAGES } from '../../constants/constants';

export type CharacterListState = CollectionState<Species>;

export const searchValue = atom({
  key: 'species/searchValue',
  default: '',
});

export const speciesState = atom({
  key: 'species/data',
  default: selector({
    key: '#species/data',
    get: async ({ get }) => {
      try {
        const searchParam = get(searchValue);
        const response = await getMergedSpeciesList(DEFAULT_PAGES, { searchParam });
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
