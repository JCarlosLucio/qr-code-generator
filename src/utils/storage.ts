import { COLOR_MODE_STORAGE_KEY } from './constants';
import { ColorMode } from './types';

export const saveColorMode = (colorMode: ColorMode) =>
  window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, colorMode);

export const loadColorMode = (): ColorMode | null => {
  if (window && window.localStorage) {
    const colorMode = window.localStorage.getItem(COLOR_MODE_STORAGE_KEY);
    if (colorMode === 'light' || colorMode === 'dark' || colorMode === null) {
      return colorMode;
    }
  }

  return null;
};
