import React, { useState } from 'react';
import styled from 'styled-components';
import user_icon from '../assets/icons/person.png';
import email_icon from '../assets/email.png';
import Password_icon from '../assets/password.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 200px;
  width: 600px;
  background: #fff;
  padding-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 100%;
  margin-top: 30px;
`;

const Text = styled.div`
  color: #3c009d;
  font-size: 48px;
  font-weight: 700;
`;

const Underline = styled.div`
  width: 61px;
  height: 6px;
  background: #3c009d;
  border-radius: 9px;
`;

const Inputs = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 480px;
  height: 80px;
  background: #eaeaea;
  border-radius: 6px;
`;

const InputIcon = styled.img`
  margin: 0px 30px;
`;

const InputField = styled.input`
  height: 50px;
  width: 400px;
  background: transparent;
  border: none;
  outline: none;
  color: #797979;
  font-size: 19px;
`;

const ForgotPassword = styled.div`
  padding-left: 62px;
  margin-top: 27px;
  color: #797979;
  font-size: 18px;
`;

const ForgotPasswordSpan = styled.span`
  color: #4c00b4;
  cursor: pointer;
`;

const SubmitContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 60px auto;
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 59px;
  color: #fff;
  background: ${props => (props.gray ? '#eaeaea' : '#4c00b4')};
  border-radius: 50px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
  color: ${props => (props.gray ? '#676767' : '#fff')};
`;

const LoginSignUp = () => {
  const [action, setAction] = useState('Login');

  return (
    <Container>
      <Header>
        <Text>{action}</Text>
        <Underline />
      </Header>
      <Inputs>
        {action === "Login" ? null : (
          <Input>
            <InputIcon src={user_icon} alt='' />
            <InputField type="text" placeholder='Name' />
          </Input>
        )}
        <Input>
          <InputIcon src={email_icon} alt='' />
          <InputField type="email" placeholder='Email Id' />
        </Input>
        <Input>
          <InputIcon src={Password_icon} alt='' />
          <InputField type="password" placeholder='Password' />
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
    </Container>
  );
};

export default LoginSignUp;
