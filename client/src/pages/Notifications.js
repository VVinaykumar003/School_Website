import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style/Notification.css'
import { useParams } from 'react-router-dom';
import NotificationPanel from "../components/NotificationPanel";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("/api/notificationPanel")
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the notifications!", error);
      });
  }, []);

  return (
    <div>
      <h1>Notifications:</h1>
      <NotificationPanel/>
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
