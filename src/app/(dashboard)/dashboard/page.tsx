'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import TotalProduction from './Total-Production'
import PerformanceIndicator from './Performance-Indicator'
import PowerKPI from './Power-KPI'
import LineGraph from './Line-Graph'
import CurrentActivity from './Current-Activity'
import Timeline from './Time-line'

function Page() {
  const pathname = usePathname();
  let currentPage = pathname.split('/').filter(Boolean).pop();
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

      {/* الشبكة العلوية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TotalProduction />
        <PerformanceIndicator />
        <PowerKPI />
      </div>

      {/* الشبكة السفلية */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <CurrentActivity />
          <Timeline/>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
          <LineGraph />
        </div>
      </div>
    </div>
  )
}

export default Page;