import axios, { AxiosResponse } from 'axios';
import { API_ROUTES } from '../constants/routes';
import type { Character } from '../types/Character';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/CollectionResponse';
import type { QueryParams } from '../types/QueryParams';

export async function getCharacterList(page: number, queryParams?: QueryParams): Promise<CollectionResponse<Character>> {
  const params = new URLSearchParams();
  params.append('page', String(page + 1));
  if (queryParams?.searchParam) {
    params.append('search', queryParams.searchParam);
  }
  return axios.get(`${API_ROUTES.GET_CHARACTERS}?${params}`).then((response) => response.data);
}

export async function getMergedCharacterList(
  pages: number[],
  queryParams?: QueryParams
): Promise<MultipleCollectionResponse<Character>> {
  const params = new URLSearchParams();
  if (queryParams?.searchParam) {
    params.append('search', queryParams.searchParam);
  }
  const urls = pages.map((page) => {
    params.set('page', String(page + 1));
    return `${API_ROUTES.GET_CHARACTERS}?${params}`;
  });

  return axios
    .all<AxiosResponse<CollectionResponse<Character>>>(
      urls.map((url) => {
        return axios.get<CollectionResponse<Character>>(url).catch((e) => e.response);
      })
    )
    .then(
      axios.spread((...allData) => {
        const count = allData[0].data?.count ?? 0;
        const collections = allData.map((data) => (data.status === 200 ? data.data.results : [])).flat(1);
        return {
          count,
          results: collections,
        };
      })
    )
    .catch(() => {
      return {
        count: 0,
        results: [],
      };
    });
}

export async function getCharacter(id): Promise<Character> {
  return axios.get(API_ROUTES.GET_CHARACTER_INFO, { params: { id } }).then((response) => response.data);
}
