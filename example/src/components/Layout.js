import React from 'react';
import Button from './Button';

const Layout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 bg-white shadow">
        <div className="container flex items-center mx-auto py-4 px-8">
          <div>Logo</div>
          <div className="ml-8">Links</div>
          <div className="ml-auto">
            <Button className="text-sm">Start Free Trial</Button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
