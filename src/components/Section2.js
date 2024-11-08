import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

// Sample data for the 3 cards
const cardData = [
  {
    title: 'Candidate',
    description: 'Login to apply for jobs and attend interviews.',
    img: process.env.PUBLIC_URL + '/Assets/students.png', // Replace with actual image paths
  },
  {
    title: 'Corporate Employee',
    description: 'Login to access employee tools and updates.',
    img: process.env.PUBLIC_URL + '/Assets/corporate.png', // Replace with actual image paths
  },
  {
    title: 'College',
    description: 'Login to access campus placement details and more.',
    img: process.env.PUBLIC_URL + '/Assets/college.png', // Replace with actual image paths
  },
];

function Section2() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Choose Any One
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 5,
                border: '1px black', // Border color set to black
                boxShadow: 6,
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '95%',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '15%', // Makes the image rounded
                  margin: '16px auto', // Adds margin around the image
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2">{card.description}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: '#9C27B0', // Purple color for the button
                    '&:hover': {
                      backgroundColor: '#7B1FA2', // Darker purple on hover
                    },
                  }}
                >
                  Login
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Section2;
