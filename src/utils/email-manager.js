import dompurify from 'dompurify';

export const sortMessagesByDate = (messages) => {
  return messages.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })
};

export const sanitizeInput = (message) => {
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

export const getMessageTags = (messages) => {
  return [...messages.reduce((acc, curr) => {
  curr.tags.forEach((tag) => {
    if (!acc.has(tag)) acc.add(tag);
  });

  return acc;
  }, new Set())];
}

export const getMessagesByTag = (messages, tag) => {
  if (!tag) return messages;

  return messages.filter((message) => {
    return message.tags.find((val) => val === tag);
  });
};

export const getMessageIdsByTag = (messages) => {
  return messages.reduce((acc, curr) => {
    return acc.add(curr.id);
  }, new Set());
};

export const getMessageById = (messages, id) => {
  return messages.find((message) => message.id === id);
};