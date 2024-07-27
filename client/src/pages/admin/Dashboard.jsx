import React ,{useState} from "react";
import { Header, Footer } from "@/components/common";
import Sidebar from "@components/admin/Sidebar";
import Graph from "@components/admin/Graph";
import CountBox from "@components/admin/CountBox";
import AccessBtn from "@components/admin/AccessBtn";
import RecentlyAccessedRoles from "@/components/admin/RecentlyAccessedRoles";
import DashboardTable from "@components/admin/DashboardTable";
import SeeMoreButton from "@components/admin/SeeMoreBtn";
import TopTeachers from "@components/admin/TopTeachers";

const Dashboard = () => {
  
    const [active, setActive] = useState(null);
  
    const handleClick = (item) => {
      setActive(item);
    };
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper mx-32 my-20">
            <h1 className="ml-32  mt-20">Dashboard</h1>
            {/* <hr className="text-yellow w-1/2"></hr> */}
            <div className=" mx-32 flex  justify-between w-full">
              <div className="w-3/5 h-auto rounded-xl shadow-xl p-9 mr-14">
                <h2 className="text-3xl "> Subscription Revenue</h2>

                <Graph/>
              </div>
              <div className="rounded-xl shadow-xl p-9 w-2/5">
                
                <TopTeachers/>
              </div>
            </div>
              
        <div className="mx-16">
        <CountBox />
        </div>
            <div className="mx-32">
               <AccessBtn />
            </div>
           <div>
           <div className="flex justify-end mx-24 mt-10 mb-14">
           <div
                className={`relative mx-14 cursor-pointer ${active === 'all' ? 'active' : ''}`}
                onClick={() => handleClick('all')}
              >
                <p className="text-2xl">All</p>
                <div className={`underline ${active === 'all' ? 'visible' : ''}`}></div>
              </div>
              <div
                className={`relative mx-14 cursor-pointer ${active === 'teachers' ? 'active' : ''}`}
                onClick={() => handleClick('teachers')}
              >
                <p className="text-2xl">Teachers</p>
                <div className={`underline ${active === 'teachers' ? 'visible' : ''}`}></div>
              </div>
              <div
                className={`relative mx-14 cursor-pointer ${active === 'students' ? 'active' : ''}`}
                onClick={() => handleClick('students')}
              >
                <p className="text-2xl">Students</p>
                <div className={`underline ${active === 'students' ? 'visible' : ''}`}></div>
              </div>
              <div
                className={`relative mx-14 cursor-pointer ${active === 'moderators' ? 'active' : ''}`}
                onClick={() => handleClick('moderators')}
              >
                <p className="text-2xl">Moderators</p>
                <div className={`underline ${active === 'moderators' ? 'visible' : ''}`}></div>
              </div>
            </div>

           </div>
            {/* <RecentlyAccessedRoles /> */}
            <div className="w-full">
              <DashboardTable />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
