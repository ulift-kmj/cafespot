import { cafeApi } from '@/api/cafeApi';
import {
  useSuspenseQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

const CAFE_QUERY_KEY = {
  list: (query?: string, summary?: string) =>
    ['cafeList', query, summary] as const,
  detail: (id: number) => ['cafeDetail', id] as const,
};

export const useCafeList = (
  pageSize: number = 10,
  query?: string,
  summary?: string
) => {
  return useSuspenseInfiniteQuery({
    queryKey: CAFE_QUERY_KEY.list(query, summary),
    queryFn: ({ pageParam = 0 }) =>
      cafeApi.fetchCafeList({ page: pageParam, pageSize, query, summary }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });
};

export const useCafeDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: CAFE_QUERY_KEY.detail(id),
    queryFn: () => cafeApi.fetchCafeById(id),
  });
};
