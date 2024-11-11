import React from "react";
import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        <Grid container spacing={4}>
          {/* Column 1: School Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" style={styles.footerTitle}>
              School Name
            </Typography>
            <Typography variant="body2" color="textSecondary">
              1234 School St, City, State, 12345
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@school.com
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" style={styles.footerTitle}>
              Quick Links
            </Typography>
            <ul style={styles.linkList}>
              <li>
                <Link href="/" color="inherit" style={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/achievements" color="inherit" style={styles.link}>
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/notifications" color="inherit" style={styles.link}>
                  Notifications
                </Link>
              </li>
              <li>
                <Link href="/events" color="inherit" style={styles.link}>
                  Events
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" style={styles.footerTitle}>
              Follow Us
            </Typography>
            <div style={styles.socialIcons}>
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" style={styles.footerTitle}>
              Subscribe to Our Newsletter
            </Typography>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.newsletterInput}
            />
            <button style={styles.subscribeButton}>Subscribe</button>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <Container>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2024 School Name. All Rights Reserved.
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#212121",
    color: "white",
    padding: "40px 0",
    marginTop: "60px",
  },
  footerTitle: {
    fontWeight: "bold",
    marginBottom: "15px",
  },
  linkList: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    display: "block",
    marginBottom: "10px",
    textDecoration: "none",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    fontSize: "1.5rem",
  },
  newsletterInput: {
    padding: "10px",
    width: "80%",
    marginBottom: "10px",
    border: "none",
    borderRadius: "5px",
  },
  subscribeButton: {
    padding: "10px 20px",
    backgroundColor: "#f50057",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  bottomBar: {
    backgroundColor: "#333",
    padding: "20px 0",
  },
};

export default Footer;
