import '@/index.css';
import { queryClient } from '@/lib/queryClient';
import { router } from '@/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import FavoriteProvider from '@/context/FavoriteProvider';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <FavoriteProvider>
      <RouterProvider router={router} />
    </FavoriteProvider>
  </QueryClientProvider>
);
