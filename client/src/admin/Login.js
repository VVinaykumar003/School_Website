<<<<<<< HEAD
import React from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const Login = () => {
  return (
    <div style={styles.container}>
      <Paper elevation={3} style={styles.box}>
        <Typography variant="h4" style={styles.title}>
          Welcome Back
        </Typography>
        <Typography variant="body1" style={styles.subtitle}>
          Please sign in to your account
        </Typography>

        {/* Username Field */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          style={styles.textField}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          style={styles.textField}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={styles.button}
        >
          Login
        </Button>

        {/* Signup Link */}
        <Typography variant="body2" style={styles.footerText}>
          Don’t have an account?{" "}
          <a href="/signup" style={styles.link}>
            Sign up
          </a>
        </Typography>
      </Paper>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  box: {
    padding: "40px 40px",
    maxWidth: "500px",
    height:"600px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    marginBottom: "8px",
    fontWeight: 600,
  },
  subtitle: {
    marginBottom: "24px",
    color: "#666",
  },
  textField: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  button: {
    marginTop: "24px",
    padding: "12px 0",
    fontSize: "16px",
    fontWeight: 500,
  },
  footerText: {
    marginTop: "16px",
    color: "#666",
  },
  link: {
    color: "#1976d2",
    textDecoration: "none",
  },
};

=======
import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (response.data.success) {
        // Save token or admin data to local storage or context
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin/dashboard"); // Navigate to the admin dashboard
      } else {
        setError(response.data.message || "Invalid login credentials");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Server error. Please try again later."
      );
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Admin Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Admin ID"
            type="admin ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#007bff",
              ":hover": { backgroundColor: "#0056b3" },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2
export default Login;
