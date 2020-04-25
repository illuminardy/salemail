import React, { useContext, useState } from 'react';

import { getMessages } from '../utils/email-manager';

const EmailContext = useContext();

export const EmailProvider = (props) => {
  const [messages, setMessages] = useState(getMessages());

  function removeEmails(ids) {
    
  }

  return (
    <EmailContext.Provider value={{ messages, setMessages }}>
      {props.children}
    </EmailContext.Provider>
  )
};

export default EmailContext;