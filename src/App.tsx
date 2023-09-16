import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { MainPage } from './pages/main';
import { menu } from './pages/main/config';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {menu.map(item => <Route key={item.label} path={item.path} element={<item.component />} />)}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
