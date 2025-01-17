import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// Styled Components
const Body = styled.div`
  font-family: "Poppins", sans-serif;
  background: #fcf4fb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #fff;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  width: 50vw;
  min-height: 480px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  transition: all 0.6s ease-in-out;

  &.active .switch-content {
    transform: translateX(100%);
    border-radius: 60px 0 0 60px;
  }
`;

const Button = styled.button`
  background-color: #82257b;
  color: #fff;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #691c62;
  }
`;

const HeaderText = styled.div`
  h1 {
    color: #82257b;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

const Form = styled.form`
  padding: 40px;
  width: 50%;
`;

const SwitchContent = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 0 60px 60px 0;
  z-index: 1000;
  background-color: #f7eafc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SwitchPanel = styled.div`
  text-align: center;
  h1 {
    color: #82257b;
    margin-bottom: 15px;
  }
  p {
    color: #555;
  }
`;

import React from "react";

export const Login = () => {
    
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", { username, email, password })
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "success") {
          navigate("/home");
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Body>
      <Content className={isActive ? "active" : ""}>
        {/* Register Form */}
        <Form onSubmit={handleRegister}>
          <HeaderText>
            <h1>Create Account</h1>
          </HeaderText>
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </Form>

        {/* Login Form */}
        <Form onSubmit={handleLogin}>
          <HeaderText>
            <h1>Sign In</h1>
          </HeaderText>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <Button type="submit">Login</Button>
        </Form>

        {/* Switch Panel */}
        <SwitchContent>
          <SwitchPanel>
            <h1>{isActive ? "Welcome Back" : "Welcome"}</h1>
            <p>
              {isActive
                ? "We're happy to see you back!"
                : "Join our platform and explore a new experience."}
            </p>
            <Button onClick={() => setIsActive(!isActive)}>
              {isActive ? "Login" : "Register"}
            </Button>
          </SwitchPanel>
        </SwitchContent>
      </Content>
    </Body>
  );
};

export default LoginRegister;
