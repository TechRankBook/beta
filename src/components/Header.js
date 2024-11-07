import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DEAN
        </Typography>
        {['Home', 'Jobs', 'Tests', 'Contact Us', 'Register', 'Login'].map((text) => (
          <Button key={text} color="inherit">
            {text}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
