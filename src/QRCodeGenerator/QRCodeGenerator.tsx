import QRCode from 'qrcode';
import { ChangeEvent, MouseEvent, useState } from 'react';

export const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const generate = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const dataUrl = await QRCode.toDataURL(url, {
      type: 'image/png',
      color: {
        dark: '#00F', // Blue dots
        light: '#0000', // Transparent background
      },
    });
    setQrCode(dataUrl);
    setUrl('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://google.com"
        />
        <button type="submit" onClick={generate}>
          Generate
        </button>
      </form>
      {qrCode && (
        <>
          <img src={qrCode} alt="generated qr code" />
          <a role="button" href={qrCode} download="qr-code.png">
            Download
          </a>
        </>
      )}
    </div>
  );
};
