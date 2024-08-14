import React from 'react';
import NavBar from './NavBar'; // Import your NavBar component

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
