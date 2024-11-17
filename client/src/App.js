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
import { Container, CssBaseline } from "@mui/material";


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
<<<<<<< HEAD
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
=======
          {/* Academics Routes */}
          <Route path="/curriculum" element={<Curriculum />} />

          {/* Admin Login Route */}
          <Route path="/login" element={<Login />} />
          {/* Fallback for undefined routes */}
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
     
      <Footer />
    </Router>
  );
}

export default App;
