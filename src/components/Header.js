import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Home', 'Jobs', 'Tests', 'Contact Us', 'Register', 'Login'];

  return (
    <>
      {/* Full width AppBar with white background */}
      <AppBar position="static" sx={{ width: '100%', backgroundColor: 'white' }}>
        <Toolbar>
          {/* Larger "DEAN" Text */}
          <Typography variant="h4" sx={{ flexGrow: 1, color: '#192661' }}>
            DEAN
          </Typography>

          {/* Desktop Menu - hidden on small screens */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((text) => (
              <Button key={text} sx={{ color: '#192661', fontSize: '18px', marginRight: 5 }}>
                {text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon - visible only on small screens */}
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu" 
            sx={{ display: { xs: 'block', md: 'none' }, color: '#192661' }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Black line at the bottom */}
      <Box sx={{ width: '100%', height: '2px', backgroundColor: 'black' }} />

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <ListItemText primary={text} sx={{ color: '#192661', textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content area */}
      <Box sx={{ padding: 3, textAlign: 'center' }}>
        {/* Your content goes here */}
      </Box>
    </>
  );
}

export default Header;
