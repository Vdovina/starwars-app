import { atom, selector } from 'recoil';
import type { CollectionState } from '../../types/collection-state';
import type { Vehicle } from '../../types/vehicle';
import { getMergedVehicleList } from '../../service/vehicle-service';
import { DEFAULT_PAGES } from '../../constants/constants';

export type VehicleListState = CollectionState<Vehicle>;

export const searchValue = atom({
  key: 'vehicles/searchValue',
  default: '',
});

export const vehiclesState = atom<VehicleListState>({
  key: 'vehicles/data',
  default: selector({
    key: '#vehicles/data',
    get: async ({ get }) => {
      try {
        const searchParam = get(searchValue);
        const response = await getMergedVehicleList(DEFAULT_PAGES, { searchParam });
        return {
          data: response?.results ?? [],
          total: response?.count ?? 0,
        };
      } catch (error) {
        throw error;
      }
    },
  }),
});
