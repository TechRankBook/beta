import React from "react";
import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Sample social media links
const socialLinks = {
  instagram: "https://www.instagram.com",
  facebook: "https://www.facebook.com",
  twitter: "https://twitter.com",
  youtube: "https://www.youtube.com",
  whatsapp: "https://wa.me/yourphonenumber", // Replace with your WhatsApp number link
};

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: 3, marginTop: 2 }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={`${process.env.PUBLIC_URL}/Assets/dean.png`}
              alt="Dean"
              onError={(e) => (e.target.src = `${process.env.PUBLIC_URL}/meta.png`)} // Fallback image path
              style={{ width: "150px", marginTop: -50 }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: -5,
                color: "#3f51b5", // Optional: Use a material color that matches the blue of Facebook or Instagram icons
              }}
            >
              Connect Us
            </Typography>
            <Box sx={{ marginTop: -1 }}>
              {/* Social Media Icons */}
              <IconButton
                component="a"
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#E4405F", // Instagram Pink color
                  fontSize: 45, // Set icon size to 45
                  borderRadius: "50%", // Round the button
                  padding: 1, // Set padding to 1 for larger clickable area
                  margin: 1, // Space between buttons
                }}
              >
                <InstagramIcon sx={{ fontSize: "inherit" }} /> {/* Inherit font size from IconButton */}
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#1877F2", // Facebook Blue color
                  fontSize: 45, // Set icon size to 45
                  borderRadius: "50%", // Round the button
                  padding: 1, // Set padding to 1
                  margin: 1, // Space between buttons
                }}
              >
                <FacebookIcon sx={{ fontSize: "inherit" }} />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#1DA1F2", // Twitter Blue color
                  fontSize: 45, // Set icon size to 45
                  borderRadius: "50%", // Round the button
                  padding: 1, // Set padding to 1
                  margin: 1, // Space between buttons
                }}
              >
                <TwitterIcon sx={{ fontSize: "inherit" }} />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#FF0000", // YouTube Red color
                  fontSize: 45, // Set icon size to 45
                  borderRadius: "50%", // Round the button
                  padding: 1, // Set padding to 1
                  margin: 1, // Space between buttons
                }}
              >
                <YouTubeIcon sx={{ fontSize: "inherit" }} />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#25D366", // WhatsApp Green color
                  fontSize: 45, // Set icon size to 45
                  borderRadius: "50%", // Round the button
                  padding: 1, // Set padding to 1
                  margin: 1, // Space between buttons
                }}
              >
                <WhatsAppIcon sx={{ fontSize: "inherit" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">Services</Typography>
            <Box sx={{ marginTop: 2 }}>
              <Link
                href="/jobs"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none", // Remove underline from links
                }}
              >
                SkillGrad
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none", // Remove underline from links
                }}
              >
                ReadyGrad
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none", // Remove underline from links
                }}
              >
                NeoGrad
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none", // Remove underline from links
                }}
              >
                HireDon
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none", // Remove underline from links
                }}
              >
                BossBox
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none", // Remove underline from links
                }}
              >
                WiseDean
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">About Us</Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: 2, textAlign: "justify" }}
            >
              We are dedicated to empowering individuals and businesses through
              innovative solutions designed to foster growth and development. Our
              platform provides access to a wide range of services, from career
              guidance to skill enhancement, ensuring everyone can reach their
              full potential. With a commitment to quality and excellence, we
              strive to make a positive impact in our community and beyond. Join
              us on this journey toward a brighter future.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
