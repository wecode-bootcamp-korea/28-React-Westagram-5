import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seongyong');
  };

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleIdInput = event => {
    setUserId(event.target.value);
    console.log(handlePwInput);
  };

  const handlePwInput = event => {
    setUserPw(event.target.value);
    console.log(handlePwInput);
  };

  const [buttonOn, setButtonOn] = useState(false);

  const isPassedLogin = () => {
    return userId.includes('@') && userPw.length > 4
      ? setButtonOn(true)
      : setButtonOn(false);
  };
  console.log(isPassedLogin);

  return (
    <div className="bigcontainer">
      <div className="container">
        <div className="logo">Westagram</div>
        <div className="warp loginform">
          <div className="loginId">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="id"
              onChange={handleIdInput}
              onKeyUp={isPassedLogin}
            />
          </div>
          <div className="loginPw">
            <input
              type="text"
              placeholder="비밀번호"
              id="pw"
              onChange={handlePwInput}
              onKeyUp={isPassedLogin}
            />
          </div>
          <button
            className={buttonOn ? 'onBtn' : 'offBtn'}
            onClick={goToMain}
            id="loginBtn"
            type="button"
            disabled={userId === '' || userPw === '' ? 'true' : 'false'}
          >
            로 그인
          </button>
          <a href="https://www.instagram.com/accounts/password/reset/">
            <footer>비밀번호를 잊으셨나요?</footer>
          </a>
        </div>
      </div>
      <div className="bottom">Copyright by SeongYong</div>
    </div>
  );
};

export default Login;
