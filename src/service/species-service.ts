import { API_ROUTES } from '../constants/routes';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/collection-response';
import type { AdditionalQueryParams } from '../types/query-params';
import type { Species } from '../types/species';
import { getInfo, getList, getMergedList } from './collection-service';

export async function getSpeciesList(
  page: number,
  queryParams?: AdditionalQueryParams
): Promise<CollectionResponse<Species>> {
  return getList(API_ROUTES.GET_SPECIES, { ...queryParams, page });
}

export async function getMergedSpeciesList(
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<Species>> {
  return getMergedList(API_ROUTES.GET_SPECIES, { ...queryParams, pages });
}

export async function getSpecies(id: string): Promise<Species> {
  return getInfo(API_ROUTES.GET_SPECIES_INFO, id);
}
