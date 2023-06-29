import { atomFamily, selectorFamily } from 'recoil';
import { Planet } from '../../types/planet';
import { getPlanet } from '../../service/planet-service';

export const planetCardState = atomFamily<Planet | null, string | undefined>({
  key: 'planet_card',
  default: selectorFamily({
    key: '#planet_card',
    get: (planetId: string | undefined) => async () => {
      try {
        if (!planetId) {
          return null;
        }
        const response = await getPlanet(planetId);
        return response;
      } catch (error) {
        return null;
      }
    },
  }),
});
