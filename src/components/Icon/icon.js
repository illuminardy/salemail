import React from 'react';

const Icon = ({ clickHandler, name }) => {
  return(
    <i 
      style={{cursor: "pointer"}} 
      onClick={clickHandler ? clickHandler : null} 
      className="material-icons">
        {name}
    </i>
  )
};

export default Icon;