import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { InnovartePage } from './InnovartePage';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InnovartePage></InnovartePage>
  </StrictMode>
);
