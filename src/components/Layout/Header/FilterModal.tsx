import { summaryTranslations } from '@/constants/summary';
import { useSearchFilterStore } from '@/stores/useSearchFilterStore';

interface FilterModalProps {
  onClose: () => void;
}

export default function FilterModal({ onClose }: FilterModalProps) {
  const { selectedSummary, setSelectedSummary } = useSearchFilterStore();

  return (
    <>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {Object.entries(summaryTranslations).map(([value, display]) => (
            <button
              key={value}
              onClick={() =>
                setSelectedSummary(selectedSummary === value ? '' : value)
              }
              className={`px-4 py-2 rounded-full border cursor-pointer ${
                selectedSummary === value
                  ? 'bg-primary text-white border-primary-400'
                  : 'text-beigeBrown border-beigeBrown'
              }`}
            >
              {display}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          닫기
        </button>
      </div>
    </>
  );
}
