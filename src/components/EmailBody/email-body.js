import React from 'react';

const EmailBody = ({ message }) => {
  return (
    <div>
      <div>
        <div>{message.subject}</div>
        <div>{message.tags}</div>
      </div>
      <div>
        <div>
          <div>{message.sender}</div>
          <div>{message.date}</div>
        </div>
        <div dangerouslySetInnerHTML={{__html: message.body}}></div>
      </div>
    </div>
  )
};

export default EmailBody;