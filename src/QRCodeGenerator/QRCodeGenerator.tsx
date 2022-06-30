import { MouseEvent, useState } from 'react';
import { FaDownload, FaPrint } from 'react-icons/fa';

import { UrlForm } from './UrlForm';

export const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState<string>('');

  const handlePrint = (_event: MouseEvent<HTMLButtonElement>) => {
    window?.print();
  };

  return (
    <main className="mb-5 flex w-full max-w-xs flex-col items-center gap-4 sm:max-w-md print:max-w-2xl">
      <UrlForm setQrCode={setQrCode} />
      {qrCode && (
        <>
          <img className="artboard-demo" src={qrCode} alt="generated qr code" />

          <div className="flex w-full flex-grow gap-2 print:hidden">
            <a
              className="btn btn-secondary flex-1 gap-2"
              href={qrCode}
              download="qr-code.png"
            >
              Download <FaDownload />
            </a>
            <button
              className="btn btn-accent flex-1 gap-2"
              onClick={handlePrint}
            >
              Print <FaPrint />
            </button>
          </div>
        </>
      )}
    </main>
  );
};
