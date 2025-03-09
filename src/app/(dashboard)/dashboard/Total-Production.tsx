import React from "react";
import Image from "next/image";

const ProgressBar = ({ actualProduction, maxProduction }: { actualProduction: number; maxProduction: number }) => {
  const progressPercentage = Math.min((actualProduction / maxProduction) * 100, 100);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="relative w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
          <div
            className="bg-[#FF5400] h-full transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <h1 className="text-sm font-semibold text-black text-[24px]">
          {Math.round(progressPercentage)}%
        </h1>
      </div>
      <p className="text-[10px] text-gray-500">Production Yield</p>
    </div>
  );
};

function TotalProduction() {
  const actualProduction = 5000;  
  const maxProduction = 7000;   

  return (
    <div className="bg-white rounded-[10px] w-full h-[212px] shadow-md p-4">
      <div className="flex items-center space-x-2 mb-2">
        <Image src="/product-icon.svg" alt="product" width={24} height={24} />
        <h1 className="font-medium text-sm text-black">Total Production</h1>
      </div>
      <hr className="border border-[#EFEFEF] mb-2" />
      <div className="flex justify-between my-3">
        <div>
          <h1 className="text-xl font-bold">
            {actualProduction.toLocaleString()} <span className="text-xs font-normal">bph</span>
          </h1>
          <p className="text-[10px] text-gray-500">Production /h</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">
            {maxProduction.toLocaleString()} <span className="text-xs font-normal">KM</span>
          </h1>
          <p className="text-[10px] text-gray-500">Actual Production</p>
        </div>
      </div>
      <ProgressBar actualProduction={actualProduction} maxProduction={maxProduction} />
    </div>
  );
}

export default TotalProduction;
