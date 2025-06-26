import { summaryTranslations } from '@/constants/summary';
import { useSearchFilterStore } from '@/stores/useSearchFilterStore';
import { PiSlidersHorizontal } from 'react-icons/pi';

export default function FilterButton() {
  const { selectedSummary } = useSearchFilterStore();

  return (
    <button className="flex items-center gap-1 px-4 py-2 border border-primary text-primary rounded-full cursor-pointer whitespace-nowrap">
      {selectedSummary
        ? summaryTranslations[
            selectedSummary as keyof typeof summaryTranslations
          ]
        : '필터'}
      <PiSlidersHorizontal className="w-5 h-5" />
    </button>
  );
}
