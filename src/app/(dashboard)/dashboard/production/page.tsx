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
      {/* عنوان الصفحة */}
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Dashboard {currentPage && ` / ${currentPage}`}
      </h1>

      {/* محتوى صفحة Production */}
     <FactoryName/>
    </div>
  );
}

export default ProductionPage;
