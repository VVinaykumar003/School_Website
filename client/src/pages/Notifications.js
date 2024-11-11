import React, { useEffect, useState } from "react";
import axios from "axios";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("/api/notifications")
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the notifications!", error);
      });
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
