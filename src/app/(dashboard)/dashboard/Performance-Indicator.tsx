import React from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function PerformanceIndicator() {
  const data = [
    { label: "Availability", value: 80, color: "#FF5400" },
    { label: "Performance", value: 30, color: "#FF9F1C" },
    { label: "Quality", value: 60, color: "#08415C" },
  ];

  const oeeValue = Math.round(
    data.reduce((sum, item) => sum + item.value, 0) / data.length
  );

  return (
    <div className="bg-white rounded-xl w-full h-[212px] shadow-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3">
          <Image src="/pereformance-icon.svg" alt="performance" width={24} height={24} />
          <h1 className="font-semibold text-md text-black">Performance Indicator KPI</h1>
        </div>
        <hr className="border border-[#EFEFEF] my-2" />
      </div>
      <div className="flex justify-between items-center flex-1">
        <div className="w-[100px] h-[100px] flex flex-col items-center">
          <CircularProgressbar
            value={oeeValue}
            text={`${oeeValue}%`}
            styles={buildStyles({
              textColor: "#000000",
              textSize: "22px",
              pathColor: "#08415C",
              trailColor: "#ddd",
            })}
          />
          <p className="text-[16px] font-medium text-black mt-1">OEE</p>
        </div>
        <div className="flex-1 space-y-2 pl-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2">
                <div className="relative w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="h-full "
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-black w-10 text-right">
                  {item.value}%
                </span>
              </div>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PerformanceIndicator;
