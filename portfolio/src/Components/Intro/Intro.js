import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Intro = props => {
  return(
    <Row className="pt-5">
      <Col xs={1}></Col>
      <Col xs={10} className="text-center">
        <h2>Shelly Cheng</h2>
        <p>I am a Software Engineer</p>
        
      </Col>
      <Col xs={1}></Col>
    </Row>
  )
}


export default Intro;