import React, { useState } from 'react';
import './Login.scss';

import { Link } from 'react-router-dom';

const Login = () => {
  const [loginInput, setLoginInput] = useState('');

  const [pwInput, setPwInput] = useState('');

  const handleLoginInput = event => {
    setLoginInput(event.target.value);
  };

  const Login = () => {};
  return (
    <main class="mainContainer">
      <div class="loginInner">
        <h1>Westagram</h1>
        <div class="loginContent">
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleLoginInput}
          />
          <input id="pw" type="text" placeholder="비밀번호" />
          <Link to="/main">로그인</Link>
        </div>
        <a>비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
};

export default Login;
