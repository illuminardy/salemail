import React from 'react';
import classNames from 'classnames';

import './icon.scss';

const Icon = ({ clickHandler, enabled, name }) => {
  const iconClass = classNames({
    'material-icons': true,
    'icon--enabled': enabled,
    'icon--disabled': !enabled
  });

  return (
    <i 
      onClick={clickHandler ? clickHandler : null} 
      className={iconClass}>
        {name}
    </i>
  )
};

export default Icon;