"use client";
import React from "react";
import { usePathname } from "next/navigation";

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
        Dashboard / Factory Name
      </h1>
      
    <div>
      
    </div>

     
    </div>
  );
}

export default ProductionPage;
