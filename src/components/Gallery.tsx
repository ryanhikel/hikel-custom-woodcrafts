import React from 'react';
import { Typography, Container, Box, Grid, Card, CardMedia } from '@mui/material';

function Gallery() {
  // Replace with actual image URLs
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom>
          Our Work
        </Typography>
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={`Gallery item ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Gallery;