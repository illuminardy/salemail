import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import Icon from '../Icon';

const iconNames = ["archive", "report", "delete", "markunread", "watch_later", "label"];

const EmailBodyActions = (props) => {
  const history = useHistory();
  
  function handleBackNavigation() {
    console.log("handleBackNavigation")
    history.goBack();
  };

  const selectedEmailIcons = iconNames.map((name, idx) => {
    return <Icon key={idx} name={name} />
  });

  return (
    <Fragment>
      <Icon clickHandler={handleBackNavigation} enabled key={"arrow_back"} name={"arrow_back"} />
      {selectedEmailIcons}
    </Fragment> 
  )
};

export default EmailBodyActions;