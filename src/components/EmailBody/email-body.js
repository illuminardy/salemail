import React, { Fragment } from 'react';
import EmailBodyList from '../EmailBodyList';
import EmailBodyListItem from '../EmailBodyListItem';
import Tag from '../Tag';

import './email-body.scss';

const EmailBody = ({ message }) => {
  const tags = message.tags.map((tag, idx) => {
    return <Tag key={idx} tag={tag} />
  });

  const email = (
    <EmailBodyListItem 
      key={"original"}
      sender={message.sender} 
      date={message.date} 
      body={message.body}
    />
  )

  const emails = message.chain && message.chain.map((m, idx) => {
    return (
      <EmailBodyListItem 
        key={idx} 
        sender={m.sender} 
        date={m.date} 
        body={m.body}
      />
    )
  });

  console.log(message.chain)

  return (
    <div className="email-body-container">
      <div className="email-body-header">
        <div className="email-body-subject">{message.subject}</div>
        <Fragment>{tags}</Fragment>
      </div>
      <EmailBodyList>
        {email}
        {emails}
      </EmailBodyList>
    </div>
  )
};

export default EmailBody;