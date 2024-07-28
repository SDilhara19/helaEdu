import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Advertisement Revenue',
      data: [4700, 1200, 1500, 1700, 6000, 3300, 4500, 11700, 2000, 10200, 11500, 6700],
      borderColor: '#1E3A8A',
      backgroundColor: 'rgba(30, 58, 138, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Revenue ($)',
      },
    },
  },
};

export default function ExampleChart2() {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className=""
      >
      
       
      </CardHeader>
      <CardBody className="">
        <Line data={data} options={options} />
      </CardBody>
    </Card>
  );
}
