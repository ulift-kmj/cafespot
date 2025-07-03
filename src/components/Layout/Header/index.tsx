import FavoriteSidebar from '@/components/commons/FavoriteSidebar';
import FilterButton from '@/components/Layout/Header/FilterButton';
import HeaderContainer from '@/components/Layout/Header/HeaderContainer';
import SearchBar from '@/components/Layout/Header/SearchBar';
import SidebarOpenButton from '@/components/Layout/Header/SidebarOpenButton';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useSearchFilterStore } from '@/stores/useSearchFilterStore';
import { useState } from 'react';
import { Link } from 'react-router';
import FilterModal from './FilterModal';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const { resetFilters } = useSearchFilterStore();

  const handleSidebarOpen = () => setIsSidebarOpen(true);
  const handleSidebarClose = () => setIsSidebarOpen(false);

  const handleFilterModalOpen = () => setIsFilterModalOpen(true);
  const handleFilterModalClose = () => setIsFilterModalOpen(false);

  return (
    <>
      <HeaderContainer>
        <header className="flex items-center justify-between px-6 py-4">
          <Link to="/" onClick={resetFilters}>
            <img
              src="/logo.png"
              alt="Cafe Spot Logo"
              className="w-60 h-30 -ml-12"
            />
          </Link>

          <div className="relative hidden md:flex items-center gap-2 mx-4 flex-1 justify-center">
            <SearchBar />

            <Popover
              open={isFilterModalOpen}
              onOpenChange={handleFilterModalOpen}
            >
              <PopoverTrigger asChild>
                <FilterButton />
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4" align="center">
                <FilterModal onClose={handleFilterModalClose} />
              </PopoverContent>
            </Popover>
          </div>

          <SidebarOpenButton onOpen={handleSidebarOpen} />
        </header>
      </HeaderContainer>

      <FavoriteSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </>
  );
}
