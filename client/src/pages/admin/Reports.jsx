import React from "react";
import { Header } from "@/components/common";
import Sidebar from "@/components/admin/Sidebar";
// import CountBox from '@/components/admin/CountBox';
// import Accessbtn from '@/components/admin/AccessBtn';
// import Table from '@/components/admin/Table';
// import SeeMoreBtn from '@/components/admin/SeeMoreBtn';

const Reports = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper">
            <h1
              className="font-montserrat font-bold text-left mb-6"
              style={{
                fontSize: "3rem" /* Adjusted font size */,
                textAlign: "center",
                padding: "4rem",
              }}
            >
              Reports
              <br />
            </h1>
            {/* <CountBox />
        <Accessbtn></Accessbtn>
        <Table></Table>
        <SeeMoreBtn></SeeMoreBtn> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
