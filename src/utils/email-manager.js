import emails from "./emails.json"; 
import dompurify from 'dompurify';

const sortMessagesByDate = (messages) => {
  return messages.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })
};

const sanitizeInput = (message) => {
  const sanitizedBody = dompurify.sanitize(message.body);

  return {
    ...message,
    body: sanitizedBody,
    date: new Date(message.date).toLocaleDateString(),
    preview: `${stripHTML(sanitizedBody)}`
  }
};

// Source: https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
const stripHTML = (html) => html.replace(/<[^>]*>?/gm, ''); 

let messages = 
    sortMessagesByDate(emails.messages)
    .map(sanitizeInput);

export const tags = [...messages.reduce((acc, curr) => {
  curr.tags.forEach((tag) => {
    if (!acc.has(tag)) acc.add(tag);
  });

  return acc;
}, new Set())];

export const removeEmails = (ids) => {
  messages = messages.filter((message) => {
    return !ids.has(message.id);
  });
};

export const getMessagesByTag = (tag) => {
  return messages.filter((message) => {
    return message.tags.find((val) => val === tag);
  });
};

export const getMessageIdsByTag = () => {
  return messages.reduce((acc, curr) => {
    return acc.add(curr.id);
  }, new Set());
};

export const getMessageById = (id) => {
  return messages.find((message) => message.id === id);
};

export const getMessages = () => {
  return messages;
};