import { MouseEvent, useState } from 'react';
import { FaDownload, FaPrint } from 'react-icons/fa';
import { TabKey } from 'utils/types';

import { UrlForm } from './UrlForm';
import { WifiForm } from './WifiForm';

export const QRCodeGenerator = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('url');
  const [qrCode, setQrCode] = useState<string>('');

  const handlePrint = (_event: MouseEvent<HTMLButtonElement>) => {
    window?.print();
  };

  const handleTab =
    (tabKey: TabKey) => (_event: MouseEvent<HTMLButtonElement>) => {
      setActiveTab(tabKey);
      setQrCode('');
    };

  const activeTabClass = (tabKey: TabKey) =>
    activeTab === tabKey ? 'tab tab-active' : 'tab';

  return (
    <main className="mb-5 flex w-full max-w-xs flex-col items-center gap-4 sm:max-w-md print:max-w-2xl">
      <div className="tabs tabs-boxed">
        <button className={activeTabClass('url')} onClick={handleTab('url')}>
          URL
        </button>
        <button className={activeTabClass('wifi')} onClick={handleTab('wifi')}>
          WIFI
        </button>
      </div>

      {activeTab === 'url' ? (
        <UrlForm setQrCode={setQrCode} />
      ) : (
        <WifiForm setQrCode={setQrCode} />
      )}

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
