import { useState } from "react";
import axios from "axios";

const TaskModal = ({ closeModal }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "To Do",
    assignee: ""
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt"); // Get token from localStorage (or context)

    try {
      await axios.post("http://localhost:8080/api/tasks", task, {
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Pass JWT Token
        }
      });

      alert("Task added successfully!");
      closeModal(); // Close modal after submission
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" placeholder="Task Title" onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="description" placeholder="Task Description" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
          <input type="date" name="dueDate" onChange={handleChange} className="w-full p-2 border rounded" />
          <select name="priority" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low" selected>Low</option>
          </select>
          <select name="status" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="High" selected>To Do</option>
            <option value="Medium">In Progress</option>
            <option value="Low">Completed</option>
          </select>
          <input type="text" name="assignee" placeholder="Assignee" onChange={handleChange} className="w-full p-2 border rounded" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={closeModal} className="bg-gray-400 text-white p-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
