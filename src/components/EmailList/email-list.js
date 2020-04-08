import React from 'react';
import EmailListItem from '../EmailListItem';

import { messages } from '../../utils/email-manager';

const EmailList = () => {
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