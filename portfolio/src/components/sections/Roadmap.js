import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

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

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'How I am who I am',
      paragraph: 'Our past build up who we are now and I strongly believe it also lead to who we will become in the future.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="March 1995">
                Born in Taipei, Taiwan
              </TimelineItem>
              <TimelineItem title="December 2004">
                Passed YAMAHA piano 8th grade 
              </TimelineItem>
              <TimelineItem title="January 2008">
                10 years anniversery on learning Piano!
              </TimelineItem>
              <TimelineItem title="October 2011">
                Won 3rd place in National High School Dance Competition(HDC) with my team
              </TimelineItem>
              <TimelineItem title="September 2014">
                Started my College life at National Chengchi University major in Information Systems
              </TimelineItem>
              <TimelineItem title="September 2015">
                Served as captain of the table tennis team for my department
              </TimelineItem>
              <TimelineItem title="July 2016">
                Traveled around California for three months by myself and meet so many friends here
              </TimelineItem>
              <TimelineItem title="June 2017">
                Worked as Product Marketing intern at FLH, an IoT smart home start up 
              </TimelineItem>
              <TimelineItem title="December 2017 | Seattle">
                Exchanged at University of Washington at Seattle, Foster school of business
              </TimelineItem>
              <TimelineItem title="August 2018 | Illinois">
                Obtained my master in Technology Management at University of Illinois at Urbana-Champaign 
              </TimelineItem>
              <TimelineItem title="December 2018 | Europe">
                Backpacked around Europe for a month! 
              </TimelineItem>
              <TimelineItem title="May 2019 | Philly">
                Join InstaHub, an IoT start up, as Project Manager on leading technical projects
              </TimelineItem>
              <TimelineItem title="September 2019 | San Francisco">
                Relocated to San Francisco to pursue my dream to work as Engineer
              </TimelineItem>
              <TimelineItem title="December 2019">
                Joined General Assembly Software Engineer Immersive program
            </TimelineItem>
              <TimelineItem title="March 2019">
                Founded Mapitout, a platform for local businesses, with my husband
              </TimelineItem>
              <TimelineItem title="NOW" style={{color:'#3D5AFE'}}>
                Exploring new pportunities in Software Engineering 
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;