import React from 'react';
import { Footer } from '@/components/common';
import Header from "@/components/teacher_com/Header";
import Sidebar from '@/components/admin/Sidebar';
import CountBox from '@/components/admin/CountBox';
import Accessbtn from '@/components/admin/AccessBtn';
import Table from '@/components/admin/Table';
import SeeMoreBtn from '@/components/admin/SeeMoreBtn';

const Articles = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ marginTop: '100px' }}> {/* Adjust margin-top as needed */}
        <CountBox />
        <Accessbtn></Accessbtn>
        <Table></Table>
        <SeeMoreBtn></SeeMoreBtn>
      </div>
      <iframe></iframe>
      
      <Footer />
    </>
  );
};

export default Articles;
