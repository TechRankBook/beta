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
 
  {
    question: 'Do you offer remote work opportunities?',
    explanation: 'Yes, we offer remote work opportunities for certain positions.',
  },
  {
    question: 'What benefits do you offer?',
    explanation: 'We offer health insurance, paid time off, and various other employee benefits.',
  },
  {
    question: 'Can I apply for multiple positions?',
    explanation: 'Yes, you can apply for multiple positions that match your qualifications.',
  },
];

function Section4() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        FAQ's
      </Typography>
      <Box sx={{ maxHeight: 100, overflowY: 'auto', p: 1 }}> {/* Adjusted height for smaller scrollbar */}
        <Grid container spacing={3}>
          {faqData.map((faq, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjusted Grid size for better distribution */}
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
    </Box>
  );
}

export default Section4;
