import React from 'react';
import { Box, Grid, Typography, IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Sample social media links
const socialLinks = {
  instagram: 'https://www.instagram.com',
  facebook: 'https://www.facebook.com',
  twitter: 'https://twitter.com',
  youtube: 'https://www.youtube.com',
  whatsapp: 'https://wa.me/yourphonenumber', // Replace with your WhatsApp number link
};

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 3 }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <img src="/path/to/dean-logo.png" alt="Dean Logo" style={{ width: '150px' }} />
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Connect Us
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <IconButton
                component="a"
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6">Services</Typography>
            <Box sx={{ marginTop: 2 }}>
              <Link href="/jobs" sx={{ display: 'block', marginBottom: 1 }}>
                Job
              </Link>
              <Link href="/interviews" sx={{ display: 'block' }}>
                Interview
              </Link>
              <Link href="/interviews" sx={{ display: 'block' }}>
                Interview
              </Link><Link href="/vishu" sx={{ display: 'block' }}>
                vishu
              </Link>
              <Link href="/nisarga" sx={{ display: 'block' }}>
               nisarga
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6">Menu</Typography>
            <Box sx={{ marginTop: 2 }}>
              <Link href="/home" sx={{ display: 'block', marginBottom: 1 }}>
                Home
              </Link>
              <Link href="/jobs" sx={{ display: 'block', marginBottom: 1 }}>
                Job
              </Link>
              <Link href="/tests" sx={{ display: 'block', marginBottom: 1 }}>
                Tests
              </Link>
              <Link href="/contact-us" sx={{ display: 'block', marginBottom: 1 }}>
                Contact Us
              </Link>
              <Link href="/register" sx={{ display: 'block', marginBottom: 1 }}>
                Register
              </Link>
              <Link href="/login" sx={{ display: 'block' }}>
                Login
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
