import { atomFamily, selectorFamily } from 'recoil';
import type { Vehicle } from '../../types/vehicle';
import { getVehicle } from '../../service/vehicle-service';

export const vehicleCardState = atomFamily<Vehicle | undefined, string>({
  key: 'vehicle_card',
  default: selectorFamily({
    key: '#vehicle_card',
    get: (vehicledId: string) => async () => {
      try {
        if (!vehicledId) {
          return undefined;
        }
        const response = await getVehicle(vehicledId);
        return response;
      } catch (error) {
        throw error;
      }
    },
  }),
});
