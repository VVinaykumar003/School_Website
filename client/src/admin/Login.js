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

export default Login;
