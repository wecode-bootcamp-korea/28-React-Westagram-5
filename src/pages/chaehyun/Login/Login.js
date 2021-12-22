import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btn, setBtn] = useState(false);

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-chaehyun');
  };
  function handleIdInput(e) {
    setId(e.target.value);
    btnActivate();
  }
  function handlePwInput(e) {
    setPw(e.target.value);
    btnActivate();
  }
  function btnActivate() {
    return id.includes('@') && pw.length > 3 ? setBtn(true) : setBtn(false);
  }
  /*
  function requestLogin() {
    fetch('http://10.58.3.111:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  }
  */
  function requestSign() {
    fetch('http://10.58.3.111:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        full_name: '옥채현',
        emaidl: id,
        passworbd: pw,
        username: '채현',
      }),
    })
      // 여기까지가 나중에 받을 값이라고 생각하시면 되요= {}
      .then(response => response.json()) // 자바스크립트 객체로 읽을수있게 변경
      .then(result => console.log('결과: ', result)); // result = 실제 데이터가 객체형식으로
  }

  return (
    <body>
      <div className="wrap">
        <h1 className="title">Webstagram</h1>
        <div className="login_box">
          <input
            type="text"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={e => handleIdInput(e)}
          />
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            onChange={e => handlePwInput(e)}
          />
          <button onClick={requestSign} className={btn ? 'btnOn' : 'btnOff'}>
            로그인
          </button>
        </div>
        <div className="forget_pw">
          <a href="http://google.com">비밀번호를 잊으셨나요?</a>
          <div>
            <Link to="/main-chaehyun"> 메인 페이지</Link>
          </div>
          <div>
            <button onClick={goToMain}>useNavigate로 이동</button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
