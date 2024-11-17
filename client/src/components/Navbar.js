// src/components/Navbar.js

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
// import Courses from "../pages/Courses";

const Navbar = () => {
  const [aboutUsAnchorEl, setAboutUsAnchorEl] = useState(null);
  const [academicsAnchorEl, setAcademicsAnchorEl] = useState(null);

  const handleAboutUsMenuOpen = (event) => {
    setAboutUsAnchorEl(event.currentTarget);
  };

  const handleAboutUsMenuClose = () => {
    setAboutUsAnchorEl(null);
  };

  const handleAcademicsMenuOpen = (event) => {
    setAcademicsAnchorEl(event.currentTarget);
  };

  const handleAcademicsMenuClose = () => {
    setAcademicsAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SchoolWebsite
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex" }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ marginRight: 2 }}
          >
            Home
          </Button>

          {/* About Us Dropdown */}
          <Button
            color="inherit"
            onClick={handleAboutUsMenuOpen}
            sx={{ marginRight: 2 }}
          >
            About Us
          </Button>
          <Menu
            anchorEl={aboutUsAnchorEl}
            open={Boolean(aboutUsAnchorEl)}
            onClose={handleAboutUsMenuClose}
          >
            <MenuItem component={Link} to="/mission" onClick={handleAboutUsMenuClose}>
              Mission
            </MenuItem>
            <MenuItem component={Link} to="/members" onClick={handleAboutUsMenuClose}>
              Member Of Facility
            </MenuItem>
            <MenuItem component={Link} to="/aboutus" onClick={handleAboutUsMenuClose}>
              About Us
            </MenuItem>
          </Menu>

          {/* Academics Dropdown */}
          <Button
            color="inherit"
            onClick={handleAcademicsMenuOpen}
            sx={{ marginRight: 2 }}
          >
            Academics
          </Button>
          <Menu
            anchorEl={academicsAnchorEl}
            open={Boolean(academicsAnchorEl)}
            onClose={handleAcademicsMenuClose}
          >
            <MenuItem component={Link} to="/achivements/admission" onClick={handleAcademicsMenuClose}>
              Admission
            </MenuItem>
            <MenuItem component= {Link} to="/achivements/courses" onClick={handleAcademicsMenuClose}>
              Courses
            </MenuItem>
          </Menu>

          <Button
            color="inherit"
            component={Link}
            to="/notifications"
            sx={{ marginRight: 2 }}
          >
            Notifications
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/events"
            sx={{ marginRight: 2 }}
          >
            Events
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ marginRight: 2 }}
          >
            Contact
          </Button>
        </Box>

       {/* Admin Login Button */}
       <Button color="inherit" variant="outlined" component={Link} to="/login" sx={{ borderRadius: "20px" }}>
          Admin Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
