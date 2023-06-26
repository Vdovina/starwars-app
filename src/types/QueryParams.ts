export type QueryParams = {
  page: number | number[];
} & AdditionalQueryParams;

export interface AdditionalQueryParams {
  searchParam?: string;
}
