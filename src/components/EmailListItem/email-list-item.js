import React from 'react';
import Tag from '../Tag';

import { useHistory } from "react-router-dom";

import './email-list-item.css';

const EmailListItem = ({ message }) => {  
  const history = useHistory();

  function handleClick() {
    history.push(`/inbox/${message.id}`);
  }

  const tags = message.tags.map((tagStr, idx) => {
    return <Tag key={idx} tag={tagStr} />
  });

  return (
    <div className="email-list-item-container">
      <input className="email-list-item-select" type="checkbox" />
      <div className="email-list-item-content" onClick={handleClick}>
        <div className="email-list-item-group">
          <div className="email-list-item-group2">
            <div className="email-list-item-sender">{message.sender}</div>
            {tags && tags.length > 0 &&
              <div className="email-list-tags">
                {tags}
              </div>
            }
          </div>
          <div className="email-list-item-group3">
            <div className="email-list-item-subject">{message.subject}</div>
            <span className="email-list-item-dash">-</span>
            <div className="email-list-item-preview">{message.preview}</div>
          </div>
        </div>
        <div className="email-list-item-date">{message.date}</div>
      </div>
    </div>
  )
};

export default EmailListItem;