import React from "react";
import Image from "next/image";

function PowerKPI() {
  const actualProduction = 5000;
  const maxProduction = 7000;

  return (
    <div className="bg-white rounded-xl w-full h-[212px] shadow-md p-4">
      <div className="flex items-center space-x-2 mb-2">
        <Image src="/power-icon.svg" alt="product" width={24} height={24} />
        <h1 className="font-medium text-md text-black">Power KPI</h1>
      </div>
      <hr className="border border-[#EFEFEF] mb-3" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-black">
            {actualProduction.toLocaleString()}{" "}
            <span className="text-sm font-normal">KWH</span>
          </h1>
          <p className="text-xs text-gray-500">Energy Used</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-black">
            {maxProduction.toLocaleString()}
          </h1>
          <p className="text-xs text-gray-500">Power Factor</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-black">
            {actualProduction.toLocaleString()}{" "}
            <span className="text-sm font-normal">KWH</span>
          </h1>
          <p className="text-xs text-gray-500">Energy Used</p>
        </div>

      </div>
    </div>
  );
}

export default PowerKPI;
