import React from 'react';
import { Footer } from '@/components/common';
import Header from "@/components/teacher_com/Header";
import Sidebar from '@/components/admin/Sidebar';
import Card from '@/components/admin/Card';
import UserTable from '@components/admin/UserTable';
// import CountBox from '@/components/admin/CountBox';
// import Accessbtn from '@/components/admin/AccessBtn';
// import Table from '@/components/admin/Table';
import SeeMoreBtn from '@/components/admin/SeeMoreBtn';

const UserManagement = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ marginTop: '50px', marginLeft: '250px', marginRight: '70px' }}>
        <h1 className="text-5xl font-bold mb-12 relative inline-block">
          User Management
          <span 
            className="absolute left-0 bottom-[-8px] bg-yellow-500"
            style={{ height: '4px', width: '100%', maxWidth: '300px' }}
          ></span>
        </h1>
        <Card />
        <br /><br />
        <UserTable />
        {/* <CountBox />
        <Accessbtn></Accessbtn>
        <Table></Table> */}
        <SeeMoreBtn />
      </div>
      <iframe></iframe>
      <Footer />
    </>
  );
};

export default UserManagement;
