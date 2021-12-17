import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const goTomain = () => {
    navigate('/main-seokho');
  };

  const [idText, setIdText] = useState('');
  const [pwText, setPwText] = useState('');

  function handleIdInput(event) {
    setIdText(event.target.value);
    // console.log(event.target.value);
  }

  function handlePwInput(event) {
    setPwText(event.target.value);
    // console.log(event.target.value);
  }

  // const [color, setColor] = useState('#c4e0fb');

  // function idColorChange(event) {}

  // function pwColorChange(event) {}

  // const buttonColor = (조건) ? 버튼컬러 활성화 : 버튼컬러 비활성화

  // ID - @ 포함 -> 버튼 컬러 활성화
  // PW - 5글자 이상 -> 버튼 컬러 활성화

  return (
    <div className="mainContainer">
      <main className="container">
        <h1>Westagram</h1>
        <div className="login">
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
