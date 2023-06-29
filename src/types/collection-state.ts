export type CollectionState<T> = SuccessCollectionState<T> | ErrorCollectionState;

interface SuccessCollectionState<T> {
  data: T[];
  total: number;
}

interface ErrorCollectionState {
  error: any;
}
