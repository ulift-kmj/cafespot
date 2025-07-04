import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchFilterState {
  searchQuery?: string;
  selectedSummary?: string;
  setSearchQuery: (query: string) => void;
  setSelectedSummary: (summary: string) => void;
  resetFilters: () => void;
}

export const useSearchFilterStore = create<SearchFilterState>()(
  persist(
    (set) => ({
      searchQuery: '',
      selectedSummary: '',
      setSearchQuery: (query) => {
        set({ searchQuery: query });
        // Update URL with query parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (query) {
          urlParams.set('query', query);
        } else {
          urlParams.delete('query');
        }
        window.history.replaceState(null, '', `/?${urlParams.toString()}`);
      },
      setSelectedSummary: (summary) => {
        set({ selectedSummary: summary });
        // Update URL with summary parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (summary) {
          urlParams.set('summary', summary);
        } else {
          urlParams.delete('summary');
        }
        window.history.replaceState(null, '', `/?${urlParams.toString()}`);
      },
      resetFilters: () => {
        set({ searchQuery: '', selectedSummary: '' });
        // Clear URL parameters
        window.history.replaceState(null, '', '/');
      },
    }),
    {
      name: 'search-filter-storage',
    }
  )
);
