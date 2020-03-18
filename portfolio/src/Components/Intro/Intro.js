import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {IoLogoGithub,IoLogoLinkedin,IoMdCalendar,IoIosDocument} from 'react-icons/io'

const Intro = props => {
  return(
    <Row className="pt-5">
      <Col xs={1}></Col>
      <Col xs={10} className="text-center">
        <h2>Shelly Cheng</h2>
        <p>I am a Software Engineer</p>
        <IconContext.Provider value={{size: "2em"}}>
          <a href="https://github.com/amazingshellyyy"><IoLogoGithub/></a>
          <a href="https://www.linkedin.com/in/amazingshellyyy/"><IoLogoLinkedin/></a>
          <a href="https://calendly.com/amazingshellyyy/30min"><IoMdCalendar/></a>
          <a href="https://amazingshellyyy.com/resume/Shelly_Cheng_Resume2020FD.pdf"><IoIosDocument/></a>
        </IconContext.Provider>
      </Col>
      <Col xs={1}></Col>
    </Row>
  )
}


export default Intro;