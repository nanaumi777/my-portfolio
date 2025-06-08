import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import WorksPage from './WorksPage';
import Work1 from './Work1';
import Work2 from './Work2';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>🌟 私のポートフォリオサイト 🌟</h1>

        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>トップ</Link>
          <Link to="/works" style={{ marginRight: '10px' }}>作品一覧</Link>
          <Link to="/contact" style={{ marginRight: '10px' }}>お問い合わせ</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/work1" element={<Work1 />} />
          <Route path="/work2" element={<Work2 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;