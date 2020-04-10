import React from 'react';
import Icon from '../Icon';

import './email-body-list-item.css';

const EmaiBodylListItem = ({ sender, body, date }) => {

  return (
    <div className="email-body-item">
      <div className="email-body-item-header">
        <div className="email-body-contact">
          <div className="email-body-avatar">
            <Icon name={"person"} />
          </div> 
          <div className="email-body-sender">
            {sender}
          </div>
        </div>
        <div className="email-body-date">
          {date}
        </div>
      </div>
      <div className="email-body-message" dangerouslySetInnerHTML={{__html: body}}></div>
    </div>
  )
};

export default EmaiBodylListItem;