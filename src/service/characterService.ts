import axios from 'axios';
import { API_ROUTES } from '../constants/routes';
import type { Character } from '../types/Character';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/CollectionResponse';
import type { AdditionalQueryParams } from '../types/QueryParams';
import { getList, getMergedList } from './collectionService';

export async function getCharacterList(
  page: number,
  queryParams?: AdditionalQueryParams
): Promise<CollectionResponse<Character>> {
  return getList(API_ROUTES.GET_CHARACTERS, page, queryParams);
}

export async function getMergedCharacterList(
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<Character>> {
  return getMergedList(API_ROUTES.GET_CHARACTERS, pages, queryParams);
}

export async function getCharacter(id): Promise<Character> {
  return axios.get(API_ROUTES.GET_CHARACTER_INFO, { params: { id } }).then((response) => response.data);
}
