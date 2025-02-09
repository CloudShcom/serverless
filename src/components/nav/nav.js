import { Link } from "gatsby";
import React from "react";

import styles from "./nav.module.scss";

const Nav = location => {
  const loc = location.location;
  return (
    <nav className={styles.root}>
      <ul>
        <li data-active={loc.pathname.includes("/services/") ? "true" : ""}>
          <Link to="/services/major">Services</Link>
          <div data-subnav>
            <Link to="/services/major">Major Providers</Link>
            <Link to="services/auth">Auth</Link>
            <Link to="services/cmss">CMSs</Link>
            <Link to="services/notifications">Notifications</Link>
            <Link to="services/ssgs">Static Site Generators</Link>
          </div>
        </li>
        <li>
          <Link to="/resources/">Resources</Link>
        </li>
        <li>
          <Link to="/ideas/">Ideas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
