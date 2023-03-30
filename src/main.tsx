import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import './config.css'
import CharactersPage from './pages/characters';
import ScrollToTop from './components/scrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:page" element={<CharactersPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)