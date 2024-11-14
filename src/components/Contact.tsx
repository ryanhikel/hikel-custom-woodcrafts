import React from 'react';
import { Typography, Container, Box, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
          <TextField fullWidth label="Your Name" margin="normal" required />
          <TextField fullWidth label="Your Email" margin="normal" required type="email" />
          <TextField fullWidth label="Your Message" margin="normal" required multiline rows={4} />
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;