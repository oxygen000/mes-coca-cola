'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

function Page() {
  const pathname = usePathname();

  // استخراج اسم الصفحة الحالية بعد "/"
  const currentPage = pathname.split('/').filter(Boolean).pop() || "Dashboard";

  return (
    <div className="p-6">
      {/* العنوان المتغير بناءً على الصفحة الحالية */}
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Dashboard {currentPage !== "Dashboard" && `/ ${currentPage}`}
      </h1>


    </div>
  )
}

export default Page;
