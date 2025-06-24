import CafeCard from '@/components/CafeList/CafeCard';
import CafeGrid from '@/components/CafeList/CafeGrid';
import { useCafeList } from '@/hooks/useCafe';
import type { CafeResponse } from '@/types/cafe';
import EmptyState from '@/components/CafeList/EmptyState';
import ErrorMessage from '@/components/commons/ErrorMessage';
import LoadingMore from '@/components/CafeList/LoadingMore';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export default function CafeList() {
  const { data, status, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useCafeList(10);

  const { loadMoreRef } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const pages = (data?.pages ?? []) as CafeResponse[];
  const cafeList = pages.flatMap((page) => page.data);
  const isEmpty = cafeList.length === 0;

  if (status === 'error') {
    return <ErrorMessage message="카페 목록을 불러오는데 실패했습니다." />;
  }

  return (
    <CafeGrid>
      {isEmpty ? (
        <EmptyState />
      ) : (
        cafeList.map((cafe) => <CafeCard key={cafe.id} cafe={cafe} />)
      )}

      <LoadingMore
        loadMoreRef={loadMoreRef}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </CafeGrid>
  );
}
