// Layout.jsx
import React from 'react';
import Sidebar from '@/components/admin/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-80 p-6 w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
