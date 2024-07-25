// src/components/admin/Graph.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Monday", revenue: 4000 },
  { name: "Tuesday", revenue: 3000 },
  { name: "Wednesday", revenue: 2000 },
  { name: "Thursday", revenue: 2780 },
  { name: "Friday", revenue: 1890 },
  { name: "Saturday", revenue: 2390 },
  { name: "Sunday", revenue: 3490 },
];

const Graph = () => {
  return (
    <div
      className=" w-[500px] h-[250px]  rounded-tl-[7px] bg-white"
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
        margin: "auto",
        padding: "2rem",
        height: "25%",
        width: "50%",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
