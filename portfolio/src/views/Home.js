import React from 'react';
import { Link } from 'react-router-dom';

import Roadmap from '../components/sections/Roadmap';
import GenericSection from '../components/sections/GenericSection';

import Image from '../components/elements/Image';
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';

class Home extends React.Component {

	

	render() {
		return (
			<React.Fragment>

				<GenericSection topDivider>
					<div className="container-sm">
						<h2 className="mt-0 mb-0">{"Hi, I'm Shelly. I'm a Software Engineer."}</h2>
						<ButtonGroup className="mt-0 mb-1">
						<Link to='/secondary' style={{textDecoration: 'none'}}><Button color="primary" size='sm'>See my Projects</Button></Link>
							<Button size='sm' onClick={()=> window.open('https://github.com/amazingshellyyy')}><i className="fab fa-github" style={{lineHeight:'21px',paddingRight:'2px'}}></i>Github</Button>
						</ButtonGroup>
						<p style={{paddingTop:"20px"}}>
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
						<Link to='/about' style={{textDecoration: 'none'}}><Button color="primary" size='sm'>Learn more</Button></Link>
					</div>
				</GenericSection>
				<Roadmap topDivider />
				  
			</React.Fragment>
		);
	}
}

export default Home;