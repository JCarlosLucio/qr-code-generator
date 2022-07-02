import QRCode from 'qrcode';

import { WifiConfig } from './types';

/**
 * Returns a string with special characters \ ; , " and : escaped with a backslash as in MECARD encoding.
 * @param str
 * @returns
 */
const mecardEncoding = (str: string): string => {
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
const generateWifiString = (config: WifiConfig): string => {
  const { ssid, password, encryption, hiddenSSID } = config;

  const s = `S:${mecardEncoding(ssid)};`;
  const p = `P:${mecardEncoding(password)};`;
  const t = encryption !== 'None' ? `T:${encryption};` : '';
  const h = `H:${hiddenSSID};`;

  return `WIFI:${s}${p}${h}${t};`;
};

export const generateQRCode = async (text: string) => {
  try {
    return await QRCode.toDataURL(text, {
      width: 320,
      margin: 4,
      type: 'image/png',
      color: {
        dark: '#000', // Dots color
        light: '#FFF', // Background color
      },
    });
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const generateWifiQRCode = async (wifiConfig: WifiConfig) => {
  const wifiString = generateWifiString(wifiConfig);
  return await generateQRCode(wifiString);
};
