import React from "react";
import Image from "next/image";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";

function Page() {
  return (
    <main className="h-screen  flex items-center justify-center ">
      <div className="login flex flex-col md:flex-row w-full  h-auto md:h-[100vh] overflow-hidden">
        
        <div className="md:w-1/2  md:h-full relative">
          <Image
            src="/platform.svg"
            alt="Login Form"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full bg-[#F40009]"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center px-6 md:px-8 h-full justify-between">
          
        <div className="logo flex items-center space-x-4 mt-6 fixed top-6 ">
  <Image 
    src="/logo.svg" 
    alt="Login Logo" 
    width={80} 
    height={70} 
  />
  <h1 className="text-[#F40009] text-3xl md:text-4xl font-medium">MES</h1>
</div>


          <form className="space-y-4 w-full max-w-sm flex flex-col items-center mt-auto">
            
            <div className="relative w-full">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-10 p-3 border border-gray-300 rounded-[35px] focus:outline-none focus:ring-2 focus:ring-[#F40009]"
              />
            </div>

            <div className="relative w-full">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 p-3 border border-gray-300 rounded-[35px] focus:outline-none focus:ring-2 focus:ring-[#F40009]"
              />
            </div>

            <Link 
              href="/dashboard"
              className="w-full h-[60px] bg-[#F40009] text-white text-lg font-semibold rounded-[35px] hover:bg-red-700 transition-all duration-300 flex items-center justify-center no-underline"
            >
              Login
            </Link>
          </form>

          <Image 
            src="/Coca-Cola-Logo.svg" 
            alt="Coca-Cola Logo" 
            width={200} 
            height={65} 
            className="mb-6 mt-6"
          />

        </div>
      </div>
    </main>
  );
}

export default Page;
