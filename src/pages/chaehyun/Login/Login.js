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
          <button className={btn ? 'btnOn' : 'btnOff'}>로그인</button>
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
