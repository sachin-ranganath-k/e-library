import React from 'react';
import StoreProvider from './StoreProvider';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <React.StrictMode>
      <StoreProvider />
    </React.StrictMode>
  </>
);