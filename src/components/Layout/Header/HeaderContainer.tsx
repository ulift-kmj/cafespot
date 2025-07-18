interface HeaderContainerProps {
  children: React.ReactNode;
}

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 border-b-2">
      <div className="w-[90%] mx-auto">{children}</div>
    </div>
  );
}
