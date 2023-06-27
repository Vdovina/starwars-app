import { atomFamily, selectorFamily } from 'recoil';
import { Species } from '../../types/species';
import { getSpecies } from '../../service/species-service';

export const speciesCardState = atomFamily<Species | undefined, string | undefined>({
  key: 'species_card',
  default: selectorFamily({
    key: '#species_card',
    get: (speciesId: string | undefined) => async () => {
      try {
        if (!speciesId) {
          return undefined;
        }
        const response = await getSpecies(speciesId);
        return response;
      } catch (error) {
        throw error;
      }
    },
  }),
});
