import { atom, selector } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Film } from '../../types/film';
import { getFilmList } from '../../service/film-service';

export const filmsState = atom({
  key: 'films/data',
  default: selector({
    key: '#films/data',
    get: async () => {
      try {
        const response = await getFilmList(0);
        debugger;
        return response?.results ?? [];
      } catch (error) {
        throw error;
      }
    },
  }),
});
