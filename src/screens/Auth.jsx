import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerUser, loginUser } from '../services/api';
import user_icon from '../assets/icons/person.png';
import email_icon from '../assets/email.png';
import Password_icon from '../assets/password.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  width: 400px;
  background: #fff;
  padding-bottom: 20px;
  text-align: center;
`;

const Header = styled.div`
  margin-top: 20px;
`;

const Text = styled.div`
  color: #3c009d;
  font-size: 32px;
  font-weight: 700;
`;


const Inputs = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 50px;
  background: #eaeaea;
  border-radius: 6px;
`;

const InputIcon = styled.img`
  margin: 0px 20px;
`;

const InputField = styled.input`
  height: 30px;
  width: 250px;
  background: transparent;
  border: none;
  outline: none;
  color: #797979;
  font-size: 14px;
`;

const ForgotPassword = styled.div`
  margin-top: 15px;
  color: #797979;
  font-size: 14px;
`;

const ForgotPasswordSpan = styled.span`
  color: #4c00b4;
  cursor: pointer;
`;

const SubmitContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 40px auto;
`;

const SubmitButton = styled.div`
  width: 150px;
  height: 40px;
  color: ${props => (props.gray ? '#676767' : '#fff')};
  background: ${props => (props.gray ? '#eaeaea' : '#4c00b4')};
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Submit = styled.div`
  width: 80%;
  height: 40px;
  color: ${props => (props.gray ? '#676767' : '#fff')};
  background: ${props => (props.gray ? '#eaeaea' : '#4c00b4')};
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;  
`;

const LoginSignUp = () => {
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (action === 'Login') {
      const response = await loginUser(email, password);
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        navigate('/');
      }
    } else {
      await registerUser(name, email, password);
      setAction('Login');
    }
  };

  return (
    <Container>
      <Header>
        <Text>{action}</Text>
      </Header>
      <Inputs>
        {action === "Login" ? null : (
          <Input>
            <InputIcon src={user_icon} alt='' />
            <InputField type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </Input>
        )}
        <Input>
          <InputIcon src={email_icon} alt='' />
          <InputField type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Input>
        <Input>
          <InputIcon src={Password_icon} alt='' />
          <InputField type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Input>
      </Inputs>
      {action === "Sign Up" ? null : (
        <ForgotPassword>
          Lost password? <ForgotPasswordSpan>Click Here!</ForgotPasswordSpan>
        </ForgotPassword>
      )}
      <SubmitContainer>
        <SubmitButton gray={action === "Login"} onClick={() => setAction("Sign Up")}>Sign Up</SubmitButton>
        <SubmitButton gray={action === "Sign Up"} onClick={() => setAction("Login")}>Login</SubmitButton>
      </SubmitContainer>
      <Submit onClick={handleSubmit}>{action}</Submit>
    </Container>
  );
};

export default LoginSignUp;
