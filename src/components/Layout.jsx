import React from 'react';
import './Layout.css'; // Add this file for additional styles if needed

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        {/* Add your site's navigation here */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Add your site's footer here */}
      </footer>
    </div>
  );
};

export default Layout;
