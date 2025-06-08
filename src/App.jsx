import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Work1 from './Work1';
import Work2 from './Work2';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>🌟 私のポートフォリオサイト 🌟</h1>

       <nav>
          <Link to="/">トップ</Link> | <Link to="/work1">作品1</Link> | <Link to="/work2">作品2</Link>
       </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <h2>トップページ 🏠</h2>
              <img src="https://picsum.photos/300/200" alt="サンプル画像" style={{ borderRadius: '10px', marginBottom: '20px' }} />
              <p>こんにちは！私はWeb開発に興味があります。<br />以下は私の作品です：</p>
              <h2>📋 作品一覧</h2>
              <ul>
                <li><Link to="/work1">作品1：ToDoアプリ</Link></li>
                <li><a href="/work1" target="_blank">作品2：写真ギャラリー</a></li>
                <li>作品3：チャットアプリ</li>
              </ul>
              <h2>📬 お問い合わせ</h2>
              <p><a href="mailto:example@example.com">メールはこちら</a></p>
            </div>
          } />
          <Route path="/work1" element={<Work1 />} />
          <Route path="/work2" element={<Work2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
