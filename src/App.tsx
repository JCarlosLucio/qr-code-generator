import { Header } from './Header';
import { QRCodeGenerator } from './QRCodeGenerator';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-sky-100 bg-hero-pattern bg-cover text-slate-500 antialiased dark:bg-black dark:bg-dark-hero-pattern dark:text-slate-400">
      <Header />
      <QRCodeGenerator />
    </div>
  );
};

export default App;
