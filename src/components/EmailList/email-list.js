import React, { useContext } from 'react';
import EmailListItem from '../EmailListItem';
import EmailContext from './../../context/EmailContext';
import { getMessagesByTag } from '../../utils/email-manager';

import './email-list.scss';

const EmailList = (props) => {
  const email = useContext(EmailContext);

  if (email.isLoading) {
    return "Emails Loading";
  }

  const messages = getMessagesByTag(email.messages, props.match.params.name)
  const emails = messages.map((message) => {
    return <EmailListItem message={message} />
  });


  return (
    <div className="email-list">
      {email.isLoading ? "Emails Loading" : emails}
    </div>
  )
};

export default EmailList;