import React from 'react';
import '../../style.css';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['About Me', 'My CV' ];
  return (
    <ul className="navbar nav-tabs justify-content-start">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase().replace(/\s+/g,"")}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;