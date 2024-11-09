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
      <AppBar position="static" sx={{ width: '100%', backgroundColor: 'white' }}>
        <Toolbar>
          <Box component="img" src={`${process.env.PUBLIC_URL}/Assets/dean.png`} alt="DEAN Logo" sx={{ height: 100, marginRight: 95 ,marginLeft: -1}} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => handleScroll(item.link)}
                sx={{ color: '#192661', fontSize: '18px', marginRight: 5 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

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

      <Box sx={{ width: '100%', height: '2px', backgroundColor: 'black' }} />

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => handleScroll(item.link)}>
              <ListItemText primary={item.text} sx={{ color: '#192661', textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ padding: 3, textAlign: 'center' }}>
        {/* Your content goes here */}
      </Box>
    </>
  );
}

export default Header;
