import React from "react";
import {
  LoginCard,
  LoginTitle,
  InputField,
  LoginButton,
  LoginHeader,
  LoginBody,
} from "../assets/css/main";
import LoginIcon from "../assets/img/vite.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const unameRef = React.useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    if (unameRef.current?.value === "") {
      toast.error("Username is required!");
    } else {
      localStorage.setItem("uname", JSON.stringify(unameRef.current?.value));
      toast.success(`Welcome ${unameRef.current?.value}`);
      navigate("/");
    }
  };

  return (
    <LoginCard>
      <LoginHeader>
        <img src={LoginIcon} alt="login-icon" height={40} />
        <LoginTitle>Create Account</LoginTitle>
      </LoginHeader>
      <LoginBody>
        <InputField
          name="username"
          ref={unameRef}
          required
          placeholder="Type your username here"
        />
      </LoginBody>
      <div>
        <LoginButton onClick={onSubmit}>Submit</LoginButton>
      </div>
    </LoginCard>
  );
}
