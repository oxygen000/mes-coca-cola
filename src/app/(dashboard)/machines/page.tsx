"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiPlus, FiPower, FiPlay, FiTool, FiTrash } from "react-icons/fi";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

function ProductionPage() {
  const pathname = usePathname();
  let currentPage = pathname.split("/").filter(Boolean).pop() || "Machines";
  currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  const [machines, setMachines] = useState([
    { id: 1, name: "Machine 1", status: "Running", lastMaintenance: "2024-03-10", efficiency: 95, energy: 50 },
    { id: 2, name: "Machine 2", status: "Stopped", lastMaintenance: "2024-02-20", efficiency: 80, energy: 60 },
    { id: 3, name: "Machine 3", status: "Running", lastMaintenance: "2024-03-01", efficiency: 88, energy: 45 },
    { id: 4, name: "Machine 4", status: "Maintenance", lastMaintenance: "2024-02-28", efficiency: 60, energy: 70 },
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [newMachineName, setNewMachineName] = useState("");

  const handleAddMachine = () => {
    if (newMachineName.trim() === "") return;
    const newMachine = {
      id: Math.floor(Math.random() * 1000),
      name: newMachineName,
      status: "Running",
      lastMaintenance: "2024-03-15",
      efficiency: Math.floor(Math.random() * 100),
      energy: Math.floor(Math.random() * 100),
    };
    setMachines([...machines, newMachine]);
    setShowModal(false);
    setNewMachineName("");
  };

  const toggleMachineStatus = (id: number) => {
    setMachines(machines.map(machine => 
      machine.id === id ? { ...machine, status: machine.status === "Running" ? "Stopped" : "Running" } : machine
    ));
  };

  const setMaintenance = (id: number) => {
    setMachines(machines.map(machine => 
      machine.id === id ? { ...machine, status: "Maintenance" } : machine
    ));
  };

  const deleteMachine = (id: number) => {
    setMachines(machines.filter(machine => machine.id !== id));
  };

  const COLORS = ["#22C55E", "#EF4444", "#FACC15"];
  const statusData = [
    { name: "Running", value: machines.filter((m) => m.status === "Running").length },
    { name: "Stopped", value: machines.filter((m) => m.status === "Stopped").length },
    { name: "Maintenance", value: machines.filter((m) => m.status === "Maintenance").length },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">{currentPage}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Machine Status Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={statusData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                {statusData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Machine Efficiency</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={machines}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="efficiency" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3">Machine</th>
              <th className="p-3">Status</th>
              <th className="p-3">Efficiency (%)</th>
              <th className="p-3">Energy Usage</th>
              <th className="p-3">Last Maintenance</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {machines.map(machine => (
              <tr key={machine.id} className="border-b hover:bg-gray-100">
                <td className="p-3 font-semibold">{machine.name}</td>
                <td className={`p-3 font-bold ${machine.status === "Running" ? "text-green-600" : machine.status === "Stopped" ? "text-red-600" : "text-yellow-600"}`}>{machine.status}</td>
                <td className="p-3">{machine.efficiency}%</td>
                <td className="p-3">{machine.energy} kWh</td>
                <td className="p-3">{machine.lastMaintenance}</td>
                <td className="p-3 flex gap-2">
                <button
  onClick={() => toggleMachineStatus(machine.id)}
  className={`px-4 py-2 rounded-md text-white flex items-center gap-1 ${
    machine.status === "Running"
      ? "bg-red-600 hover:bg-red-700" 
      : "bg-blue-600 hover:bg-blue-700" 
  }`}
>
  {machine.status === "Running" ? <FiPower /> : <FiPlay />} 
</button>

                  <button onClick={() => setMaintenance(machine.id)} className="px-4 py-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600 flex items-center gap-1">
                    <FiTool /> 
                  </button>
                  <button onClick={() => deleteMachine(machine.id)} className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 flex items-center gap-1">
                    <FiTrash /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        <FiPlus /> Add Machine
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Machine</h2>
            <input 
              type="text" 
              placeholder="Machine Name" 
              value={newMachineName} 
              onChange={(e) => setNewMachineName(e.target.value)} 
              className="border p-2 w-full rounded-md mb-4"
            />
            <div className="flex justify-end gap-2">
              <button onClick={handleAddMachine} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Add</button>
              <button onClick={() => setShowModal(false)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductionPage;
