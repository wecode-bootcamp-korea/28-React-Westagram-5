import React, { useState } from 'react';
import './Login 복사본.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [id, setId] = useState('');

  const [pw, setPw] = useState('');

  const handleLoginInput = event => {
    setId(event.target.value);
  };

  const setpassword = event => {
    setPw(event.target.value);
  };

  const fetchData = () => {
    fetch('http://10.58.5.56:8080/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => { 
      });
  };

  return (
    <main className="mainContainer">
      <div className="loginInner">
        <h1>Westagram</h1>
        <div className="loginContent">
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleLoginInput}
          />
          <input
            id="pw"
            type="text"
            placeholder="비밀번호"
            onChange={setpassword}
          />

          <div>
            <button onClick={} type="button">
              로그인
            </button>
          </div>
        </div>
        <a>비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
};

export default Login;
