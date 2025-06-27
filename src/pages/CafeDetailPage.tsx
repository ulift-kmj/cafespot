import { useParams } from 'react-router';
import { useCafeDetail } from '@/hooks/useCafe';
import CafeDetail from '@/components/CafeDetail';
import Container from '@/components/commons/Container';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/commons/LoadingSpinner';

export default function CafeDetailPage() {
  const { id } = useParams();
  const { data: cafe } = useCafeDetail(Number(id));

  return (
    <Container>
      <Suspense fallback={<LoadingSpinner />}>
        <CafeDetail cafe={cafe} />
      </Suspense>
    </Container>
  );
}
