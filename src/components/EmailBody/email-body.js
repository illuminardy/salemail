import React, { Fragment } from 'react';
import EmailBodyList from '../EmailBodyList';
import EmailBodyListItem from '../EmailBodyListItem';
import Tag from '../Tag';

import './email-body.css';

const EmailBody = ({ message }) => {
  const tags = message.tags.map((tag, idx) => {
    return <Tag key={idx} tag={tag} />
  });

  return (
    <div className="email-body-container">
      <div className="email-body-header">
        <div className="email-body-subject">{message.subject}</div>
        <Fragment>{tags}</Fragment>
      </div>
      <EmailBodyList>
        <EmailBodyListItem 
          sender={message.sender} 
          date={message.date} 
          body={message.body}
        />
      </EmailBodyList>
    </div>
  )
};

export default EmailBody;