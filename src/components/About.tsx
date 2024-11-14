import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function About() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          At Hikel Custom Woodcrafts, we're passionate about creating bespoke wooden pieces that bring warmth and character to your home. With over a decade of experience, our skilled craftsmen combine traditional techniques with modern design to deliver unique, high-quality furniture and decor.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;