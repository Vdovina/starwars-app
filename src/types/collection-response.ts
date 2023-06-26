export interface CollectionResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export type MultipleCollectionResponse<T> = Pick<CollectionResponse<T>, 'count' | 'results'>;
