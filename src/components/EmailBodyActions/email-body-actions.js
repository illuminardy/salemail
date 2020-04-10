import React, { Fragment } from 'react';
import Icon from '../Icon';

const iconNames = ["archive", "report", "delete", "markunread", "watch_later", "label"];

const EmailBodyActions = (props) => {
  function handleBackNavigation() {
    // selected.selectAll(getMessageIdsByTag());
  };

  const selectedEmailIcons = iconNames.map((name, idx) => {
    return <Icon key={idx} name={name} />
  });

  return (
    <Fragment>
      <Icon key={"arrow_back"} name={"arrow_back"} />
      {selectedEmailIcons}
    </Fragment> 
  )
};

export default EmailBodyActions;