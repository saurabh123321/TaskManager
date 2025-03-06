import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSignOutAlt, FaBell } from "react-icons/fa";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative">
      {/* Notification & Profile Icon */}
      <div className="flex items-center gap-4">        
        {/* Profile Button */}
        <button onClick={toggleDropdown} className="flex items-center gap-2 p-2 bg-blue-600 text-white rounded-full w-10 h-10 justify-center">
          <span className="font-bold">CA</span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
          <Link to="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
            <FaUser className="text-gray-600" /> Profile
          </Link>
          <Link to="/change-password" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
            <FaLock className="text-gray-600" /> Change Password
          </Link>
          <button onClick={handleLogout} className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 rounded">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
