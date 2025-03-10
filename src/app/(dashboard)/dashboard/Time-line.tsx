import React from 'react';
import Image from 'next/image';

function Timeline() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col max-w-4xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Image src="/Activity.svg" alt="product" width={22} height={22} />
          <h1 className="font-semibold text-[14px] text-black">Current Activity</h1>
        </div>
      </div>
      <hr className="border border-[#EFEFEF] mb-6" />
      <div className="flex items-center gap-4">
        <p className="text-[#2C3E50] text-[12px] font-medium w-20">LINE NAME</p>
        <div className="relative w-full h-[28px] bg-gray-200  overflow-hidden flex">
          <div className="h-full w-1/5 bg-[#F40009] flex items-center justify-center text-white text-xs font-semibold">
          </div>
          <div className="h-full w-2/5 bg-[#2EC4B6] flex items-center justify-center text-white text-xs font-semibold">
          </div>
          <div className="h-full w-1/5 bg-[#F40009] flex items-center justify-center text-white text-xs font-semibold">
          </div>
          <div className="h-full w-1/5 bg-[#CDD5E1] flex items-center justify-center text-white text-xs font-semibold">
          </div>
          <div className="h-full w-1/5 bg-[#2EC4B6] flex items-center justify-center text-white text-xs font-semibold">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
