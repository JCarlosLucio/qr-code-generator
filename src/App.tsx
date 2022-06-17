import { Header } from './Header';
import { QRCodeGenerator } from './QRCodeGenerator';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white text-slate-500 antialiased dark:bg-indigo-900 dark:text-slate-400">
      <Header />
      <QRCodeGenerator />
    </div>
  );
};

export default App;
