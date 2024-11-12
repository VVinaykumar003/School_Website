// src/components/Navbar.js

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Button
            color="inherit"
            component={Link}
            to="/achievements"
            sx={{ marginRight: 2 }}
          >
            Achievements
          </Button>
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
        </Box>

        {/* Button for Learn More or Sign In */}
        <Button
          color="inherit"
          variant="outlined"
          sx={{ borderRadius: "20px" }}
        >
          Admin Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
