import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h4" component="h1">
            Hikel Custom Woodcrafts
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 2 }}>
            Handcrafted excellence since 2010
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;