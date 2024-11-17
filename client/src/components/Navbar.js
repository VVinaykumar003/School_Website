<<<<<<< HEAD
// src/components/Navbar.js

=======
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
<<<<<<< HEAD
  Menu,
  MenuItem,
=======
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2
} from "@mui/material";
import { Link } from "react-router-dom";
// import Courses from "../pages/Courses";

const Navbar = () => {
<<<<<<< HEAD
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
=======
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State for Academics Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(45deg, #007bff, #4caf50)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar>
        {/* Logo and School Name */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="School Logo"
            src="https://via.placeholder.com/40"
            sx={{ width: 40, height: 40 }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? "1.5rem" : "2rem",
              letterSpacing: "2px",
              color: "#fff",
              textDecoration: "none",
              ":hover": {
                color: "#e0e0e0",
              },
            }}
          >
            SchoolWebsite
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 1 : 2,
            ml: "auto",
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              fontWeight: 500,
              textTransform: "none",
              ":hover": {
                backgroundColor: "#003366",
                borderRadius: "15px",
              },
            }}
          >
            Home
          </Button>

<<<<<<< HEAD
          {/* About Us Dropdown */}
          <Button
            color="inherit"
            onClick={handleAboutUsMenuOpen}
            sx={{ marginRight: 2 }}
=======
          {/* Academics Dropdown */}
          <Button
            color="inherit"
            onClick={handleClick}
            sx={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              fontWeight: 500,
              textTransform: "none",
              ":hover": {
                backgroundColor: "#003366",
                borderRadius: "15px",
              },
            }}
          >
            Academics
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/curriculum">
              Curriculum
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/syllabus">
              Syllabus
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/faculty">
              Faculty
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/resources">
              Learning Resources
            </MenuItem>
          </Menu>

          <Button
            color="inherit"
            component={Link}
            to="/achievements"
            sx={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              fontWeight: 500,
              textTransform: "none",
              ":hover": {
                backgroundColor: "#003366",
                borderRadius: "15px",
              },
            }}
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2
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
            sx={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              fontWeight: 500,
              textTransform: "none",
              ":hover": {
                backgroundColor: "#003366",
                borderRadius: "15px",
              },
            }}
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
<<<<<<< HEAD
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
=======
          </Button>
        </Box>

        {/* Admin Login Button */}
        <Button
          color="inherit"
          variant="outlined"
          component={Link}
          to="/login" // Link to login page
          sx={{
            borderRadius: "20px",
            fontSize: isMobile ? "0.9rem" : "1rem",
            fontWeight: 600,
            borderColor: "#fff",
            color: "#fff",
            ":hover": {
              borderColor: "#4caf50",
              color: "#1d344a",
              backgroundColor: "transparent",
            },
          }}
        >
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2
          Admin Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
