import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const goTomain = () => {
    navigate('/main-seokho');
  };

  const [idText, setIdText] = useState('');

  function handleIdInput(event) {
    setIdText(event.target.value);
  }

  const [pwText, setPwText] = useState('');

  function handlePwInput(event) {
    setPwText(event.target.value);
  }

  const [color, setColor] = useState('#c4e0fb');
  const buttonColorChange = () => {
    if (idText.includes('@') && pwText.length > 5) {
      // idText & pwText의 값으로 했어야 했는데 함수로 하고 있었음....(value값의 포함, 길이를 생각했어야했음.)
      setColor('blue');
    }
  };

  // (@ 포함 되어있으면 & 5 글자 이상이면) ? 'blue' : '#c4e0fb'

  return (
    <div className="mainContainer">
      <main className="container">
        <h1>Westagram</h1>
        <div onChange={buttonColorChange} className="login">
          <input
            onChange={handleIdInput}
            type="text"
            id="login-id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePwInput}
            type="password"
            id="login-pw"
            placeholder="비밀번호"
          />
          <button
            onClick={goTomain}
            id="login-btn"
            style={{ backgroundColor: color }}
          >
            {' '}
            로그인{' '}
          </button>
          {/* <button id="login-btn">로그인</button> */}
          {/* `${color}` 백틱써도 되는데 무슨 차이인지 모르겠음. 확인하기. */}
        </div>
        <div className="forgetpw">비밀번호를 잊으셨나요?</div>
      </main>
    </div>
  );
};

export default Login;
