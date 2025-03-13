"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiEye, FiTrash } from "react-icons/fi";
import FilterDropdown from "./FilterDropdown";

function ProductionPage() {
  const pathname = usePathname();
  let currentPage = pathname.split("/").filter(Boolean).pop() || "Reports";
  currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  const [reports, setReports] = useState([
    { id: 1, title: "Monthly Sales", status: "Completed", date: "2025-03-10" },
    { id: 2, title: "Production Output", status: "In Progress", date: "2025-03-09" },
    { id: 3, title: "Employee Performance", status: "Pending", date: "2025-03-08" },
    { id: 4, title: "Quarterly Revenue", status: "Completed", date: "2025-03-07" },
    { id: 5, title: "Inventory Report", status: "In Progress", date: "2025-03-06" },
    { id: 6, title: "Customer Feedback", status: "Pending", date: "2025-03-05" },
    { id: 7, title: "Annual Budget", status: "Completed", date: "2025-03-04" },
  ]);

  const [filteredReports, setFilteredReports] = useState(reports);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilter = (status: string) => {
    setFilterStatus(status);
    filterReports(status, searchQuery);
  };

  const filterReports = (status: string, query: string) => {
    let filtered = reports;
    if (status !== "All") {
      filtered = filtered.filter((report) => report.status === status);
    }
    if (query) {
      filtered = filtered.filter((report) => report.title.toLowerCase().includes(query.toLowerCase()));
    }
    setFilteredReports(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    filterReports(filterStatus, e.target.value);
  };

  const deleteReport = (id: number) => {
    setReports(reports.filter((report) => report.id !== id));
    setFilteredReports(filteredReports.filter((report) => report.id !== id));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">{currentPage}</h1>
      </div>
      
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg">
        <FilterDropdown handleFilter={handleFilter} />
        <input 
          type="text" 
          placeholder="Search reports..." 
          value={searchQuery} 
          onChange={handleSearch} 
          className="p-2 border rounded-md" />
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="w-full border-collapse text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Report Title</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {filteredReports.map((report, index) => (
              <tr key={report.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="p-4 font-semibold">{report.title}</td>
                <td
                  className={`p-4 font-bold ${
                    report.status === "Completed"
                      ? "text-green-600"
                      : report.status === "In Progress"
                      ? "text-yellow-500"
                      : "text-red-600"
                  }`}
                >
                  {report.status}
                </td>
                <td className="p-4">{report.date}</td>
                <td className="p-4 flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    <FiEye /> 
                  </button>
                  <button
                    onClick={() => deleteReport(report.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    <FiTrash /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductionPage;
