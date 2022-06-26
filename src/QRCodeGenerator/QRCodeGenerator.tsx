import QRCode from 'qrcode';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

export const QRCodeGenerator = () => {
  const [url, setUrl] = useState<string>('');
  const [qrCode, setQrCode] = useState<string>('');

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
          dark: '#000', // Dots colors
          light: '#0000', // Transparent background
        },
      });
      setQrCode(dataUrl);
    }
  };

  const handlePrint = (_event: MouseEvent<HTMLButtonElement>) => {
    window?.print();
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQrCode('');
    setUrl('');
  };

  return (
    <main className="mb-5 flex w-full max-w-xs flex-col items-center gap-4 sm:max-w-md">
      <form className="form-control flex w-full flex-col items-center gap-4">
        <label className="label" htmlFor="url-input">
          <span className="label-text sm:text-lg print:hidden">
            Enter your link to generate the QR code
          </span>
        </label>
        <div className="flex w-full max-w-xs flex-row items-center gap-4 sm:max-w-md">
          <input
            className="input input-bordered input-lg w-full print:text-center print:text-2xl"
            type="text"
            id="url-input"
            value={url}
            onChange={handleUrlChange}
            placeholder="https://google.com"
          />
          {url && (
            <button className="print:hidden" onClick={handleClear}>
              <FaTimesCircle className="text-2xl" />
            </button>
          )}
        </div>
        <button
          className="btn btn-primary btn-block print:hidden"
          type="submit"
          onClick={generate}
        >
          Generate
        </button>
      </form>
      {qrCode && (
        <>
          <img src={qrCode} alt="generated qr code" />
          <a
            className="btn btn-secondary btn-block print:hidden"
            href={qrCode}
            download="qr-code.png"
          >
            Download
          </a>
          <button
            className="btn btn-accent btn-block print:hidden"
            onClick={handlePrint}
          >
            Print
          </button>
        </>
      )}
    </main>
  );
};
