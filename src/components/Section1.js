import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

// Sample data with 12 companies for two rows with 6 buttons each
const companies = [
  { name: 'Nokia', image: process.env.PUBLIC_URL + '/Assets/nokia.png', date: '17 - Aug - 2024', jobType: 'Full-Time' },
  { name: 'Infosys', image: process.env.PUBLIC_URL + '/Assets/infosys.png', date: '17 - Aug - 2024', jobType: 'Internship' },
  { name: 'Wipro', image: process.env.PUBLIC_URL + '/Assets/wipro.png', date: '17 - Aug - 2024', jobType: 'Part-Time' },
  { name: 'Google', image: process.env.PUBLIC_URL + '/Assets/google.png', date: '17 - Aug - 2024', jobType: 'Full-Time' },
  { name: 'Microsoft', image: process.env.PUBLIC_URL + '/Assets/tata.png', date: '18 - Aug - 2024', jobType: 'Full-Time' },
  { name: 'Amazon', image: process.env.PUBLIC_URL + '/Assets/amazon.png', date: '19 - Aug - 2024', jobType: 'Part-Time' },
  { name: 'Facebook', image: process.env.PUBLIC_URL + '/Assets/meta.png', date: '20 - Aug - 2024', jobType: 'Internship' },
  { name: 'Apple', image: process.env.PUBLIC_URL + '/Assets/apple.png', date: '21 - Aug - 2024', jobType: 'Full-Time' },
  { name: 'Samsung', image: process.env.PUBLIC_URL + '/Assets/ssamsung.png', date: '22 - Aug - 2024', jobType: 'Full-Time' },
  { name: 'IBM', image: process.env.PUBLIC_URL + '/Assets/sbi.png', date: '23 - Aug - 2024', jobType: 'Internship' },
  { name: 'Dell', image: process.env.PUBLIC_URL + '/Assets/tata.png', date: '24 - Aug - 2024', jobType: 'Part-Time' },
  { name: 'Tesla', image: process.env.PUBLIC_URL + '/Assets/meta.png', date: '25 - Aug - 2024', jobType: 'Full-Time' },
];

function Section1() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#8A2BE2', fontWeight: 'bold' }}>
        UPCOMING INTERVIEWS
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {companies.map((company, index) => (
          <Grid item xs={6} sm={4} md={2} lg={2} key={company.name}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '10px',
                padding: '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                borderColor: '#000',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: '#8A2BE2',
                  backgroundColor: '#f7f7f7',
                },
              }}
            >
              {/* Centered Company Image */}
              <img
                src={company.image}
                alt={`${company.name} logo`}
                style={{
                  width: '90px', // Adjusted image size
                  height: '70px',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  marginBottom: '-10px',
                  marginTop: '-10px',
                }}
              />

              {/* Date only */}
              <Grid container alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                <Grid item>
                  <Typography variant="caption" sx={{ color: '#555' }}>
                    Date: {company.date}
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Section1;
