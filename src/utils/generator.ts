import { WifiConfig } from './types';

/**
 * Returns a string with special characters \ ; , " and : escaped with a backslash as in MECARD encoding.
 * @param str
 * @returns
 */
export const mecardEncoding = (str: string): string => {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/"/g, '\\"')
    .replace(/:/g, '\\:');
};

/**
 * Generates a string from wi-fi configuration with the following syntax:
 * WIFI:T:WPA;S:mynetwork;P:mypass;;
 * @param config
 * @returns
 */
export const generateWifiString = (config: WifiConfig): string => {
  const { ssid, password, encryption, hiddenSSID } = config;

  const s = `S:${mecardEncoding(ssid)};`;
  const p = `P:${mecardEncoding(password)};`;
  const t = encryption !== 'None' ? `T:${encryption};` : '';
  const h = `H:${hiddenSSID};`;

  return `WIFI:${s}${p}${h}${t};`;
};
