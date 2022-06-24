import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { ColorModeProvider } from 'utils/ColorModeContext';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>,
);
