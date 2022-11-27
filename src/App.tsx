import { Footer } from './Footer';
import { Header } from './Header';
import { QRCodeGenerator } from './QRCodeGenerator';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-hero-pattern bg-cover antialiased transition-all dark:bg-dark-hero-pattern">
      <div className="flex flex-col items-center">
        <Header />
        <QRCodeGenerator />
      </div>
      <Footer />
    </div>
  );
};

export default App;
