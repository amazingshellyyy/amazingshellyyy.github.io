import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Card from './Card';
const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const meals = [
    {
        img: 'meal1.jpg',
        alt: 'Alfredo Spaghetti',
        title: 'Alfredo Spaghetti with Lobster tail and Scallops',
        subtitle: 'Dinner'
    },
    {
        img: 'meal2.jpg',
        alt: 'Japanese Cotton Cheese Cake',
        title: 'Japanese Cotton Cheese Cake',
        subtitle: 'Dessert'
    },
    {
        img: 'meal3.jpg',
        alt: 'Zucchini with Ribeye sided with Microgreens and Corns',
        title: 'Zucchini with Ribeye sided with Microgreens and Corns',
        subtitle: 'Dinner'
    },
    {
        img: 'meal4.jpg',
        alt: 'Garlic Butter Chicken with Baked Parmesan Potato',
        title: 'Garlic Butter Chicken with Baked Parmesan Potato',
        subtitle: 'Dinner'
    },
    {
        img: 'meal5.jpg',
        alt: 'Homemade Boba Milk Tea',
        title: 'Homemade Boba Milk Tea',
        subtitle: 'Dessert'
    },
    {
        img: 'meal6.jpg',
        alt: 'Chocolate Chiffon Cake',
        title: 'Chocolate Chiffon Cake',
        subtitle: 'Dessert'
    }
]

const travel = [
    {
        img: 'paris.jpg',
        title: 'Paris',
        subtitle: 'December 2018'
    },
    {
        img: 'natherland.jpg',
        title: 'Netherland',
        subtitle: 'January 2019'
    },
    {
        img: 'seattle.jpg',
        title: 'Seattle',
        subtitle: 'March 2018'
    },
    {
        img: 'copenhagen.jpg',
        title: 'Copenhagen',
        subtitle: 'December 2018'
    },
    {
        img: 'kyoto.jpg',
        title: 'Kyoto',
        subtitle: 'April 2018'
    },
    {
        img: 'vancouver.jpg',
        title: 'Vancouver',
        subtitle: 'February 2018'
    },
    {
        img: 'newyork.jpg',
        title: 'New York',
        subtitle: 'July 2019'
    },
    {
        img: 'chicago.jpg',
        title: 'Chicago',
        subtitle: 'January 2019'
    },
    {
        img: 'vegas.jpg',
        title: 'Las Vegas',
        subtitle: 'May 2018'
    }
]

const sports = [
    {
        img: 'skydiving.jpg',
        title: 'San Diego',
        subtitle: 'skydiving',
    },
    {
        img: 'kayaking.jpg',
        title: 'Chicago',
        subtitle: 'kayaking'
    },
    {
        img: 'yosemite.jpg',
        title: 'Yosemite',
        subtitle: 'hiking'
    },
    {
        img: 'grandcanyon.jpg',
        title: 'Grand Canyon',
        subtitle: 'hiking'
    },
    {
        img: 'zionnationalpark.jpg',
        title: 'Zion',
        subtitle: 'hiking'
    },
    {
        img: 'grandteton.jpg',
        title: 'Grand Teton',
        subtitle: 'hiking'
    },
    {
        img: 'marathon.jpg',
        title: 'Nike Half Marathon 2017',
        subtitle: 'hiking'
    }

]

class Team extends React.Component {

    renderCards(data) {
        return data.map(item => {
            return <Card key={item.title} img={item.img} title={item.title} subtitle={item.subtitle} content={item.content} />
        })
    }

    render() {

        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            pushLeft,

            ...props
        } = this.props;


        const outerClasses = classNames(
            'team section center-content',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'team-inner section-inner pt-0',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const tilesClasses = classNames(
            'tiles-wrap',
            pushLeft && 'push-left'
        );

        const sectionHeader = {
            title: 'Get to know me',
            paragraph: 'I am an adventurer, a fast-learning, an explorer, a designer, and also a programmer! '
        };

        return (

            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
                        <div className="container-sm">
                            <h3 className="reveal-from-bottom">From Kitchen to Table</h3>
                            <p className="reveal-from-bottom">
                                I enjoy cooking and baking a lot. I believea good meal can change our day.I also enjoy working through recipes and optimize it to a better one and share with my friends and family.
                            </p>
                        </div>
                        <div className={tilesClasses}>
                            {this.renderCards(meals)}
                        </div>
                        <div className="container-sm">
                            <h3 className="reveal-from-bottom">From River to Mountain</h3>
                            <p className="reveal-from-bottom">
                                I love mountains and I love rivers. I love nature as a whole. Every once a while, I will pull myself out of the urban life and try to just relax by surrounding myself with greens and birds.
                            </p>
                        </div>
                        <div className={tilesClasses}>
                            {this.renderCards(sports)}
                        </div>
                        <div className="container-sm">
                            <h3 className="reveal-from-bottom">From Taiwan to Global</h3>
                            <p className="reveal-from-bottom">
                            Travel connects me with the world. I met so many friends and some even become my life time friends who I still keep contact with. 
                        </p>
                        </div>
                        <div className={tilesClasses}>
                            {this.renderCards(travel)}
                        </div>
                    </div>
                </div>



            </section>
        );
    }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;