import React from 'react';
// import section header

// import sections

import Team from '../components/sections/Team';

import GenericSection from '../components/sections/GenericSection';


// import some required elements

class About extends React.Component {

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

                <Team />

                <GenericSection topDivider>
                    <div className="container-xs">
                        <h2 className="mt-0">My Dream List</h2>
                        <p>
                            I believe that listing out some places I want to visit and some thing that I want to do help keep me motivated.
            </p>
                        <h4>Place To Go</h4>
                        <ol>
                            <li>I heard that <b>London</b> is a right city to go as a Harry Potter Fan.</li>
                            <li>I also want to visit the Opera House at <b>Sydney</b>.</li>
                        </ol>
                        <h4>Thing To Do</h4>
                        <ol>
                            <li>{"I haven't been able to"} learn <b>Skiing</b> well.</li>
                            <li>Learn how to surf!</li>
                        </ol>

                    </div>
                </GenericSection>


            </React.Fragment>
        );
    }
}

// inline style
// const formStyle = {
//     maxWidth: '420px',
//     margin: '0 auto'
// }

// const modalFormStyle = {
//     maxWidth: '320px',
//     margin: '0 auto'
// }

export default About;