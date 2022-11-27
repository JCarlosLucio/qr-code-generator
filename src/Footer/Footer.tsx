import { RiHeartsFill } from 'react-icons/ri';

import { GithubLink } from './GithubLink';

export const Footer = () => {
  return (
    <footer className="flex w-80 items-center justify-center gap-2 p-4 text-xs sm:w-screen print:hidden">
      <span>Made with</span>
      <RiHeartsFill />
      <span>by Lucio</span>
      <GithubLink />
    </footer>
  );
};
