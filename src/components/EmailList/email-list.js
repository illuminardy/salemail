import React, { useContext } from 'react';
import EmailListItem from '../EmailListItem';

import './email-list.scss';
import EmailContext from '../../providers/EmailContext';

const EmailList = () => {
  const emailCtx = useContext(EmailContext);
  const emails = emailCtx.messages.map((message) => {
    return <EmailListItem message={message} />
  });

  return (
    <div className="email-list">
      {emails}
    </div>
  )
};

export default EmailList;