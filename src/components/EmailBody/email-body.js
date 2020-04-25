import React, { useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';

// Components
import EmailBodyList from '../EmailBodyList';
import EmailBodyListItem from '../EmailBodyListItem';
import Tag from '../Tag';

import EmailContext from '../../providers/EmailContext';

import './email-body.scss';

const EmailBody = () => {
  const emailCtx = useContext(EmailContext);
  const params = useParams();

  const message = emailCtx.getMessageById(params.id);
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