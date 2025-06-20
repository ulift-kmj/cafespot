import NavbarContainer from '@/components/Navbar/NavbarContainer';

export default function Navbar() {
  return (
    <NavbarContainer>
      <header className="flex items-center justify-between px-6 py-4">
        <img
          src="/logo.png"
          alt="Cafe Spot Logo"
          className="w-60 h-30 -ml-12"
        />
      </header>
    </NavbarContainer>
  );
}
