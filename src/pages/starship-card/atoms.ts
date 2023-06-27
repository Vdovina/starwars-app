import { atomFamily, selectorFamily } from 'recoil';
import type { Starship } from '../../types/starship';
import { getStarship } from '../../service/starship-service';

export const starshipCardState = atomFamily<Starship | undefined, string | undefined>({
  key: 'starship_card',
  default: selectorFamily({
    key: '#starship_card',
    get: (starshipId: string | undefined) => async () => {
      try {
        if (!starshipId) {
          return undefined;
        }
        const response = await getStarship(starshipId);
        return response;
      } catch (error) {
        throw error;
      }
    },
  }),
});
