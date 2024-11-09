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
    <Box sx={{ p: { xs: 2, md: 6 }, textAlign: 'center', mb: 3 }}> {/* Reduced padding and adjusted bottom margin */}
      <Typography variant="h4" gutterBottom>
        What Our Users Tell About Us
      </Typography>
      <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center"> {/* Increased spacing for better separation on smaller screens */}
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={8} md={4} key={index}> {/* Adjusted sizing to allow more space for each card on smaller screens */}
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 4, // Added soft shadow for modern look
                padding: 2,
                textAlign: 'center',
                borderRadius: '16px', // Rounded corners for the card
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' }, // Hover effect for modern feel
              }}
            >
              <img
                src={card.img}
                alt={card.name}
                style={{
                  width: '100%',
                  height: 'auto', // Adjusted to maintain full image aspect ratio
                  objectFit: 'contain', // Ensures full image is shown without cropping
                  borderRadius: '16px 16px 0 0', // Rounded corners only at the top
                  marginBottom: '16px',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>{card.name}</Typography>
                <Typography variant="body2" color="text.secondary">{card.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Section3;