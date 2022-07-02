import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from 'react';
import { FaQrcode } from 'react-icons/fa';
import { generateWifiQRCode } from 'utils/generator';
import { WifiConfig } from 'utils/types';

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    const isHiddenSSID = name === 'hiddenSSID';

    setWifiConfig({ ...wifiConfig, [name]: isHiddenSSID ? checked : value });
  };

  const generate = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (wifiConfig.ssid && wifiConfig.password) {
      const dataUrl = await generateWifiQRCode(wifiConfig);
      setQrCode(dataUrl);
    }
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQrCode('');
    setWifiConfig(initialConfig);
  };

  return (
    <form className="form-control flex w-full flex-col items-center gap-4">
      <label className="input-group">
        <span>SSID</span>
        <input
          className="input input-bordered w-full print:text-center print:text-2xl"
          value={wifiConfig.ssid}
          onChange={handleInputChange}
          name="ssid"
          placeholder="Wifi network name"
        />
      </label>
      <label className="label cursor-pointer gap-2">
        <span className="label-text">Is your wifi network hidden?</span>
        <input
          className="checkbox"
          name="hiddenSSID"
          type="checkbox"
          checked={wifiConfig.hiddenSSID}
          onChange={handleInputChange}
        />
      </label>
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

      <div className="flex w-full items-center justify-center gap-4">
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

      <div className="flex w-full flex-grow items-center gap-4">
        <button
          className="btn btn-primary flex-1 gap-2 print:hidden"
          type="submit"
          onClick={generate}
        >
          Generate <FaQrcode />
        </button>
        <button
          type="button"
          className="btn btn-outline gap-2 print:hidden"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
