export type SingleListQueryParams = {
  page?: number;
} & AdditionalQueryParams;

export type MultipleListQueryParams = {
  pages: number[];
} & AdditionalQueryParams;

export interface AdditionalQueryParams {
  searchParam?: string;
}
