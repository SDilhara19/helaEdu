import React ,{useState} from "react";
import { Header, Footer } from "@/components/common";
import Sidebar from "@components/admin/Sidebar";
import Graph from "@components/admin/Graph";
import CountBox from "@components/admin/CountBox";
import AccessBtn from "@components/admin/AccessBtn";
import RecentlyAccessedRoles from "@/components/admin/RecentlyAccessedRoles";
import DashboardTable from "@components/admin/DashboardTable";
import TopTeachers from "@components/admin/TopTeachers";
import ExampleChart from "@components/admin/ExampleChart";
import { CurrencyDollarIcon, UserGroupIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/outline';
import UserRegistrationPieChart from "@components/admin/UserRegistrationPieChart";

const Dashboard = () => {
  
    const [active, setActive] = useState(null);
  
    const handleClick = (item) => {
      setActive(item);
    };
    const metrics = [
      {
        title: 'Students',
        value: '1,500',
        change: '10%',
        changeType: 'increase',
        icon: <UsersIcon className="h-6 w-6 text-white" />,
        bgColor: 'bg-blue-500',
      },
      {
        title: 'Teachers',
        value: '200',
        change: '5%',
        changeType: 'increase',
        icon: <AcademicCapIcon className="h-6 w-6 text-white" />,
        bgColor: 'bg-green-500',
      },
      {
        title: 'Moderators',
        value: '50',
        change: '2%',
        changeType: 'decrease',
        icon: <UserGroupIcon className="h-6 w-6 text-white" />,
        bgColor: 'bg-yellow-500',
      },
      {
        title: 'Total Revenue',
        value: '$100',
        change: '15%',
        changeType: 'increase',
        icon: <CurrencyDollarIcon className="h-6 w-6 text-white" />,
        bgColor: 'bg-purple-500',
      },
    ];
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper mb-9">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper mx-32">
            <h1 className="mx-10 my-14">Dashboard</h1>
            
            <div className=" mx-10 flex  justify-between ">
              <div className="w-3/5 h-128 rounded-xl shadow-xl p-9 mr-10">
                <h2 className="text-3xl "> Total Revenue</h2>
                <hr className="border-t-2 border-yellow mb-4 w-56" />
                <br></br>
                <ExampleChart/>
              </div>
              <div className="rounded-xl shadow-xl p-9 w-2/5 h-128">
                
                <TopTeachers/>
              </div>
            </div>
              
            <div className="flex justify-around p-8 space-x-4">
              {metrics.map((metric, index) => (
                <CountBox
                  key={index}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  changeType={metric.changeType}
                  icon={metric.icon}
                  bgColor={metric.bgColor}
                />
              ))}
    </div>
            
           
           <div className="flex justify-between">
            <div className="w-1/5 shadow-xl rounded-xl mx-10 h-128 p-10">
              <h2 className="text-3xl">User Registrations</h2>
              <hr className="border-t-2 border-yellow mb-4 w-72" />
              <br></br>
              <UserRegistrationPieChart/>
            </div>
           
            <div className="w-4/5 shadow-xl rounded-xl p-10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-3xl ">Teacher's Approval Requests</h2>
                  <hr className="border-t-2 border-yellow mb-4 w-128" />
                </div>
                  
                  <a href="#" className="text-blue text-xl">See All</a>
                </div>
                <br></br>
                <DashboardTable/>
            </div>
           </div>
            {/* <RecentlyAccessedRoles /> */}
            <div className="w-full">
              
            </div>
           
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Dashboard;
