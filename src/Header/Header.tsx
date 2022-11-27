import { ColorModeToggle } from './ColorModeToggle';

export const Header = () => {
  return (
    <header className="mt-8 flex h-28 w-80 items-center justify-center gap-4 sm:mt-14 sm:w-screen">
      <h1 className="font-display text-2xl sm:text-4xl">QRCODE GENERATOR</h1>
      <ColorModeToggle />
    </header>
  );
};
