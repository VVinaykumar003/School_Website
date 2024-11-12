import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../components/CarouselComponent"; // Ensure the path is correct
import { Box, Typography } from "@mui/material";

const mockNotifications = [
  "Result of Class X announced!",
  "New Time Table for Exams Released.",
  "Holiday Declared on Friday due to weather conditions.",
  "Annual Sports Day Scheduled for next week!",
];

const Home = () => {
  const [currentNotification, setCurrentNotification] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Mock to simulate fetching recent notification
    const interval = setInterval(() => {
      setCurrentNotification(
        mockNotifications[Math.floor(Math.random() * mockNotifications.length)]
      );
    }, 3000); // Change notification every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Main Content */}
      <div style={{ flex: 3, paddingRight: "20px" }}>
        <CarouselComponent />
        <h1>Welcome to Our School</h1>
        <p>Explore our achievements, events, and more!</p>
      </div>

      {/* Notification Box */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "16px",
          cursor: "pointer",
          animation: "flash 1.5s infinite", // Flashing effect
        }}
        onClick={() => navigate("/notifications")}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#007bff",
            textAlign: "center",
          }}
        >
          Recent Notification
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
            textAlign: "center",
            color: "#555",
            fontStyle: "italic",
          }}
        >
          {currentNotification}
        </Typography>
      </Box>

      {/* Flashing animation */}
      <style>
        {`
          @keyframes flash {
            0% { background-color: #f9f9f9; }
            50% { background-color: #d1e7fd; }
            100% { background-color: #f9f9f9; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
