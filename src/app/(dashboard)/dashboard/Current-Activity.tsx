import React, { useState } from 'react';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CurrentActivity() {
  const [selectedData, setSelectedData] = useState<'OEE' | 'MTBF' | 'UPTIME'>('OEE');

  const commonLabels = ['24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan', '1 Feb', '2 Feb', '3 Feb', '4 Feb', '5 Feb', '6 Feb', '7 Feb'];

  const data = {
    OEE: {
      labels: commonLabels,
      datasets: [
        {
          data: [250, 255, 253, 200, 190, 180, 160, 150, 145, 140, 138, 135, 133, 130, 128],
          fill: false,
          borderColor: '#457B9D',
          tension: 0.4,
          borderWidth: 4,
        },
      ],
    },
    MTBF: {
      labels: commonLabels,
      datasets: [
        {
          data: [120, 150, 180, 130, 140, 200, 190, 185, 175, 160, 150, 145, 140, 138, 135],
          fill: false,
          borderColor: 'rgb(255, 159, 64)',
          tension: 0.4,
          borderWidth: 4,
        },
      ],
    },
    UPTIME: {
      labels: commonLabels,
      datasets: [
        {
          data: [98, 97, 96, 99, 98, 99, 98.5, 97.8, 97.5, 97.2, 97, 96.8, 96.5, 96.3, 96.1],
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
          tension: 0.4,
          borderWidth: 4,
        },
      ],
    },
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 50,
          callback: (value: string | number) => value,
        },
        suggestedMin: 100,
        suggestedMax: 300,
      },
    },
    elements: {
      line: {
        cubicInterpolationMode: 'monotone'as const,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col  mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Image src="/Activity.svg" alt="product" width={22} height={22} />
          <h1 className="font-semibold text-[14px] text-black">Current Activity</h1>
        </div>
        <div className="flex space-x-8 text-[#2C3E50] text-[20px]">
          {['OEE', 'MTBF', 'UPTIME'].map((type) => (
            <p
              key={type}
              className={`cursor-pointer ${selectedData === type ? 'font-semibold border-b-[4px] border-[#F40009]' : ''}`}
              onClick={() => setSelectedData(type as 'OEE' | 'MTBF' | 'UPTIME')}
            >
              {type}
            </p>
          ))}
        </div>
      </div>
      <hr className="border border-[#EFEFEF] mb-6" />
      <div className="line-chart w-full flex-1">
        <Line data={data[selectedData]} options={options} />
      </div>
    </div>
  );
}

export default CurrentActivity;
