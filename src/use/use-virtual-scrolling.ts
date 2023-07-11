import { useState, useEffect } from 'react';
import { RecoilState, useRecoilStateLoadable } from 'recoil';
import { LoadingStatus } from '../constants/statuses';
import { useThrottle } from './use-throttle';
import { CollectionState } from '../types/collection-state';
import { MultipleCollectionResponse } from '../types/collection-response';
import { AdditionalQueryParams } from '../types/query-params';
import { DEFAULT_PAGES } from '../constants/constants';
import { RecoilLoadingStatus } from '../types/recoil-loading-status';

export type FetchCallbackType<T> = (pages: number[], queryParams?: AdditionalQueryParams) => Promise<MultipleCollectionResponse<T>>;

export const useVirtualScrolling = <T>(
  recoilAtom: RecoilState<CollectionState<T>>,
  fetchCallback: FetchCallbackType<T>,
  searchParam?: string,
  delay?: number
) => {
  const [{ state, contents: data }, setData] = useRecoilStateLoadable<CollectionState<T>>(recoilAtom);
  const [loading, setLoading] = useState<LoadingStatus>(state as RecoilLoadingStatus);

  useEffect(() => {
    setLoading(state as RecoilLoadingStatus);
  }, [state]);

  useEffect(() => {
    if (loading === LoadingStatus.Success) {
      setData({
        total: 0,
        data: [],
      });
      setLoading(LoadingStatus.Loading);
      fetchCallback(DEFAULT_PAGES, { searchParam })
        .then((res) => {
          setData({
            total: res.count,
            data: res.results,
          });
          setLoading(LoadingStatus.Success);
        })
        .catch(() => setLoading(LoadingStatus.Error));
    }
  }, [searchParam, fetchCallback, setData]);

  const onScroll = async (pages: number[]) => {
    setLoading(LoadingStatus.Loading);
    try {
      const newItems = await fetchCallback(pages, { searchParam });
      setData({
        total: newItems.count,
        data: [...data.data, ...newItems.results],
      });
      setLoading(LoadingStatus.Success);
    } catch (error) {
      setLoading(LoadingStatus.Error);
    }
  };

  const callback = useThrottle(onScroll, delay);

  return { data, loading, onScroll: callback };
};
