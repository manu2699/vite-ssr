import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';

import './index.css'

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
