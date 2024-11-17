import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useLocation } from "react-router-dom"; // For detecting the current page
import "../style/NotificationPanel.css";

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Simulating notifications dynamically (replace this with your backend/API fetch)
  useEffect(() => {
    const initialNotifications = [
      { id: 1, message: "New event: Science Fair on Nov 20th!", isNew: true },
      { id: 2, message: "Submit your assignments by Nov 18th.", isNew: false },
    ];
    setNotifications(initialNotifications);
  }, []);

  const addNewNotification = () => {
    const newNotification = {
      id: notifications.length + 1,
      message: `New notification ${notifications.length + 1}`,
      isNew: true,
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const handleNotificationClick = (id) => {
    // Navigate to the notification page (you can pass the ID as a URL param if needed)
    navigate(`/notifications`);
  };

  // Conditionally hide the panel if on the Notification page
  if (location.pathname.includes("/notifications")) {
    return null; // Hides the notification panel on the notification page
  }

  return (
    <div className="notification-box">
      <h4>Notifications</h4>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={notification.isNew ? "new" : ""}
            onClick={() => handleNotificationClick(notification.id)} // Navigate on click
          >
            {notification.message} {notification.isNew && <span>New</span>}
          </li>
        ))}
      </ul>
      {/* Add notification button (for simulation) */}
      <button onClick={addNewNotification} className="add-notification-btn">
        Add Notification
      </button>
    </div>
  );
};

export default NotificationPanel;
