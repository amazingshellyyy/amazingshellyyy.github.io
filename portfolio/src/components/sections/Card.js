import React from 'react';
import Image from '../elements/Image';
const Card = (props) => {
    return(
        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require(`./../../assets/images/${props.img}`)}
                        alt={props.title}
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                    {props.title}
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      {props.subtitle}
                    </div>
                    <p>{props.content}</p>
                  </div>
                </div>
              </div>
    )
}


export default Card;