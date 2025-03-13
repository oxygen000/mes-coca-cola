"use client";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiFilter, FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";
import { Fragment } from "react";
import { motion } from "framer-motion";

const statusIcons = {
  All: <FiFilter className="text-gray-500 text-lg" />,
  Completed: <FiCheckCircle className="text-green-600 text-lg" />,
  "In Progress": <FiClock className="text-yellow-500 text-lg" />,
  Pending: <FiXCircle className="text-red-600 text-lg" />,
};

function FilterDropdown({ handleFilter }: { handleFilter: (status: string) => void }) {
  const filterOptions = ["All", "Completed", "In Progress", "Pending"];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg cursor-pointer shadow-md hover:bg-gray-100 transition duration-200">
        <FiFilter className="text-gray-600 text-xl" />
        <span className="text-gray-700 font-medium">Filter</span>
      </Menu.Button>
      
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-10">
          {filterOptions.map((option) => (
            <Menu.Item key={option}>
              {({ active }) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilter(option)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg ${
                    active ? "bg-gray-100" : "bg-white"
                  } transition duration-200`}
                >
                  {statusIcons[option as keyof typeof statusIcons]}
                  <span className="text-gray-700 font-medium">{option}</span>
                </motion.button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default FilterDropdown;
