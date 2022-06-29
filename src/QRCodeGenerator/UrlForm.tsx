import QRCode from 'qrcode';
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from 'react';
import { FaQrcode, FaTimes } from 'react-icons/fa';

interface UrlFormProps {
  setQrCode: Dispatch<SetStateAction<string>>;
}

export const UrlForm = ({ setQrCode }: UrlFormProps) => {
  const [url, setUrl] = useState<string>('');

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const generate = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (url) {
      const dataUrl = await QRCode.toDataURL(url, {
        width: 320,
        margin: 1,
        type: 'image/png',
        color: {
          dark: '#000', // Dots color
          light: '#FFF', // Background color
        },
      });
      setQrCode(dataUrl);
    }
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQrCode('');
    setUrl('');
  };

  return (
    <form className="form-control flex w-full flex-col items-center gap-4">
      <label className="label" htmlFor="url-input">
        <span className="label-text sm:text-lg print:hidden">
          Enter your link to generate the QR code
        </span>
      </label>
      <div className="flex w-full flex-row items-center gap-4">
        <input
          className="input input-bordered input-lg w-full print:hidden"
          type="text"
          id="url-input"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://google.com"
        />
        {url && (
          <button
            type="button"
            className="btn btn-ghost btn-square btn-sm print:hidden"
            onClick={handleClear}
          >
            <FaTimes className="text-2xl" />
          </button>
        )}
      </div>
      <button
        className="btn btn-primary btn-block gap-2 print:hidden"
        type="submit"
        onClick={generate}
      >
        Generate <FaQrcode />
      </button>
    </form>
  );
};
