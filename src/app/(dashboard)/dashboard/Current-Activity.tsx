import React from 'react'
import Image from "next/image";

function CurrentActivity() {
  return (
    <div className='bg-[#FFFFFF] rounded-[10px] shadow-lg h-[400px] p-4 flex flex-col justify-between'>
     <div className="flex items-center space-x-2 mb-2">
             <Image src="/Activity.svg" alt="product" width={24} height={24} />
             <h1 className="font-medium text-md text-black">Power KPI</h1>
           </div>
           <div className='flex text-[#2C3E50] w'>
            <p>OEE</p>
            <p>MTBF[h]</p>
            <p>UPTIME</p>
           </div>
           <hr className="border border-[#EFEFEF] mb-3" />
            <div className='lin'>

            </div>
    </div>
  )
}

export default CurrentActivity
