import { selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Film } from '../../types/film';

export const filmCardState = selectorFamily({
  key: 'filmCard',
  get: (filmId: string) => async () => {
    try {
      if (filmId === '') {
        return undefined;
      }

      const response = await (await fetch(API_ROUTES.GET_FILM_INFO.replace(':id', filmId))).json();
      return response as Film;
    } catch (error) {
      throw error;
    }
  },
});
