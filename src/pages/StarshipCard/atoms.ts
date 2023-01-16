import { atom, selector, selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Starship } from '../../types/Starship';

export const starshipCardState = selectorFamily({
  key: 'starshipCard',
  get: (starshipId: string) => async () => {
    try {
      if (starshipId === '') {
        return undefined;
      }

      const response = await (await fetch(API_ROUTES.GET_STARSHIP_INFO.replace(':id', starshipId))).json();
      return response as Starship;
    } catch (error) {
      throw error;
    }
  },
});
