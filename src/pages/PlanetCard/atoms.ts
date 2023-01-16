import { atom, selector, selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Planet } from '../../types/Planet';

export const planetCardState = selectorFamily({
  key: 'planetCard',
  get: (planetId: string) => async () => {
    try {
      if (planetId === '') {
        return undefined;
      }

      const response = await (await fetch(API_ROUTES.GET_PLANET_INFO.replace(':id', planetId))).json();
      return response as Planet;
    } catch (error) {
      throw error;
    }
  },
});
