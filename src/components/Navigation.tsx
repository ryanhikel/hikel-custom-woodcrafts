import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Gallery" />
        <Tab label="Contact" />
      </Tabs>
    </Box>
  );
}

export default Navigation;