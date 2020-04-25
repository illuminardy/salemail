import React, { useContext, useState } from 'react';

import { getMessages } from '../utils/email-manager';

const EmailContext = useContext();

export const EmailProvider = (props) => {
  const [messages, setMessages] = useState(getMessages());

  function removeEmails(ids) {
    
  }

  function removeEmails(ids) {
    let updatedMessages = messages.filter((message) => {
      return !ids.has(message.id);
    });

    setMessages(updatedMessages);
  };
  
  function getMessagesByTag(tag) {
    return messages.filter((message) => {
      return message.tags.find((val) => val === tag);
    });
  };

  // function getMessageIdsByTag( = () =>) {
  //   return messages.reduce((acc, curr) => {
  //     return acc.add(curr.id);
  //   }, new Set());
  // };
  
  function getMessageById(id) {
    return messages.find((message) => message.id === id);
  };

  return (
    <EmailContext.Provider 
        value={{ 
          messages, 
          getMessageById,
          getMessagesByTag,
          removeEmails 
        }}
      >
      {props.children}
    </EmailContext.Provider>
  )
};

export default EmailContext;