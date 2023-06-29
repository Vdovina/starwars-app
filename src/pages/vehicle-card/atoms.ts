import { atomFamily, selectorFamily } from 'recoil';
import type { Vehicle } from '../../types/vehicle';
import { getVehicle } from '../../service/vehicle-service';

export const vehicleCardState = atomFamily<Vehicle | null, string | undefined>({
  key: 'vehicle_card',
  default: selectorFamily({
    key: '#vehicle_card',
    get: (vehicledId: string | undefined) => async () => {
      try {
        if (!vehicledId) {
          return null;
        }
        const response = await getVehicle(vehicledId);
        return response;
      } catch (error) {
        return null;
      }
    },
  }),
});
