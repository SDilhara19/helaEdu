import React from "react";
import { Header, Footer } from "@/components/common";
import Sidebar from "@/components/admin/Sidebar";
import Profile from "@/components/admin/Profile";
import Password from "@/components/admin/Password";
import ProfileDeletion from "@/components/admin/ProfileDeletion";
// import SeeMoreBtn from '@/components/admin/SeeMoreBtn';

const Settings = () => {
  return (
    <div className="settings-page bg-light-blue relative">
      <Header />
      <Sidebar />
      <div className="flex-1 p-8 ml-[250px] mr-[70px]">
        <h1 className="text-5xl font-bold mb-12 relative inline-block">
          Account Settings
          <span
            className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500"
            style={{ width: "100%", left: "0", bottom: "-2px" }}
          />
        </h1>
        <Profile />
        <Password />
        <ProfileDeletion />
        <div style={{ marginTop: "100px" }}>
          {/* <CountBox />
          <Accessbtn />
          <Table />
          <SeeMoreBtn /> */}
        </div>
        <iframe></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
