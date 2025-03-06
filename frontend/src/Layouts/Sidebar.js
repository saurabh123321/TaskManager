import { NavLink } from "react-router-dom";
import {  UserCheck, Home, List, CheckCircle, Activity, Users, Trash } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 h-screen">
      <h2 className="text-xl font-bold mb-4">
        <UserCheck className="inline-block mr-2"  ></UserCheck>
        TaskMe
      </h2>
      <hr className="my-4" />
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => `block p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`}>
              <Home className="inline-block mr-2" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={({ isActive }) => `block p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`}>
              <List className="inline-block mr-2" /> Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" className={({ isActive }) => `block p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`}>
              <CheckCircle className="inline-block mr-2" /> Completed
            </NavLink>
          </li>
          <li>
            <NavLink to="/in-progress" className={({ isActive }) => `block p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`}>
              <Activity className="inline-block mr-2" /> In Progress
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className={({ isActive }) => `block p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`}>
              <Users className="inline-block mr-2" /> Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/trash" className={({ isActive }) => `block p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`}>
              <Trash className="inline-block mr-2" /> Trash
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;