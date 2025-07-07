import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { InnovarteApp } from './InnovarteApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InnovarteApp></InnovarteApp>
  </StrictMode>
);
