import React from "react";
import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Sample social media links
const socialLinks = {
  instagram: "https://www.instagram.com/rank_book.in?igsh=ZDJybXVzd25iMm1q&utm_source=qr",
  facebook: "https://www.facebook.com/profile.php?id=61564314301321&mibextid=ZbWKwL",
  twitter: "https://x.com/RankBook1?t=tC09wynX6jAnj57RrI_hZQ&s=08",
  youtube: "https://www.youtube.com/@RankBookIndia",
  whatsapp: "https://wa.me/+916363688572", // Replace with your WhatsApp number link
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
                color: "#3f51b5",
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
                  color: "#E4405F",
                  fontSize: 45,
                  borderRadius: "50%",
                  padding: 1,
                  margin: 1,
                }}
              >
                <InstagramIcon sx={{ fontSize: "inherit" }} />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#1877F2",
                  fontSize: 45,
                  borderRadius: "50%",
                  padding: 1,
                  margin: 1,
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
                  color: "#1DA1F2",
                  fontSize: 45,
                  borderRadius: "50%",
                  padding: 1,
                  margin: 1,
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
                  color: "#FF0000",
                  fontSize: 45,
                  borderRadius: "50%",
                  padding: 1,
                  margin: 1,
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
                  color: "#25D366",
                  fontSize: 45,
                  borderRadius: "50%",
                  padding: 1,
                  margin: 1,
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
                  textDecoration: "none",
                }}
              >
                SkillGrad
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                ReadyGrad
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                NeoGrad
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                HireDon
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                BossBox
              </Link>
              <Link
                href="/interviews"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
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
            <Typography variant="h6">Company</Typography>
            <Box sx={{ marginTop: 2 }}>
              <Link
                href="/about"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                About
              </Link>
              <Link
                href="/careers"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                Careers
              </Link>
              <Link
                href="/support"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                Support
              </Link>
              <Link
                href="/terms"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/feedback"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textDecoration: "none",
                }}
              >
                Feedback
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;