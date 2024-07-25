import React from 'react';
import { Footer } from '@/components/common';
import Header from "@/components/teacher_com/Header";
import Sidebar from '@/components/admin/Sidebar';
// import CountBox from '@/components/admin/CountBox';
// import Accessbtn from '@/components/admin/AccessBtn';
// import Table from '@/components/admin/Table';
// import SeeMoreBtn from '@/components/admin/SeeMoreBtn';

const Reports = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ marginTop: '30px', marginLeft: '270px', marginRight: '70px' }}>
        <h1 className="text-5xl font-bold mb-12 relative inline-block">
          Reports
          <span 
            className="absolute left-0 bottom-[-8px] bg-yellow-500"
            style={{ height: '4px', width: '100%', maxWidth: '200px' }}
          ></span>
        </h1>
        {/* <CountBox />
        <Accessbtn></Accessbtn>
        <Table></Table>
        <SeeMoreBtn></SeeMoreBtn> */}
      </div>
      <iframe></iframe>
      <Footer />
    </>
  );
};

export default Reports;
