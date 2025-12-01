import React from 'react';
import {
  LoginCard,
  LoginTitle,
  InputField,
  LoginButton,
  LoginHeader,
  LoginBody,
  LoginMainContainer,
  LoginHeaderTitle,
} from '../assets/css/main';
import LoginIcon from '../assets/img/vite.svg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [uname, setUname] = React.useState('');

  const onSubmit = () => {
    if (uname === '') {
      toast.error('Username is required!');
    }
    localStorage.setItem('uname', JSON.stringify(uname));
    toast.success(`Welcome ${uname}`);
    setUname('');
    navigate('/');
  };

  return (
    <LoginMainContainer>
      <div>
        <LoginHeaderTitle> WELCOME TO QUIZ-APP DAILY </LoginHeaderTitle>
        <LoginCard>
            <LoginHeader>
              <img src={LoginIcon} alt='login-icon' height={40} />
              <LoginTitle>Create Account</LoginTitle>
            </LoginHeader>
            <LoginBody>
              <InputField
                name='username'
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                required
                onKeyDown={(e) =>
                  e.key === ' ' && uname === '' && e.preventDefault()
                }
                placeholder='Type your username here'
              />
            </LoginBody>
            <div>
              <LoginButton onClick={onSubmit} disabled={uname == "" || uname == " "}>
                Submit
              </LoginButton>
            </div>
        </LoginCard>
      </div>
    </LoginMainContainer>
  );
}
