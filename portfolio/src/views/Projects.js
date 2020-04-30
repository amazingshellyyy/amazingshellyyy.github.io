import React from 'react';
// import section header

// import sections

import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';

// import some required elements

import PianoKey from '../components/piano/PianoKey';

class Projects extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {

    

    return (
      <React.Fragment>
        
        
        <FeaturesSplit invertMobile imageFill topDivider />

        
        <GenericSection>
        <h2 className="mt-0">Play with the piano I made with react!</h2>
        <PianoKey />
        </GenericSection>

               
      </React.Fragment>
    );
  }
}

// inline style
// const formStyle = {
//   maxWidth: '420px',
//   margin: '0 auto'
// }

// const modalFormStyle = {
//   maxWidth: '320px',
//   margin: '0 auto'
// }

export default Projects;