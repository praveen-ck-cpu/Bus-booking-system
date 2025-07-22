import React from 'react';
import AdminPage from './AdminPage';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const Layout1 = () => {
  const location = useLocation();
  const adminid = location.state;
  return (
    <>
      <div className="flex">
        <AdminPage/>
        <div className="flex flex-col w-full">
          <AdminNavbar />
          <div className="p-4">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout1;
