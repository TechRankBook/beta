import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

// Sample data with company names, logos, and interview dates
const companies = [
  { name: 'Nokia', logo: '/path/to/nokia-logo.png', date: 'Nov 15' },
  { name: 'Infosys', logo: '/path/to/infosys-logo.png', date: 'Nov 20' },
  { name: 'Wipro', logo: '/path/to/wipro-logo.png', date: 'Nov 25' },
  { name: 'Google', logo: '/path/to/google-logo.png', date: 'Dec 1' },
  { name: 'SBI', logo: '/path/to/sbi-logo.png', date: 'Dec 5' },
  { name: 'Nestle', logo: '/path/to/nestle-logo.png', date: 'Dec 10' },
  { name: 'Meta', logo: '/path/to/meta-logo.png', date: 'Dec 15' },
  { name: 'Amazon', logo: '/path/to/amazon-logo.png', date: 'Dec 20' },
  { name: 'Apple', logo: '/path/to/apple-logo.png', date: 'Dec 25' },
  { name: 'Tata', logo: '/path/to/tata-logo.png', date: 'Jan 1' },
  { name: 'Samsung', logo: '/path/to/samsung-logo.png', date: 'Jan 5' },
];

function Section1() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Upcoming Interviews
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {companies.map((company, index) => (
          <Grid item xs={6} sm={4} md={2} key={company.name}>
            <Button
              variant="outlined" // Using outlined button for a neutral style
              sx={{
                borderRadius: '20px',
                padding: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                borderColor: 'black', // Custom border color
                '&:hover': {
                  borderColor: '#357ABD', // Darker border on hover
                  backgroundColor: '#f0f0f0', // Light grey background on hover
                },
              }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                style={{ width: '30px', height: '30px', marginBottom: '8px' }}
              />
              {/* <Typography variant="body2" color="inherit">
                {company.name}
              </Typography> */}
              <Typography variant="caption" color="black">
                {company.date}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Section1;
