import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Film } from '../../types/Film';

export const filmsState = selector({
  key: 'films',
  get: async () => {
    try {
      const response = await (await fetch(API_ROUTES.GET_FILMS)).json();
      return (response?.results ?? []) as Film[];
    } catch (error) {
      throw error;
    }
  },
});
