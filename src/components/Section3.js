import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

// Sample data for the 3 cards in Section 3
const cardData = [
  {
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: process.env.PUBLIC_URL + '/Assets/student.png', // Replace with actual image paths
  },
  {
    name: 'Jane Smith',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: process.env.PUBLIC_URL + '/Assets/HR.png', // Replace with actual image paths
  },
  {
    name: 'Mike Johnson',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: process.env.PUBLIC_URL + '/Assets/principal.png',// Replace with actual image paths
  },
];

function Section3() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        What Our Users Tell About Us
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 0, // No borders or shadow
                padding: 8, // Padding for the card content
                textAlign: 'center', // Center align text
              }}
            >
              <img
                src={card.img}
                alt={card.name}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '25px', // Rounded corners for the image
    
                  marginBottom: '16px', // Space between image and description
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{card.name}</Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Section3;
