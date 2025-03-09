import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { MdToday } from "react-icons/md";

function Navbar() {
  const [isPlanetOpen, setIsPlanetOpen] = useState(false);
  const [isLineOpen, setIsLineOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState("Planet Name");
  const [selectedLine, setSelectedLine] = useState("Line Name");
  const [activeButton, setActiveButton] = useState("Today");

  return (
    <nav className="w-full h-[60px] shadow-[#272D3B33] flex flex-wrap justify-between items-center px-4 bg-white">
      <div className="flex space-x-4">
        <div className="relative">
          <button
            className="bg-[#08415C] cursor-pointer text-white flex items-center px-4 py-2 rounded-[8px]"
            onClick={() => setIsPlanetOpen(!isPlanetOpen)}
          >
            <Image src="/planet-icon.svg" alt="Planet Icon" width={24} height={24} className="mr-2" />
            <span className="hidden sm:inline">{selectedPlanet}</span>
            <IoIosArrowDown className="ml-2" />
          </button>
          {isPlanetOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-[8px] overflow-hidden z-10">
              {["All Factories", "Factory Name",].map((planet) => (
                <li
                  key={planet}
                  className={`px-4 py-2 cursor-pointer ${selectedPlanet === planet ? "bg-gray-300" : "hover:bg-gray-200"}`}
                  onClick={() => {
                    setSelectedPlanet(planet);
                    setIsPlanetOpen(false);
                  }}
                >
                  {planet}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative">
          <button
            className="bg-[#08415C] cursor-pointer text-white flex items-center px-4 py-2 rounded-md"
            onClick={() => setIsLineOpen(!isLineOpen)}
          >
            <Image src="/line-icon.svg" alt="Line Icon" width={24} height={24} className="mr-2" />
            <span className="hidden sm:inline">{selectedLine}</span>
            <IoIosArrowDown className="ml-2" />
          </button>
          {isLineOpen && (
            <ul className="absolute left-0 mt-2 cursor-pointer w-40 bg-white shadow-md rounded-md overflow-hidden z-10">
              {["Line 1", "Line 2", "Line 3"].map((line) => (
                <li
                  key={line}
                  className={`px-4 py-2 cursor-pointer ${selectedLine === line ? "bg-gray-300" : "hover:bg-gray-200"}`}
                  onClick={() => {
                    setSelectedLine(line);
                    setIsLineOpen(false);
                  }}
                >
                  {line}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="p-2 cursor-pointer">
          <Image src="/machines-icon.svg" alt="Machines Icon" width={24} height={24} />
        </button>
      </div>

      <ul className="flex space-x-2 sm:space-x-4 items-center mt-2 sm:mt-0">
        {["Today", "Yesterday", "Last Week"].map((btn) => (
          <li key={btn}>
            <button
              className={`px-3 py-2 rounded-[8px] cursor-pointer text-sm sm:text-base ${activeButton === btn ? "bg-[#08415C] text-white" : "hover:bg-gray-200"}`}
              onClick={() => setActiveButton(btn)}
            >
              {btn}
            </button>
          </li>
        ))}
       <li>
  <button
    className="p-2  cursor-pointer transition duration-200 flex items-center"
    onClick={() => console.log("Open Date Picker")} 
  >
    <MdToday size={24}  color="#B2BEC3" className=" hover:text-gray-700" />
  </button>
</li>

      </ul>
    </nav>
  );
}

export default Navbar;
