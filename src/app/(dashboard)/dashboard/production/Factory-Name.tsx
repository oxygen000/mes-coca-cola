import React from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FactoryName = () => {
  const data = [
    { label: "Availability", value: 80, color: "#FF5400" },
    { label: "Performance", value: 90, color: "#FF9F1C" },
    { label: "Quality", value: 58, color: "#08415C" },
  ];

  const oeeValue = Math.round(
    data.reduce((sum, item) => sum + item.value, 0) / data.length
  );

  const stats = [
    { icon: "/speed.svg", label: "Actual speed", value: "5,000", unit: "L/s" },
    { icon: "/production.svg", label: "Actual production", value: "20,000", unit: "L" },
    { icon: "/cycle.svg", label: "Last hour cycle time", value: "20", unit: "s" },
    { icon: "/active.svg", label: "Ratio of active lines", value: "5:2", unit: "" },
  ];

  const bottomStats = [
    { icon: "/volume.svg", label: "Production volume", value: "500", unit: "L" },
    { icon: "/quality.svg", label: "Production quality", value: "5,000", unit: "" },
  ];

  const progressBars = [
    { label: "OEE", color: "#FF9F1C" },
    { label: "SLE", color: "#00D1DE" },
    { label: "USLE", color: "#CA4E82" },
  ];

  return (
    <main>
      <div className="card w-[350px] h-full rounded-2xl bg-white">
        <div className="title bg-[#08415C] text-white h-[50px] p-3 rounded-t-lg">
          <p>Factory Name</p>
        </div>
        <div className="p-4">
          {stats.map(({ icon, label, value, unit }, index) => (
            <div key={index} className="flex justify-between items-center w-full p-2">
              <div className="flex items-center gap-2">
                <Image src={icon} alt={label} width={24} height={24} />
                <h1 className="text-[#2C3E50] text-lg font-semibold">{label}</h1>
              </div>
              <p className="text-[#8D9192] text-[21px] font-bold">
                {value} <span className="text-[12px]">{unit}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center w-full text-[#08415C] my-4">
          <hr className="flex-grow w-[99px] border border-[#08415C]" />
          <p className="mx-4 font-semibold">Last Shift</p>
          <hr className="flex-grow border border-[#08415C]" />
        </div>
        <div className="flex justify-center gap-4 my-5">
          {progressBars.map(({ label, color }, index) => (
            <div key={index} className="w-[100px] h-[100px] flex flex-col items-center">
              <CircularProgressbar
                value={oeeValue}
                text={`${oeeValue}%`}
                styles={buildStyles({
                  textColor: "#000000",
                  textSize: "22px",
                  pathColor: color,
                  trailColor: "#ddd",
                })}
              />
              <p className="text-[16px] font-medium text-black mt-1">{label}</p>
            </div>
          ))}
        </div>
        <div className="p-4">
          {bottomStats.map(({ icon, label, value, unit }, index) => (
            <div key={index} className="flex justify-between items-center w-full p-2">
              <div className="flex items-center gap-2">
                <Image src={icon} alt={label} width={24} height={24} />
                <h1 className="text-[#2C3E50] text-lg font-semibold">{label}</h1>
              </div>
              <p className="text-[#8D9192] text-[21px] font-bold">
                {value} <span className="text-[12px]">{unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FactoryName;