import React from 'react';
import { NavLink } from 'react-router-dom'
import { tags } from '../../utils/email-manager';

import './side-nav.css';

const SideNav = () => {
  let tagLinks = tags.map((tag) => {
    return <NavLink className="side-nav-tag" to={`/tag/${tag}`} key={tag}>{tag}</NavLink>
  });

  return (
    <div className="side-nav-container">
      <div className="side-nav-tags">
        <NavLink className="side-nav-tag" key="inbo2" to="/inbox">Inbox</NavLink>
        {tagLinks}
      </div>
    </div>
  );
};

export default SideNav;