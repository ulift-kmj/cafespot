import Layout from '@/components/Layout';
import CafeDetailPage from '@/pages/CafeDetailPage';
import CafeListPage from '@/pages/CafeListPage';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: CafeListPage,
      },
      {
        path: '/cafe/:id',
        Component: CafeDetailPage,
      },
    ],
  },
]);
