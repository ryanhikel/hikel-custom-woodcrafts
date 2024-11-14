import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Home() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          Welcome to Hikel Custom Woodcrafts
        </Typography>
        <Typography variant="h5" component="p">
          Crafting beautiful, custom wooden pieces for your home
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;