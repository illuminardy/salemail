import React from 'react';
import EmailListItem from '../EmailListItem';

import './email-list.css';

const EmailList = ({ messages }) => {
  const emails = messages.map((message) => {
    return <EmailListItem message={message} />
  });

  return (
    <div className="email-list">
      {emails}
    </div>
  )
};

export default EmailList;