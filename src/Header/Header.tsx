import { ColorModeToggle } from './ColorModeToggle';
import { GithubLink } from './GithubLink';

export const Header = () => {
  return (
    <header className="flex h-44 w-80 items-center justify-center gap-4 sm:h-52 sm:w-screen">
      <h1 className="font-display text-2xl sm:text-4xl">QRCODE GENERATOR</h1>
      <GithubLink />
      <ColorModeToggle />
    </header>
  );
};
