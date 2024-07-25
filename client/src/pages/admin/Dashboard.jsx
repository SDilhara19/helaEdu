import React from "react";
import { Header, Footer } from "@/components/common";
import Sidebar from "@components/admin/Sidebar";
import Graph from "@components/admin/Graph";
import CountBox from "@components/admin/CountBox";
import AccessBtn from "@components/admin/AccessBtn";
import RecentlyAccessedRoles from "@/components/admin/RecentlyAccessedRoles";
import DashboardTable from "@components/admin/DashboardTable";
import SeeMoreButton from "@components/admin/SeeMoreBtn";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          {/* Adjust margin-left to accommodate sidebar width */}
          <h1
            className="font-montserrat font-bold text-left mb-6"
            style={{
              fontSize: "3rem" /* Adjusted font size */,
              textAlign: "center",
              padding: "4rem",
            }}
          >
            Dashboard
            <br />
            <span
              className="text-yellow-500"
              style={{
                fontSize: "2.5rem" /* Increased font size */,
                display: "inline-block",
              }}
            >
              <span className="border-b-4 border-yellow-500">
                Subscriptions Revenue
              </span>
            </span>
          </h1>
          <Graph />
          <CountBox />
          <AccessBtn />
          <RecentlyAccessedRoles />
          <DashboardTable />
          <SeeMoreButton />
          {/* Removed table content and pagination */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
