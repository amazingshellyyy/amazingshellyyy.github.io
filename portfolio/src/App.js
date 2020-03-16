import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <>
    <NavBar/>
    <div style={{minHeight:"60vh", backgroundColor: "#F0F4F8"}}>
   <Container >
    <Intro/>
   </Container>
   </div>
   <Container className="mt-5">
    <Projects/>
   </Container>
   </>
  );
}

export default App;
