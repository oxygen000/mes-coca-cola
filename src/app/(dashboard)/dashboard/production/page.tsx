"use client";
import React from "react";
import { usePathname } from "next/navigation";
import FactoryName from "./Factory-Name";

function ProductionPage() {
  const pathname = usePathname();
  let currentPage = pathname.split("/").filter(Boolean).pop();

  if (currentPage && currentPage !== "dashboard") {
    currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  } else {
    currentPage = "";
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Dashboard {currentPage && ` / ${currentPage}`}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-8  place-items-center">
      {Array.from({ length: 8 }).map((_, index) => (
        <FactoryName key={index} />
      ))}
    </div>


     
    </div>
  );
}

export default ProductionPage;
