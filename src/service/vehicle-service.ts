import { API_ROUTES } from '../constants/routes';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/collection-response';
import type { AdditionalQueryParams } from '../types/query-params';
import type { Vehicle } from '../types/vehicle';
import { getInfo, getList, getMergedList } from './collection-service';

export async function getVehicleList(
  page: number,
  queryParams?: AdditionalQueryParams
): Promise<CollectionResponse<Vehicle>> {
  return getList(API_ROUTES.GET_VEHICLES, page, queryParams);
}

export async function getMergedVehicleList(
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<Vehicle>> {
  return getMergedList(API_ROUTES.GET_VEHICLES, pages, queryParams);
}

export async function getVehicle(id: string): Promise<Vehicle> {
  return getInfo(API_ROUTES.GET_VEHICLE_INFO, id);
}
