import HeaderContainer from '@/components/Layout/Header/HeaderContainer';
import SearchBar from '@/components/Layout/Header/SearchBar';
import SidebarToggleButton from '@/components/Layout/Header/SidebarToggleButton';
import { PiSlidersHorizontal } from 'react-icons/pi';

export default function Header() {
  return (
    <HeaderContainer>
      <header className="flex items-center justify-between px-6 py-4">
        <img
          src="/logo.png"
          alt="Cafe Spot Logo"
          className="w-60 h-30 -ml-12"
        />

        <div className="relative hidden md:flex items-center gap-2 mx-4 flex-1 justify-center">
          <SearchBar />

          <button className="flex items-center gap-1 px-4 py-2 border border-primary text-primary rounded-full cursor-pointer whitespace-nowrap">
            필터
            <PiSlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

        <SidebarToggleButton />
      </header>
    </HeaderContainer>
  );
}
