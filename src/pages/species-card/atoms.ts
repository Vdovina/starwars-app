import { selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Species } from '../../types/species';

export const speciesCardState = selectorFamily({
  key: 'speciesCard',
  get: (speciesId: string) => async () => {
    try {
      if (speciesId === '') {
        return undefined;
      }

      const response = await (await fetch(API_ROUTES.GET_SPECIES_INFO.replace(':id', speciesId))).json();
      return response as Species;
    } catch (error) {
      throw error;
    }
  },
});
