import axios, { AxiosResponse } from 'axios';
import type { CollectionResponse, MultipleCollectionResponse } from '../types/collection-response';
import type { AdditionalQueryParams } from '../types/query-params';

export async function getList<T>(
  url: string,
  page: number,
  queryParams?: AdditionalQueryParams
): Promise<CollectionResponse<T>> {
  const params = new URLSearchParams();
  params.append('page', String(page + 1));
  if (queryParams?.searchParam) {
    params.append('search', queryParams.searchParam);
  }
  return axios.get(`${url}?${params}`).then((response) => response.data);
}

export async function getMergedList<T>(
  url: string,
  pages: number[],
  queryParams?: AdditionalQueryParams
): Promise<MultipleCollectionResponse<T>> {
  const params = new URLSearchParams();
  if (queryParams?.searchParam) {
    params.append('search', queryParams.searchParam);
  }
  const urls = pages.map((page) => {
    params.set('page', String(page + 1));
    return `${url}?${params}`;
  });

  return axios
    .all<AxiosResponse<CollectionResponse<T>>>(
      urls.map((url) => {
        return axios.get<CollectionResponse<T>>(url).catch((e) => e.response);
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

export async function getInfo(url: string, id: string | number): Promise<any> {
  return axios.get(url, { params: { id } }).then((response) => response.data);
}
