"use client";
import React from "react";
import { usePathname } from "next/navigation";

function ProductionPage() {
  const pathname = usePathname();
  let currentPage = pathname.split("/").filter(Boolean).pop();

  if (currentPage && currentPage !== "Planning") {
    currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  } else {
    currentPage = "";
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
      Planning 
      </h1>
     


     
    </div>
  );
}

export default ProductionPage;
