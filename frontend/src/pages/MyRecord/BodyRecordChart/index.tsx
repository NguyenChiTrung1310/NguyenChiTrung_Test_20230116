import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'start' as const,
      labels: {
        boxWidth: 56,
        boxHeight: 24,
        useBorderRadius: true,
        borderRadius: 11,
      },
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        color: '#777777',
      },
    },
    y: {
      display: false,
    },
  },
};

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
];

export const data = {
  labels,
  datasets: [
    {
      label: '年',
      data: [100, 30, 46, 23, 80, 52, 60, 34, 46, 24, 67, 65],
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
    {
      label: '月',
      data: [45, 13, 67, 45, 68, 90, 20, 34, 56, 34, 79, 65],
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
  ],
};

const BodyRecordChart = () => {
  return <Line width='100%' height={250} options={options} data={data} />;
};

export default BodyRecordChart;
