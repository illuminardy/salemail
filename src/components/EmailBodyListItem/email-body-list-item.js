import React from 'react';
import Icon from '../Icon';

import './email-body-list-item.scss';

const EmaiBodylListItem = ({ sender, body, date }) => {

  return (
    <div className="email-body-list-item">
      <div className="email-body-list-item-header">
        <div className="email-body-list-item-contact">
          <div className="email-body-list-item-avatar">
            <Icon name={"person"} />
          </div> 
          <div className="email-body-list-item-sender">
            {sender}
          </div>
        </div>
        <div className="email-body-list-item-date">
          {date}
        </div>
      </div>
      <div className="email-body-list-item-message" dangerouslySetInnerHTML={{__html: body}}></div>
    </div>
  )
};

export default EmaiBodylListItem;