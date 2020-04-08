import React from 'react';
import { useHistory } from "react-router-dom";

import './email-list-item.css';

const EmailListItem = ({ message }) => {  
  const history = useHistory();

  function handleClick() {
    history.push(`/inbox/${message.id}`);
  }

  return (
    <div className="email-list-item-container" onClick={handleClick}>
      <input className="email-list-item-select" type="checkbox" />
      <div className="email-list-item-group">
        <div className="email-list-item-sender">{message.sender}</div>
        <div className="email-list-item-subject">{message.subject}</div>
        <div className="email-list-item-preview">{message.preview}</div>
      </div>
      <div className="email-list-item-date">{message.date}</div>
    </div>
  )
};

export default EmailListItem;