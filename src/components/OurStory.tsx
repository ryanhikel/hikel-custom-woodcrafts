import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';

const OurStory: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Hikel Custom Woodcrafts began in 2010 as a passion project in our family garage. What started as a hobby quickly grew into a thriving business as word spread about our unique, handcrafted pieces.
          </Typography>
          <Typography variant="body1" paragraph>
            Our founder, John Hikel, learned the art of woodworking from his grandfather, a master carpenter who immigrated from Lebanon. John combined these traditional techniques with modern design sensibilities to create pieces that are both timeless and contemporary.
          </Typography>
          <Typography variant="body1">
            Today, we're proud to have a team of skilled artisans who share our passion for quality craftsmanship. Each piece we create is a labor of love, designed to bring warmth and character to your home for generations to come.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default OurStory;