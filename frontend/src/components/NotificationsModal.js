import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";

const NotificationsModal = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New task has been assigned to you and 2 others.", time: "1 day ago", read: false },
    { id: 2, text: "New task has been assigned to you. The task priority is High.", time: "1 day ago", read: false },
    { id: 3, text: "New task has been assigned to you and 1 others.", time: "4 hours ago", read: false },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg p-2 border top-10">
      <div className="border-b pb-2 flex justify-between items-center">
        <h2 className="text-lg font-bold">Notifications</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
      </div>

      <div className="max-h-64 overflow-y-auto mt-2">
        {notifications.map((notif) => (
          <div key={notif.id} className={`p-3 border-b ${notif.read ? "text-gray-400" : "text-black"}`}>
            <div className="flex items-center gap-2">
              {notif.read ? <CheckCircle size={16} className="text-gray-400" /> : <Bell size={16} className="text-blue-500" />}
              <span className="text-xs text-gray-500">{notif.time}</span>
            </div>
            <p className="text-sm">{notif.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-3">
        <button onClick={onClose} className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100">
          Cancel
        </button>
        <button onClick={markAllRead} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Mark All Read
        </button>
      </div>
    </div>
  );
};

export default NotificationsModal;
