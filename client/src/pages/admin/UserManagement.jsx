import React from "react";
import { Header } from "@/components/common";
import Sidebar from "@/components/admin/Sidebar";
import Card from "@/components/admin/Card";
import UserTable from "@components/admin/UserTable";
// import CountBox from '@/components/admin/CountBox';
// import Accessbtn from '@/components/admin/AccessBtn';
// import Table from '@/components/admin/Table';
import SeeMoreBtn from "@/components/admin/SeeMoreBtn";

const UserManagement = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper">
            <div>
              <h1
                className="font-montserrat font-bold text-left mb-6"
                style={{
                  fontSize: "3rem" /* Adjusted font size */,
                  textAlign: "center",
                  padding: "4rem",
                }}
              >
                User Management
                <br />
              </h1>
              <Card />
              <br />
              <br />
              <UserTable />
              {/* <CountBox />
        <Accessbtn></Accessbtn>
        <Table></Table> */}
              <SeeMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
