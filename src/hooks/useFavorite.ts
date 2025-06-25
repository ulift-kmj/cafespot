import { useContext } from 'react';
import { FavoriteContext } from '@/context/FavoriteContext';

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error(
      'useFavorite은 반드시 FavoriteProvider 안에서 사용해야 합니다.'
    );
  return context;
}
