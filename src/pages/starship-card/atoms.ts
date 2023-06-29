import { atomFamily, selectorFamily } from 'recoil';
import type { Starship } from '../../types/starship';
import { getStarship } from '../../service/starship-service';

export const starshipCardState = atomFamily<Starship | null, string | undefined>({
  key: 'starship_card',
  default: selectorFamily({
    key: '#starship_card',
    get: (starshipId: string | undefined) => async () => {
      try {
        if (!starshipId) {
          return null;
        }
        const response = await getStarship(starshipId);
        return response;
      } catch (error) {
        return null;
      }
    },
  }),
});
