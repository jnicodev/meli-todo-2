import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App.tsx';
import CreateTaskPage from './components/CreateTaskPage.tsx';

const initWorker = async () => {
  const { worker } = await import('./mocks/browser.ts');

  return worker.start();
};

initWorker().then(() => createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='tasks'>
            <Route
              element={ <CreateTaskPage /> }
              path='create'
            />
          </Route>
        </Route>
      </Routes>

      <App />
    </BrowserRouter>
  </StrictMode>,
));
