import React, { useContext, Fragment } from 'react';
import EmailBodyList from '../EmailBodyList';
import EmailBodyListItem from '../EmailBodyListItem';
import EmailContext from '../../context/EmailContext';
import Tag from '../Tag';

import { getMessageById } from '../../utils/email-manager';

import './email-body.scss';

const EmailBody = (props) => {
  const email = useContext(EmailContext);

  if (email.isLoading) {
    return <h2>Email Loading</h2>
  }

  const message = getMessageById(email.messages, props.match.params.id)
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