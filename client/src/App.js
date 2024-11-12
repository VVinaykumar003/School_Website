import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Pages
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Notifications from "./pages/Notifications";
import Events from "./pages/Events";
import Curriculum from "./pages/Curriculum"; // Added for Academics
//import Syllabus from "./pages/Syllabus"; // Added for Academics
//import Faculty from "./pages/Faculty"; // Added for Academics
//import Resources from "./pages/Resources"; // Added for Academics
import Login from "./admin/Login"; // Added for Admin Login
import NotFound from "./pages/NotFound";

// Importing Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing Material UI Components
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <Router>
      <CssBaseline /> {/* Normalize CSS across browsers */}
      <Navbar />
      <Container style={{ paddingTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/events" element={<Events />} />
          {/* Academics Routes */}
          <Route path="/curriculum" element={<Curriculum />} />

          {/* Admin Login Route */}
          <Route path="/login" element={<Login />} />
          {/* Fallback for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
