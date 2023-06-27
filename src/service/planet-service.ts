import { API_ROUTES } from '../constants/routes';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/collection-response';
import type { AdditionalQueryParams } from '../types/query-params';
import type { Planet } from '../types/planet';
import { getInfo, getList, getMergedList } from './collection-service';

export async function getPlanetList(page: number, queryParams?: AdditionalQueryParams): Promise<CollectionResponse<Planet>> {
  return getList(API_ROUTES.GET_PLANETS, { ...queryParams, page });
}

export async function getMergedPlanetList(
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<Planet>> {
  return getMergedList(API_ROUTES.GET_PLANETS, { ...queryParams, pages });
}

export async function getPlanet(id: string): Promise<Planet> {
  return getInfo(API_ROUTES.GET_PLANET_INFO, id);
}
