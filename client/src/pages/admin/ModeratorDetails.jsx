import React from 'react';
import { Footer } from '@/components/common';
import Header from "@/components/teacher_com/Header";
import ViewModeratorManagement from '@/components/admin/ViewModeratorDetails';
import Sidebar from '@components/admin/Sidebar';

// import Sidebar from '@/components/admin/Sidebar';
// import CountBox from '@/components/admin/CountBox';
// import Accessbtn from '@/components/admin/AccessBtn';
// import Table from '@/components/admin/Table';
// import SeeMoreBtn from '@/components/admin/SeeMoreBtn';

const ModeratorDetails = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ marginTop: '100px' }}> 
        {/* <CountBox />
        <Accessbtn></Accessbtn>
        <Table></Table>
        <SeeMoreBtn></SeeMoreBtn> */}
        <ViewModeratorManagement></ViewModeratorManagement>
        
      </div>
      <iframe></iframe>
      
      <Footer />
    </>
  );
};

export default ModeratorDetails;
