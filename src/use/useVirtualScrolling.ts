import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { LoadingStatus } from '../constants/statuses';
import { useThrottling } from './useThrottling';
import { CollectionState } from '../types/CollectionState';
import { MultipleCollectionResponse } from '../types/CollectionResponse';

export type FetchCallbackType<T> = (pages: number[]) => Promise<MultipleCollectionResponse<T>>;

export const useVirtualScrolling = <T>(recoilAtom, fetchCallback: FetchCallbackType<T>) => {
  const [data, setData] = useRecoilState<CollectionState<T>>(recoilAtom);
  const [loading, setLoading] = useState(LoadingStatus.Idle);
  const onScroll = async (pages: number[]) => {
    setLoading(LoadingStatus.Loading);
    try {
      const newItems = await fetchCallback(pages);
      setData({
        total: newItems.count,
        data: [...data.data, ...newItems.results],
      });
      setLoading(LoadingStatus.Success);
    } catch (error) {
      setLoading(LoadingStatus.Error);
    }
  };

  const { callback } = useThrottling(onScroll);

  return { data, loading, onScroll: callback };
};
