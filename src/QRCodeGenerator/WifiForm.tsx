import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from 'react';
import { generateWifiQRCode } from 'utils/generator';
import { WifiConfig } from 'utils/types';

import { GeneratorBtns } from './GeneratorBtns';

interface WifiFormProps {
  setQrCode: Dispatch<SetStateAction<string>>;
}

const initialConfig: WifiConfig = {
  ssid: '',
  hiddenSSID: false,
  encryption: 'WPA',
  password: '',
};

export const WifiForm = ({ setQrCode }: WifiFormProps) => {
  const [wifiConfig, setWifiConfig] = useState<WifiConfig>(initialConfig);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    const isHiddenSSID = name === 'hiddenSSID';

    if (isDisabled) {
      setIsDisabled(false);
    }
    setWifiConfig({ ...wifiConfig, [name]: isHiddenSSID ? checked : value });
  };

  const generate = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (wifiConfig.ssid && wifiConfig.password) {
      const dataUrl = await generateWifiQRCode(wifiConfig);
      setQrCode(dataUrl);
      setIsDisabled(true);
    }
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQrCode('');
    setWifiConfig(initialConfig);
    setIsDisabled(false);
  };

  return (
    <form className="form-control flex w-full flex-col items-center gap-4">
      <div className="flex w-full items-center justify-center gap-2">
        <label className="input-group">
          <span>SSID</span>
          <input
            className="input input-bordered w-full print:text-center print:text-2xl"
            value={wifiConfig.ssid}
            onChange={handleInputChange}
            name="ssid"
            placeholder="Network name"
          />
        </label>
        <label className="label cursor-pointer gap-2 print:hidden">
          <span className="label-text">Hidden?</span>
          <input
            className="checkbox"
            name="hiddenSSID"
            type="checkbox"
            checked={wifiConfig.hiddenSSID}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <label className="input-group">
        <span>Password</span>
        <input
          className="input input-bordered w-full print:text-center print:text-2xl"
          value={wifiConfig.password}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
        />
      </label>

      <div className="flex w-full items-center justify-center gap-4 print:hidden">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">None</span>
          <input
            type="radio"
            name="encryption"
            className="radio"
            value="None"
            checked={wifiConfig.encryption === 'None'}
            onChange={handleInputChange}
          />
        </label>
        <label className="label cursor-pointer gap-2">
          <span className="label-text">WPA / WPA2</span>
          <input
            type="radio"
            name="encryption"
            className="radio"
            value="WPA"
            checked={wifiConfig.encryption === 'WPA'}
            onChange={handleInputChange}
          />
        </label>
        <label className="label cursor-pointer gap-2">
          <span className="label-text">WEP</span>
          <input
            type="radio"
            name="encryption"
            className="radio"
            value="WEP"
            checked={wifiConfig.encryption === 'WEP'}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <GeneratorBtns
        generate={generate}
        isDisabled={isDisabled}
        clear={handleClear}
      />
    </form>
  );
};
