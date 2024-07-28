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
      label: 'Subscription Revenue',
      data: [4700, 1200, 11500, 17000, 6000, 8300, 9500, 11700, 23000, 10200, 13500, 6700],
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

export default function ExampleChart() {
  return (
    <div className="p-1 flex justify-center bg-white h-96">
      <Line data={data} options={options} />
    </div>
  );
}
