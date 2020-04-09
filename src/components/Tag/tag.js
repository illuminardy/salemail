import React from 'react';

import './tag.css';

const Tag = ({ tag }) => {
  return (
    <div className="tag">
      {tag}
    </div>
  );
};

export default Tag;