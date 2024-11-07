import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Sample FAQ data
const faqData = [
  {
    question: 'What is the interview process?',
    explanation: 'The interview process typically includes a written test, followed by a technical interview and HR interview.',
  },
  {
    question: 'How do I apply for a job?',
    explanation: 'You can apply through our website by registering and submitting your resume.',
  },
  {
    question: 'What should I prepare for an interview?',
    explanation: 'Prepare for technical questions, problem-solving, and behavioral interview questions.',
  },
];

function Section4() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        FAQ's
      </Typography>
      <Grid container spacing={3}>
        {faqData.map((faq, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
              <Typography variant="h6" gutterBottom>
                {faq.question}
              </Typography>
              <Typography variant="body2">{faq.explanation}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Section4;
