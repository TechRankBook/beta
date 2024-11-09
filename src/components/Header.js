import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', link: '#' },
    { text: 'Jobs', link: 'HorizontalVerticalTabs' },
    { text: 'Tests', link: 'section1' },
    { text: 'Register', link: 'section2' },
    { text: 'Login', link: 'section2' },
  ];

  const handleScroll = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); // Close drawer after click in mobile view
  };

  return (
    <>
      <AppBar position="static" sx={{ width: '100%', backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/Assets/dean.png`}
            alt="DEAN Logo"
            sx={{
              height: { xs: 40, md: 60 }, // Adjust height for responsiveness
              width: { xs: 'auto', md: 'auto' },
              marginLeft: 1,
            }}
          />

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginRight: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => handleScroll(item.link)}
                sx={{ color: '#192661', fontSize: '16px', marginRight: 2 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#192661' }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Divider */}
      <Box sx={{ width: '100%', height: '2px', backgroundColor: 'black' }} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
        PaperProps={{
          sx: { width: '75%', backgroundColor: 'white' },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => handleScroll(item.link)}>
              <ListItemText primary={item.text} sx={{ color: '#192661', textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Content Box */}
      <Box sx={{ padding: 3, textAlign: 'center' }}>
        {/* Your content goes here */}
      </Box>
    </>
  );
}

export default Header;
