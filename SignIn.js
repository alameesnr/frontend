import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import adds from '../assets/adds.jpg'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

//import backgroundImage from './background.jpg';

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${adds});
  height: 100vh;
  
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px; /* Adjust as needed */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  
`;

const Label = styled.label`
  margin-bottom: 5px;
  gap: 4px;
  align-item: center;
  
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  
  display: flex;
  width: 100%; /* Adjust as needed */
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: 10px;
  border-radius: 40px;
  cursor: pointer;
`;

const SignUpLink = styled.p`
  margin-top: 20px;
  text-align: center;

  a {
    color: #007bff;
  }
`;

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
  
    const handleSignIn = async (event) => {
      event.preventDefault();
     // const rfrsh = new FormData(event.currentTarget);
  
   const data = {
        username: username,
        password: password
      };
  
      if (!username || !password) {
        toast.error('Fill up all details');
        return;
      }

      try{
      const res = await axios.post('http://localhost:3001/api/user/login', data)
        toast.success('User Logged in successfully');
        localStorage.setItem('token', res.data.token);
          setTimeout(() => {
            navigate('/dashboard');
          }, 3000);
        }
        catch(error) {
          console.error(error);
          toast.error('Error:', error.response.data.message);
        };
  
  
      
    };
  

  return (
    <SignInContainer>
      <FormContainer>
        <Title>Sign In</Title>
        <Form onSubmit={handleSignIn}>
          <FormField>
            <Label>Username:</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label>Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormField>
          <Button type="submit">Sign In</Button>
        </Form>
        <SignUpLink>
          Don't have an account? <a href="/signup">Sign up here</a>
        </SignUpLink>
      </FormContainer>
      <ToastContainer/>
    </SignInContainer>
  );
}

export default SignIn;
