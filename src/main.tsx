import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import CreateTaskPage from "./components/CreateTaskPage.tsx";

const initWorker = async () => {
  const { worker } = await import('./mocks/browser.ts');

  return worker.start();
}

initWorker().then(() => createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='tasks'>
            <Route path='create' element={ <CreateTaskPage /> }/>
          </Route>
        </Route>
      </Routes>

      <App />
    </BrowserRouter>
  </StrictMode>,
));
