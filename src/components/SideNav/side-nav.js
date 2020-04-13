import React, { useContext } from 'react';
import EmailContext from '../../context/EmailContext';
import { NavLink } from 'react-router-dom'

import './side-nav.scss';

const SideNav = () => {
  const email = useContext(EmailContext);

  let tagLinks = email.tags.map((tag) => {
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