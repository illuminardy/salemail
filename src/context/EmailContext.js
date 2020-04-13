import React, { createContext, useEffect, useState } from 'react';
import { getMessageTags, sanitizeInput, sortMessagesByDate } from '../utils/email-manager';

const EmailContext = createContext();

export const EmailProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      fetch('http://localhost:3001/')
        .then((res) => res.json())
        .then((res) => {
          const messages = 
            sortMessagesByDate(res.messages)
            .map(sanitizeInput);
          setMessages(messages);
          setTags(getMessageTags(messages));
          setLoading(false);
        })
    };

    fetchMessages();
  }, []);

  return (
    <EmailContext.Provider value={{ isLoading, messages, tags }}>
      {props.children}
    </EmailContext.Provider>
  )
};

export default EmailContext;
