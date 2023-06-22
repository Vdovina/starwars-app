import { atom, selector, selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import type { Character } from '../../types/Character';
import { getCharacterList, getMergedCharacterList } from '../../service/characterService';
import { CollectionState } from '../../types/CollectionState';

export type CharacterListState = CollectionState<Character>;

export const pages = atom({
  key: 'characters/pages',
  default: [0, 1],
});

export const size = atom({
  key: 'characters/size',
  default: 10,
});

export const searchValue = atom({
  key: 'characters/searchValue',
  default: undefined,
});

export const charactersState = atom({
  key: 'characters/data',
  default: selector({
    key: '#characters/data',
    get: async ({ get }) => {
      try {
        const currentPages = get(pages);
        const response = await getMergedCharacterList(currentPages);
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
