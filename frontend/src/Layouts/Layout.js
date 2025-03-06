import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Body Section - Dynamic Content */}
        <div className="p-6 overflow-auto">
          <Outlet /> {/* This renders the selected page */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
