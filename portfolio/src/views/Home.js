import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Roadmap from '../components/sections/Roadmap';
import GenericSection from '../components/sections/GenericSection';
import FeaturesSplit from '../components/sections/FeaturesSplit-part';


import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';


class Home extends React.Component {



    render() {
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            ...props
        } = this.props;

        const innerClasses = classNames(
            'hero-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );
        return (
            <React.Fragment>

                <GenericSection topDivider>
                    <h2 className="mt-0 mb-0">{"Hi  I'm Shelly. I'm a Software Engineer."}</h2>
                    <p style={{ paddingTop: "20px" }}>
                        I am a Software Engineer. I am passionate about build software and apps that people will use. I am always excited about new technology. I am proficient in both <b>frontend frameworks</b> and <b>backend infrastructure</b>  with languages such as <b>React/Redux, JavaScript,</b> and <b>HTML with CSS/SASS</b> for frontend and server-side tools such as <b>Expressjs</b> and <b>MongoDB</b>. With a background as Project Manager, I have direct experience working with and leading cross-functional teams on developing a client-facing product.
            </p>
                    <FeaturesSplit invertMobile imageFill topDivider />


                    <div className="center-content">
                        <ButtonGroup>
                            <Link to='/projects' style={{ textDecoration: 'none' }}>
                                <Button color="primary" wideMobile>See more</Button></Link>
                            <Button onClick={() => window.open('https://github.com/amazingshellyyy')}  wideMobile><i className="fab fa-github" style={{ lineHeight: '21px', paddingRight: '2px' }}></i>Github</Button>
                        </ButtonGroup>
                    </div>
                    </GenericSection>
                <Roadmap topDivider />

            </React.Fragment>
        );
    }
}

export default Home;