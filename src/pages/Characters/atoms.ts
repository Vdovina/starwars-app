import { atom, selector } from 'recoil';
import { DEFAULT_PAGES } from '../../constants/constants';
import { getMergedCharacterList } from '../../service/character-service';
import type { Character } from '../../types/character';
import type { CollectionState } from '../../types/collection-state';

export type CharacterListState = CollectionState<Character>;

export const searchValue = atom({
  key: 'characters/searchValue',
  default: '',
});

export const charactersState = atom({
  key: 'characters/data',
  default: selector({
    key: '#characters/data',
    get: async ({ get }) => {
      try {
        const searchParam = get(searchValue);
        const response = await getMergedCharacterList(DEFAULT_PAGES, { searchParam });
        return {
          data: response?.results ?? [],
          total: response?.count ?? 0,
        };
      }
      catch (error) {
        return {
          error: error,
        };
      }
    },
  }),
});
