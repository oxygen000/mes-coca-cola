"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiPlus, FiEdit, FiTrash } from "react-icons/fi";

function PlanningPage() {
  const pathname = usePathname();
  let currentPage = pathname.split("/").filter(Boolean).pop() || "Planning";
  currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", status: "Pending" },
    { id: 2, name: "Task 2", status: "In Progress" },
    { id: 3, name: "Task 3", status: "Completed" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [editTask, setEditTask] = useState<{ id: number; name: string; status: string } | null>(null);

  const addTask = () => {
    if (!newTaskName.trim()) return;
    if (editTask) {
      setTasks(tasks.map(task => task.id === editTask.id ? { ...task, name: newTaskName } : task));
      setEditTask(null);
    } else {
      const newTask = { id: Math.random(), name: newTaskName, status: "Pending" };
      setTasks([...tasks, newTask]);
    }
    setShowModal(false);
    setNewTaskName("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const openEditModal = (task: { id: number; name: string; status: string }) => {
    setEditTask(task);
    setNewTaskName(task.name);
    setShowModal(true);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{currentPage}</h1>

      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Task List</h2>
          <button 
            onClick={() => { setShowModal(true); setEditTask(null); setNewTaskName(""); }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
          >
            <FiPlus /> Add Task
          </button>
        </div>

        <table className="w-full border-collapse text-left text-gray-700">
          <thead>
            <tr className=" ">
              <th className="p-4 text-left">Task</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id} className="border-b">
                <td className="p-4 font-semibold">{task.name}</td>
                <td className={`p-4 font-bold ${task.status === "Completed" ? "text-green-600" : "text-blue-600"}`}>{task.status}</td>
                <td className="p-4 flex gap-2">
                  <button 
                    onClick={() => openEditModal(task)}
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
                  >
                    <FiEdit /> 
                  </button>
                  <button 
                    onClick={() => deleteTask(task.id)}
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

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">{editTask ? "Edit Task" : "Add New Task"}</h2>
            <input 
              type="text" 
              placeholder="Task Name" 
              value={newTaskName} 
              onChange={(e) => setNewTaskName(e.target.value)} 
              className="border p-3 w-full rounded-md mb-4 focus:ring focus:ring-blue-300"
            />
            <div className="flex justify-between">
              <button onClick={addTask} className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700">
                {editTask ? "Save" : "Add"}
              </button>
              <button onClick={() => setShowModal(false)} className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanningPage;
