import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'; // eslint-disable-line no-unused-vars

// 안신's 컴포넌트
import LoginAnsin from './pages/ansin/Login/Login';
import MainAnsin from './pages/ansin/Main/Main';

// 선주's 컴포넌트
import LoginSunjoo from './pages/sunjoo/Login/Login';
import MainSunjoo from './pages/sunjoo/Main/Main';

// 채현's 컴포넌트
import Login from './pages/chaehyun/Login/Login';
import Main from './pages/chaehyun/Main/Main';

// 석호's 컴포넌트
import LoginSeokho from './pages/seokho/Login/Login';
import MainSeokho from './pages/seokho/Main/Main';

// 성용's 컴포넌트
import LoginSeongyong from './pages/seongyong/Login/Login';
import MainSeongyong from './pages/seongyong/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-ansin" element={<LoginAnsin />} />
        <Route path="/main-ansin" element={<MainAnsin />} />
        <Route path="/login-sunjoo" element={<LoginSunjoo />} />
        <Route path="/main-sunjoo" element={<MainSunjoo />} />
        <Route path="/login-cheayeon" element={<Login />} />
        <Route path="/main-chaehyun" element={<Main />} />
        <Route path="/login-seokho" element={<LoginSeokho />} />
        <Route path="/main-seokho" element={<MainSeokho />} />
        <Route path="/login-seongyong" element={<LoginSeongyong />} />
        <Route path="/main-seongyong" element={<MainSeongyong />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
