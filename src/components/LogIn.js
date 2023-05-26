import { useNavigate } from "react-router-dom";
import "../css/logIn.css";
import { useState } from "react";

function LogIn() {
  let navigate = useNavigate();
  let [loginId, setLoginId] = useState("");
  let [loginPw, setLoginPw] = useState("");

  return (
    <div className="loginMain">
      <div className="loginPage">
        <div className="loginTitle">OffClothes</div>
        <input
          type="text"
          className="idInput"
          placeholder="아이디"
          value={loginId}
          onChange={(e) => {
            setLoginId(e.target.value);
          }}
        ></input>
        <input
          type="password"
          className="pwInput"
          placeholder="비밀번호"
          value={loginPw}
          onChange={(e) => {
            setLoginPw(e.target.value);
          }}
        ></input>
        <div className="loginButtonMain">
          <button className="loginButton">로그인</button>
          <button className="signUpButton">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
