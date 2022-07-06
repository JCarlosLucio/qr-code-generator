import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { loadColorMode, saveColorMode } from './storage';
import { ColorMode } from './types';

const getInitialMode = (): ColorMode => {
  const colorMode = loadColorMode();

  if (colorMode) {
    return colorMode;
  }

  if (window) {
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light'; // defaults to light Mode
};

export const ColorModeContext = createContext<{
  colorMode: ColorMode | undefined;
  setColorMode: Dispatch<SetStateAction<ColorMode>> | undefined;
}>({
  colorMode: undefined,
  setColorMode: undefined,
});

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState(getInitialMode);

  const rawSetMode = (mode: ColorMode) => {
    const root = window.document.documentElement;

    root.dataset.theme = mode;

    saveColorMode(mode);
  };

  useEffect(() => {
    rawSetMode(colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
