import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, User, Search, LogOut, Lock, UserCircle } from "lucide-react";
import ProfileModal from "../components/ProfileModal";
import ChangePasswordModal from "../components/ChangePasswordModal";
import NotificationsModal from "../components/NotificationsModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const openProfileModal = () => {
    setIsProfileOpen(true);
    setIsOpen(false); // Close dropdown when opening modal
  };
  const closeProfileModal = () => setIsProfileOpen(false);

  const openChangePasswordModal = () => {
    setIsChangePasswordOpen(true);
    setIsOpen(false); // Close dropdown when opening modal
  };
  const closeChangePasswordModal = () => setIsChangePasswordOpen(false);

  const openNotificationsModal = () => {
    setIsNotificationsOpen(true);
  };
  const closeNotificationsModal = () => setIsNotificationsOpen(false);


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>

        {/* Notification & Profile Icons */}
        <div className="flex items-center space-x-6 relative">
          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <Bell onClick={openNotificationsModal} className="text-gray-600" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              4
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center gap-2 p-2 bg-blue-600 text-white rounded-full w-10 h-10 justify-center">
              <span className="font-bold">CA</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
                <Link onClick={openProfileModal} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                  <UserCircle className="text-gray-600" size={18} /> Profile
                </Link>
                <Link onClick={openChangePasswordModal} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                  <Lock className="text-gray-600" size={18} /> Change Password
                </Link>
                <button onClick={handleLogout} className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 rounded">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* Profile Modal */}
      <ProfileModal isOpen={isProfileOpen} onClose={closeProfileModal} />

      {/* Change Password Modal */}
      <ChangePasswordModal isOpen={isChangePasswordOpen} onClose={closeChangePasswordModal} />
    
      {/* Notifications Modal */}
      <NotificationsModal isOpen={isNotificationsOpen} onClose={closeNotificationsModal} />
    </>
  );
};

export default Navbar;
