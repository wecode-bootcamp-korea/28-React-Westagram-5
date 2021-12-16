import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goTomain = () => {
    navigate('/main-seokho');
  };

  return (
    <div className="mainContainer">
      <main className="container">
        <h1>Westagram</h1>
        <div className="login">
          <input
            type="text"
            id="login-id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="password" id="login-pw" placeholder="비밀번호" />
          <button onClick={goTomain} id="login-btn">
            {' '}
            로그인{' '}
          </button>
          {/* <button id="login-btn">로그인</button> */}
        </div>
        <div className="forgetpw">비밀번호를 잊으셨나요?</div>
      </main>
    </div>
  );
};

export default Login;
