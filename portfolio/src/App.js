import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <>
    <head>
      <title>Amazingshellyyy</title>
    </head>
      {/* <NavBar/> */}
      <div style={{ minHeight: "30vh", backgroundColor: "#F0F4F8" }}>
        <Container >
          <Intro />
        </Container>
      </div>
        <Projects />
    </>
  );
}

export default App;
