import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goTomain = () => {
    navigate('/main-seokho');
  };

  const [idText, setIdText] = useState('');
  const [pwText, setPwText] = useState('');
  // const [btn, setBtn] = useState(false);

  const handleIdInput = e => {
    setIdText(e.target.value);
    // btnActivate();
  };

  const handlePwInput = e => {
    setPwText(e.target.value);
    // btnActivate();
  };

  // const [color, setColor] = useState('#c4e0fb');
  // const btnActivate = () => {
  //   return idText.includes('@') && pwText.length > 5
  //     ? setBtn(true)
  //     : setBtn(false);

  //   if (idText.includes('@') && pwText.length > 5) {
  //     // idText & pwText의 값으로 했어야 했는데 함수로 하고 있었음....(value값의 포함, 길이를 생각했어야했음.)
  //     setBtn('blue');
  //   }
  // };

  const isVariable = idText.includes('@') && pwText.length > 5;
  // console.log(isVariable);

  const keyEnter = e => {
    if (e.key === 'Enter') {
      goTomain();
    }
  };

  const submitUserInfoLogin = () => {
    fetch('http://10.58.3.111:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: idText,
        password: pwText,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          goTomain();
        }
      });
    // .then(result => console.log('결과: ', result));
  };

  // const submitUserInfoSign = () => {
  //   fetch('http://10.58.3.111:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       full_name: '이석호',
  //       email: idText,
  //       password: pwText,
  //       username: '석호',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => console.log('결과: ', result));
  // };

  return (
    <div className="containerOutside">
      <main className="container">
        <h1>Westagram</h1>
        <form onKeyPress={keyEnter} className="login">
          <input
            onChange={handleIdInput}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePwInput}
            type="password"
            placeholder="비밀번호"
          />
          <button
            onClick={submitUserInfoLogin}
            className={`commonButton ${isVariable ? 'btnOn' : 'btnOff'}`}
            // className={isVariable ? 'btnOn' : 'btnOff'}
            type="button"
          >
            로그인
          </button>
          {/* `${color}` 백틱써도 되는데 무슨 차이인지 모르겠음. 확인하기. */}
        </form>
        <div className="forgetpw">비밀번호를 잊으셨나요?</div>
      </main>
    </div>
  );
};

export default Login;
