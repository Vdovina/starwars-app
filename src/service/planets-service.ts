import axios from 'axios';
import { API_ROUTES } from '../constants/routes';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/collection-response';
import type { AdditionalQueryParams } from '../types/query-params';
import type { Planet } from '../types/planet';
import { getList, getMergedList } from './collection-service';

export async function getPlanetsList(
  page: number,
  queryParams?: AdditionalQueryParams
): Promise<CollectionResponse<Planet>> {
  return getList(API_ROUTES.GET_PLANETS, page, queryParams);
}

export async function getMergedPlanetsList(
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<Planet>> {
  return getMergedList(API_ROUTES.GET_PLANETS, pages, queryParams);
}

export async function getPlanet(id): Promise<Planet> {
  return axios.get(API_ROUTES.GET_PLANET_INFO, { params: { id } }).then((response) => response.data);
}
