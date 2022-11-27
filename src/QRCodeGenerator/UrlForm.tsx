import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from 'react';
import { generateQRCode } from 'utils/generator';

import { GeneratorBtns } from './GeneratorBtns';

interface UrlFormProps {
  setQrCode: Dispatch<SetStateAction<string>>;
}

export const UrlForm = ({ setQrCode }: UrlFormProps) => {
  const [url, setUrl] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleUrlChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (isDisabled) {
      setIsDisabled(false);
    }
    setUrl(event.target.value);
  };

  const generate = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (url) {
      const dataUrl = await generateQRCode(url);
      setQrCode(dataUrl);
      setIsDisabled(true);
    }
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQrCode('');
    setUrl('');
    setIsDisabled(false);
  };

  return (
    <form className="form-control flex w-full flex-col items-center gap-4">
      <label className="label" htmlFor="url-textarea">
        <span className="label-text sm:text-lg print:hidden">
          Enter your link to generate the QR code
        </span>
      </label>
      <div className="flex w-full items-center gap-4">
        <textarea
          className="textarea-bordered textarea w-full print:text-center print:text-2xl"
          id="url-textarea"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://google.com"
          data-test="url-textarea"
        />
      </div>
      <GeneratorBtns
        generate={generate}
        isDisabled={isDisabled}
        clear={handleClear}
      />
    </form>
  );
};
