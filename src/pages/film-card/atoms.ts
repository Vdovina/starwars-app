import { atomFamily, selectorFamily } from 'recoil';
import { Film } from '../../types/film';
import { getFilm } from '../../service/film-service';

export const filmCardState = atomFamily<Film | undefined, string | undefined>({
  key: 'fild_card',
  default: selectorFamily({
    key: '#film_card',
    get: (filmId: string | undefined) => async () => {
      try {
        if (!filmId) {
          return undefined;
        }
        const response = await getFilm(filmId);
        return response;
      } catch (error) {
        throw error;
      }
    },
  }),
});
