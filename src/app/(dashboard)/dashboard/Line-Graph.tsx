"use client";
import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const chartData = [
  { time: "00:00", value: 0 },
  { time: "01:00", value: 30 },
  { time: "02:00", value: 20 },
  { time: "03:00", value: 50 },
  { time: "04:00", value: 20 },
  { time: "05:00", value: 50 },
  { time: "06:00", value: 0 },
];

const chartConfigs = [
  { label: "CYCLE TIME", unit: "seconds", color: "#FF9F1C" },
  { label: "THROUGHPUT", unit: "pbh", color: "#CA4E82" },
  { label: "ACTUAL YIELD", unit: "bottle", color: "#00D1DE" },
];

function LineGraph() {
  return (
    <div className="w-[316px] h-full bg-white shadow-lg rounded-xl p-6 space-y-6">
      {chartConfigs.map(({ label, unit, color }, index) => (
        <div key={index}>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-xl" style={{ backgroundColor: color }}></span>
            <p className="text-sm font-semibold text-gray-800">{label}</p>
            <p className="text-xs text-gray-500">[{unit}]</p>
          </div>
          <hr className="border-[#EFEFEF] my-3" />
          
          <div className="h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  strokeWidth={4}
                  fill={`url(#color${index})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between items-center mt-3 text-gray-800">
            <div className="flex items-center space-x-1">
              <span className="text-sm">Avg.</span>
              <h1 className="text-lg font-semibold">1.0</h1>
            </div>
            <div className="flex items-center space-x-1 text-green-500">
              <IoIosArrowDown size={18} />
              <span className="text-sm">Min.</span>
              <h1 className="text-lg font-semibold">0.5</h1>
            </div>
            <div className="flex items-center space-x-1 text-red-500">
              <IoIosArrowUp size={18} />
              <span className="text-sm">Max.</span>
              <h1 className="text-lg font-semibold">1.5</h1>
            </div>
          </div>
          <hr className="border-[#EFEFEF] my-3" />
        </div>
      ))}
    </div>
  );
}

export default LineGraph;
