import React from 'react';
import { Footer } from '@/components/common';
import Header from "@/components/teacher_com/Header";
// import Sidebar from '@/components/admin/Sidebar';
import ModBtn from '@/components/admin/ModBtn';
import ModeratorTable from '@/components/admin/ModeratorTable';
// import ViewBtn from '@/components/admin/ViewBtn';

const Articles = () => {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <div style={{ marginTop: '100px' }}> 
        
      </div>
      <ModBtn></ModBtn>
      <br></br><br></br>
      <ModeratorTable></ModeratorTable>
      
      <iframe></iframe>

      
      
      <Footer />
    </>
  );
};

export default Articles;
