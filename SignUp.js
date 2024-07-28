import React, { useState } from 'react';
import styled from 'styled-components';
import adds from '../assets/adds.jpg'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


// //import { useHistory } from 'react-router-dom';

// //import backgroundImage from './background.jpg';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${adds});
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
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  border-radius: 81px
  padding: 20px
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2px;
  text-align: center

`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  gap: 4px;
  display: flex
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  
  
  
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const SignInLink = styled.p`
  margin-top: 20px;
  text-align: center;

  a {
    color: #007bff;
  }
`;


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!username ||  !email || !password) {
        toast.error('Fill up all details');
        return;
      }
  
      const data = {
        
        username: username,
        email: email,
        password: password,
      };
  
      setLoading(true);
  
      axios.post('http://localhost:3001/api/user/register', data)
      
        .then(() => {
          setLoading(false);
          
          toast.success('User signed up successfully');
          setTimeout(() => {
            navigate('/signin');
          }, 3000);
        })
        .catch((error) => {
          setLoading(false)
          console.error(error)
          toast.error('Error:', error)
        });
    };

  return (
    <SignUpContainer>
      <FormContainer>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
        {/* <FormField>
            <Label>Firstname:</Label>
            <Input
              type="Firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormField> */}
          <FormField>
            <Label>username:</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormField>

          <FormField>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          
          <Button type="submit">Sign Up</Button>
        </Form>
        <SignInLink>
          Already have an account? <a href="/signin">Sign in here</a>
        </SignInLink>
      </FormContainer>
      <ToastContainer/>
    </SignUpContainer>
  );
}

export default SignUp;
