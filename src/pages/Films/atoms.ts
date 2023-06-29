import { atom, selector } from 'recoil';
import { getFilmList } from '../../service/film-service';
import type { Film } from '../../types/film';

export const filmsState = atom<Film[] | null>({
  key: 'films/data',
  default: selector({
    key: '#films/data',
    get: async () => {
      try {
        const response = await getFilmList();
        return response?.results ?? [];
      } catch (error) {
        return null;
      }
    },
  }),
});
