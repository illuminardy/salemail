import emails from "./emails.json"; 
import dompurify from 'dompurify';

const sortMessagesByDate = (messages) => {
  return messages.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })
}

// Source: https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
const stripHTML = (html) => html.replace(/<[^>]*>?/gm, ''); 

export const messages = sortMessagesByDate(emails.messages)
      .map((message) => {
        const sanitizedBody = dompurify.sanitize(message.body);

        return {
          ...message,
          body: sanitizedBody,
          date: new Date(message.date).toLocaleDateString(),
          preview: `${stripHTML(sanitizedBody)}`
        }
      });

export const tags = [...messages.reduce((acc, curr) => {
  curr.tags.forEach((tag) => {
    if (!acc.has(tag)) acc.add(tag);
  });

  return acc;
}, new Set(["inbox"]))];

export const getMessageById = (id) => {
  return messages.find((message) => message.id === id);
};