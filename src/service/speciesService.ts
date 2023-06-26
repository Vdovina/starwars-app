import axios from 'axios';
import { API_ROUTES } from '../constants/routes';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/CollectionResponse';
import type { AdditionalQueryParams } from '../types/QueryParams';
import type { Species } from '../types/Species';
import { getList, getMergedList } from './collectionService';

export async function getSpeciesList(
  page: number,
  queryParams?: AdditionalQueryParams
): Promise<CollectionResponse<Species>> {
  return getList(API_ROUTES.GET_SPECIES, page, queryParams);
}

export async function getMergedSpeciesList(
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<Species>> {
  return getMergedList(API_ROUTES.GET_SPECIES, pages, queryParams);
}

export async function getSpecies(id): Promise<Species> {
  return axios.get(API_ROUTES.GET_SPECIES_INFO, { params: { id } }).then((response) => response.data);
}
