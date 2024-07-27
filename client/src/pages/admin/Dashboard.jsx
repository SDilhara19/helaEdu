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
          <div className="content-wrapper mx-32 ">
            <h1 className="  mt-20">Dashboard</h1>
            <hr className='border-yellow border-t-4 ml-32  w-64   ' />
            <div className=" mx-32 flex  justify-between ">
              <div className="w-3/5 mx-10 h-auto rounded-xl shadow-xl p-9 ">
                <h2 className="text-3xl "> Subscription Revenue</h2>

                <Graph/>
              </div>
              <div className="w-3/5 h-auto rounded-xl shadow-xl p-9 mx-10 ">
                <h2 className="text-3xl "> Advertisement Revenue</h2>

                <Graph/>
              </div>
              {/* <div className="rounded-xl shadow-xl p-9 w-2/5">
                
                <TopTeachers/>
              </div> */}
            </div>
              
            <div className="mx-32">
              <CountBox />
            </div>
           
           
            
          
          </div>
        </div> 
      </div>
    </>
  );
};

export default Dashboard;
