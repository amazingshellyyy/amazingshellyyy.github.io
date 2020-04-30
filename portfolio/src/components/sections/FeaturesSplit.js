import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
const propTypes = {
	...SectionSplitProps.types
}

const defaultProps = {
	...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

	render() {

		const {
			className,
			topOuterDivider,
			bottomOuterDivider,
			topDivider,
			bottomDivider,
			hasBgColor,
			invertColor,
			invertMobile,
			invertDesktop,
			alignTop,
			imageFill,
			...props
		} = this.props;

		const outerClasses = classNames(
			'features-split section',
			topOuterDivider && 'has-top-divider',
			bottomOuterDivider && 'has-bottom-divider',
			hasBgColor && 'has-bg-color',
			invertColor && 'invert-color',
			className
		);

		const innerClasses = classNames(
			'features-split-inner section-inner',
			topDivider && 'has-top-divider',
			bottomDivider && 'has-bottom-divider'
		);

		const splitClasses = classNames(
			'split-wrap',
			invertMobile && 'invert-mobile',
			invertDesktop && 'invert-desktop',
			alignTop && 'align-top'
		);

		const sectionHeader = {
			title: 'Some Projects I am Proud of',
			paragraph: 'Some of them are created to solve specific problem and some of them I just created for fun! Enjoy! '
		};

		return (
			<section
				{...props}
				className={outerClasses}
			>
				<div className="container">
					<div className={innerClasses}>
						<SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
						<div className={splitClasses}>

							<div className="split-item">
								<div className="split-item-content center-content-mobile">
									<h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
										Covid19 Open API
									</h3>
									<div className="text-color-low reveal-from-bottom"> - Javascript, Github Action, cheerio</div>
									<p className="m-1 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
									An open source API for Covid19 county case data. Currently has more than <b>1000 clones</b> on GitHub. I built it from crawling website data with <b>cheerio</b> and maintain the cron job by using <b>GitHub action</b>. 
									</p>
									<ButtonGroup className="reveal-from-bottom">
										<Button  color="secondary" wideMobile onClick={()=> window.open('https://github.com/amazingshellyyy/covid19-api')}>Check it out</Button>
										<Button  onClick={()=> window.open('https://github.com/amazingshellyyy/covid19-api')} wideMobile><i className="fab fa-github" style={{lineHeight:'21px',paddingRight:'2px'}}></i>Github</Button>
									</ButtonGroup>
								</div>
								<div className={
									classNames(
										'split-item-image center-content-mobile reveal-scale-up',
										imageFill && 'split-item-image-fill'
									)}
									data-reveal-container=".split-item"
									data-reveal-delay="200">
									<Image
										className="has-shadow"
										src="https://i.imgur.com/EbOxpVs.png"
										alt="Features split 01"
										width={528}
										height={396} />
								</div>
							</div>

							<div className="split-item">
								<div className="split-item-content center-content-mobile">
									<h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
										Mapitout | MERN stack
									</h3>
									<div className="text-color-low reveal-from-bottom"> - React/Redux, SCSS, Nodejs, MongoDB, Expressjs</div>
									<p className="m-1 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
									A platform aim to <b>help local businesses</b> as well as provide virus-related information. Project is launched on April 12th and reached <b>1000 visitors</b> in 2 days. 
									</p>
									<ButtonGroup className="reveal-from-bottom">
										<Button color="secondary" wideMobile onClick={()=> window.open('https://mapitout.github.io/')}>Check it out</Button>
										<Button onClick={()=> window.open('https://github.com/mapitout/mapitout')} wideMobile><i className="fab fa-github" style={{lineHeight:'21px',paddingRight:'2px'}}></i>Github</Button>
									</ButtonGroup>
								</div>
								<div className={
									classNames(
										'split-item-image center-content-mobile reveal-scale-up',
										imageFill && 'split-item-image-fill'
									)}
									data-reveal-container=".split-item"
									data-reveal-delay="200">
									<Image
										className="has-shadow"
										src="https://i.imgur.com/ITkD1yr.png"
										alt="Features split 02"
										width={528}
										height={396} />
								</div>
							</div>

							<div className="split-item">
								<div className="split-item-content center-content-mobile">
									<h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
										Startkicker | MERN stack
									</h3>
									<div className="text-color-low reveal-from-bottom"> - React, MongoDB, Nodejs, Expressjs</div>
									<p className="m-1 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
									A platform where user can browse different projects that others build and back the project. Users can also start a project and seek supports.
									</p>
									<ButtonGroup className="reveal-from-bottom">
										<Button color="secondary" wideMobile onClick={()=> window.open('https://amazingshellyyy.com/startkicker/#/')}>Check it out</Button>
										<Button onClick={()=> window.open('https://github.com/amazingshellyyy/startkicker')} wideMobile><i className="fab fa-github" style={{lineHeight:'21px',paddingRight:'2px'}}></i>Github</Button>
									</ButtonGroup>
								</div>
								<div className={
									classNames(
										'split-item-image center-content-mobile reveal-scale-up',
										imageFill && 'split-item-image-fill'
									)}
									data-reveal-container=".split-item"
									data-reveal-delay="200">
									<Image
										className="has-shadow"
										src="https://i.imgur.com/iJrRbpX.png"
										alt="Features split 03"
										width={528}
										height={396} />
								</div>
							</div>
							<div className="split-item">
								<div className="split-item-content center-content-mobile">
									<h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
										GeoTask 
									</h3>
									<div className="text-color-low reveal-from-bottom"> - HTML/CSS,  Ajax, JQuery, MongoDB, Nodejs, Expressjs, Google places API, Google OAuth</div>
									<p className="m-1 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
									A todo app with geolocation for assigning locations to todo lists.
									</p>
									<ButtonGroup className="reveal-from-bottom">
										<Button color="secondary" wideMobile onClick={()=> window.open('https://geotask.herokuapp.com/')}>Check it out</Button>
										<Button onClick={()=> window.open('https://github.com/amazingshellyyy/GeoTask')} wideMobile><i className="fab fa-github" style={{lineHeight:'21px',paddingRight:'2px'}}></i>Github</Button>
									</ButtonGroup>
								</div>
								<div className={
									classNames(
										'split-item-image center-content-mobile reveal-scale-up',
										imageFill && 'split-item-image-fill'
									)}
									data-reveal-container=".split-item"
									data-reveal-delay="200">
									<Image
										className="has-shadow"
										src="https://i.imgur.com/BH6wmCE.png"
										alt="Features split 03"
										width={528}
										height={396} />
								</div>
							</div>
							<div className="split-item">
								<div className="split-item-content center-content-mobile">
									<h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
										Rummikub
									</h3>
									<div className="text-color-low reveal-from-bottom"> - HTML, CSS, JS, JQuery, Jquery UI</div>
									<p className="m-1 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
										My favorite board game built with vanilla javascript and jquery drag and drop UI.
									</p>
									<ButtonGroup className="reveal-from-bottom">
										<Button color="secondary" wideMobile onClick={()=> window.open('https://amazingshellyyy.com/Rummikub/')}>Check it out</Button>
										<Button onClick={()=> window.open('https://github.com/amazingshellyyy/Rummikub')} wideMobile><i className="fab fa-github" style={{lineHeight:'21px',paddingRight:'2px'}}></i>Github</Button>
									</ButtonGroup>
								</div>
								<div className={
									classNames(
										'split-item-image center-content-mobile reveal-scale-up',
										imageFill && 'split-item-image-fill'
									)}
									data-reveal-container=".split-item"
									data-reveal-delay="200">
									<Image
										className="has-shadow"
										src="https://i.imgur.com/Uj2mJGH.png"
										alt="Features split 03"
										width={528}
										height={396} />
								</div>
							</div>
							

						</div>
					</div>
				</div>
			</section>
		);
	}
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;