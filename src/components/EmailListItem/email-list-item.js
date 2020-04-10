import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import SelectedContext from '../../SelectedContext';
import Tag from '../Tag';

import './email-list-item.css';

const EmailListItem = ({  location, message }) => {
  const selected = useContext(SelectedContext)
  const history = useHistory();

  function handleEmailSelected() {
    selected.toggleSelected(message.id);
  }

  function handleEmailClick() {
    history.push(`${history.location.pathname}/${message.id}`);
  }

  const tags = message.tags.map((tagStr, idx) => {
    return <Tag key={idx} tag={tagStr} />
  });

  return (
    <div className="email-list-item-container">
      <i onClick={handleEmailSelected} className="material-icons email-list-item-select">
        {selected.ids.has(message.id) ? 'check_box' : 'check_box_outline_blank'}
      </i>
      <div onClick={handleEmailClick} className="email-list-item-content">
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