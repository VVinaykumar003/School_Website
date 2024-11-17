// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Pages
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Notifications from "./pages/Notifications";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./admin/Login";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";

// Importing Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotificationPanel from "./components/NotificationPanel";

// Importing Material UI Components
import { Container, Typography, CssBaseline } from "@mui/material";


function App() {
  return (
    <Router>
      <CssBaseline /> {/* Normalize CSS across browsers */}
      <Navbar />
      <Container style={{ paddingTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/aboutus/mision" element={<AboutUs/>} />
          <Route path="/aboutus/facality" element={<AboutUs/>} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements/admission" element={<Admission/>}/>
          <Route path="/achievements/courses" element={<Courses/>} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
     
      <Footer />
    </Router>
  );
}

export default App;
