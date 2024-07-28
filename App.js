import React, {useState, useMemo, useEffect} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import About from './Components/About';

const App=()=> {
  const [active, setActive] = useState(1);
  const [userName, setUserName] = useState('');

useEffect(()=>{
  const name = localStorage.getItem('userName');
  if(name){
    setUserName(name);
  }
}, []);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <Router>
        <AppStyled bg={bg} className="App">
          {orbMemo}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="/dashboard" element={
              <MainLayout>
                <Navigation active={active} setActive={setActive} userName={userName}/>
                <main>
                  {displayData()}
                </main>
              </MainLayout>
            } />
          </Routes>
        </AppStyled>
      </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
