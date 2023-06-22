import axios, { AxiosResponse } from 'axios';
import { API_ROUTES } from '../constants/routes';
import { Character } from '../types/Character';
import { CollectionResponse, MultipleCollectionResponse } from '../types/CollectionResponse';

export async function getCharacterList(page: number): Promise<CollectionResponse<Character>> {
  return axios.get(API_ROUTES.GET_CHARACTERS, { params: { page: page + 1 } }).then((response) => response.data);
}

export async function getMergedCharacterList(pages: number[]): Promise<MultipleCollectionResponse<Character>> {
  const urls = pages.map((page) => `${API_ROUTES.GET_CHARACTERS}?page=${page + 1}`);
  return axios
    .all<AxiosResponse<CollectionResponse<Character>>>(urls.map((url) => axios.get<CollectionResponse<Character>>(url)))
    .then(
      axios.spread((...allData) => {
        const count = allData[0].data.count;
        const collections = allData.map((data) => data.data.results).flat(1);
        return {
          count,
          results: collections,
        };
      })
    );
}

export async function getCharacter(id): Promise<Character> {
  return axios.get(API_ROUTES.GET_CHARACTER_INFO, { params: { id } }).then((response) => response.data);
}
