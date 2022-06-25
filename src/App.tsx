import { Header } from './Header';
import { QRCodeGenerator } from './QRCodeGenerator';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-hero-pattern bg-cover antialiased transition-all dark:bg-dark-hero-pattern">
      <Header />
      <QRCodeGenerator />
    </div>
  );
};

export default App;
