export type ColorMode = 'light' | 'dark';

export type TabKey = 'url' | 'wifi';

export type Encryption = 'None' | 'WPA' | 'WEP';

export interface WifiConfig {
  ssid: string;
  hiddenSSID: boolean;
  password: string;
  encryption: Encryption;
}
