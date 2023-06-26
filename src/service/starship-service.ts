import axios from 'axios';
import { API_ROUTES } from '../constants/routes';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/collection-response';
import type { AdditionalQueryParams } from '../types/query-params';
import type { Starship } from '../types/starship';
import { getList, getMergedList } from './collection-service';

export async function getStarshipList(
  page: number,
  queryParams?: AdditionalQueryParams
): Promise<CollectionResponse<Starship>> {
  return getList(API_ROUTES.GET_STARSHIPS, page, queryParams);
}

export async function getMergedStarshipList(
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<Starship>> {
  return getMergedList(API_ROUTES.GET_STARSHIPS, pages, queryParams);
}

export async function getStarship(id): Promise<Starship> {
  return axios.get(API_ROUTES.GET_STARSHIP_INFO, { params: { id } }).then((response) => response.data);
}
