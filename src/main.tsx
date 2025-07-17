import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { InnovarteApp } from './InnovarteApp';

import './index.css';

// Importar fuentes
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InnovarteApp></InnovarteApp>
  </StrictMode>
);
