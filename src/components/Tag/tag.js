import React from 'react';

import './tag.scss';

const Tag = ({ tag }) => {
  return (
    <div className="tag">
      {tag}
    </div>
  );
};

export default Tag;