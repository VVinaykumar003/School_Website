// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Pages
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Notifications from "./pages/Notifications";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

// Importing Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
