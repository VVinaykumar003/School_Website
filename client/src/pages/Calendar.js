import React, { useState, useEffect } from "react";
import axios from "axios";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  return (
    <div>
      <h1>School Calendar</h1>
      <h3>Upcoming Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h4>{event.name}</h4>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
