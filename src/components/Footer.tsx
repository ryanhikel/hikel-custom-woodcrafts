import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
      <Container>
        <Typography variant="body1" align="center">
          © 2024 Hikel Custom Woodcrafts. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Facebook</Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Instagram</Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Pinterest</Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;