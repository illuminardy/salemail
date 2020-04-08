import React from 'react';

const EmailPanel = (props) => {
  return(
    <div>
      <h1>Hello from Email Panel</h1>
      {props.children}
    </div>
  )
};

export default EmailPanel;