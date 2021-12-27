import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [buttonOn, setButtonOn] = useState(false);

  const navigate = useNavigate();

  // const submit = () => {
  // console.log(userId, userPw);
  // fetch('http://10.58.3.158:8000/users/signup', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: userId,
  //     password: userPw,
  //     name: '엄성용',
  //     phone_number: '010-1234-5679',
  //     date_of_birth: null,
  //   }),
  // })
  //   .then(response => response.json())
  //   .then(result => console.log('결과: ', result));

  // fetch('http://10.58.3.158:8000/users/login', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: userId,
  //     password: userPw,
  //   }),
  // })
  //   .then(response => response.json())
  //   .then(result => console.log('결과: ', result));
  // };

  const goToMain = () => {
    navigate('/main-seongyong');
  };

  const handleIdInput = event => {
    setUserId(event.target.value);
    isPassedLogin();
  };

  const handlePwInput = event => {
    setUserPw(event.target.value);
    isPassedLogin();
  };

  const isPassedLogin = () => {
    return userId.includes('@') && userPw.length > 4
      ? setButtonOn(true)
      : setButtonOn(false);
  };

  return (
    <section>
      <div className="Logincontainer">
        <div className="Logininner">
          <div className="logo">Westagram</div>
          <div>
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
                type="password"
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
              disabled={userId === '' || userPw === '' ? true : false}
            >
              로그인
            </button>
            <a href="https://www.instagram.com/accounts/password/reset/">
              <footer>비밀번호를 잊으셨나요?</footer>
            </a>
          </div>
        </div>
        <div className="bottom">Copyright by SeongYong</div>
      </div>
    </section>
  );
};

export default Login;
