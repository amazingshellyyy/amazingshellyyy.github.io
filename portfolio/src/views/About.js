import React from 'react';
// import section header
import { Link } from 'react-router-dom';
// import sections

import Team from '../components/sections/Team';

import GenericSection from '../components/sections/GenericSection';

// import some required elements
import Image from '../components/elements/Image';
import Button from '../components/elements/Button';

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
            <GenericSection topDivider>
            <div className="container-sm">
            <h2 className="mt-0 mb-0">{"Just a little bit more about me..."}</h2>


            <p style={{ paddingTop: "20px" }}>
                I learned my first programming language -- Java in 2014. During my bachelor in Taiwan, I was very much into UI/UX and frontend Designing. Therefore, I took several online courses to lay my fundamental in website design and HTML/CSS.
</p>
            <p>
                After I obtained my master in University of Illinois at Urbana-Champaign, I worked as a project manager at <a href="#0">InstaHub</a> which is a IoT start up at Philly. At InstaHub, I led the engineer team and UI/UX team on developing company website, data dashboard and Andriod/IOS Apps. I love to see the big picture and break it down into executable pieces. I enjoy working with cross-functional team and by leveraging my knowledge in business and technology, I ensure the direction and the quality of project handsoffs.
</p>
            <p>
                However, I found myself still lack of enough experience in the engineering side to fully lead the team. Also, when building a start up, I realized that, to me, the ability to build real product that people use is far more important than drawing a dreamy picture in business pitches. At the end of 2019, I decided to fully devote myself to an intense journey of becoming a Software Engineer.
</p>
            <figure>
                <Image
                    className="image-larger"
                    src={require('../assets/images/about_me.jpg')}
                    alt="Placeholder"
                    width={500}
                    height={407} />
                <figcaption className="text-color-low">Angels Landing at Zion National Park. One of the great hikes I had back in 2019. Yes, I LOVE hiking.<span role="img" aria-label="mile">😀</span></figcaption>
            </figure>
            <h4>If you know me, you will know that...</h4>
            <ul>
                <li>I have joined two half marathons!<span className="text-color-low"> - Yes, I am also a jogger.<span role="img" aria-label="mile">🏃🏃</span></span></li>
                <li>My favorite board game is Rummikub, a tile-based game.<span className="text-color-low"> - Yes, I love it so much that I even build an online one with plain javascript and jquery.<span role="img" aria-label="mile">🎲</span></span> </li>
                <li>I am a very good ping-pong player. <span className="text-color-low"> - and Yes, I was the captain of our ping-pong team back in college. We won two trophies in year.<span role="img" aria-label="mile">🏓</span></span></li>
            </ul>
            <p>
                Just to name a little about me. I know we will have more time to chat soon in the future! You can actually schedule <a href="https://calendly.com/amazingshellyyy/30min">Here</a>!
            </p>
            <Link to='/projects' style={{ textDecoration: 'none' }}><Button color="primary" size='sm'>see my project</Button></Link>
        </div>
        </GenericSection>
   
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