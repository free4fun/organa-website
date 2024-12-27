import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/index.tsx';
import MainLayout from './layouts/MainLayout';
import Header from './components/header/Header';
import About from './layouts/About';


const App: React.FC = () => {
  return (
    <BrowserRouter>
          <div>
          <header>
          <Header />
          </header>

        <Routes>
          <Route index path="/" element={<MainLayout />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      </BrowserRouter>
      
  );
};

export default App;