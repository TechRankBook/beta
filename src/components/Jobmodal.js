// Jobmodal.js
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Box, Typography, Button } from '@mui/material';

// Expanded job listings data
const jobData = [
  {
    id: 1,
    companyName: "TechCorp",
    jobRole: "Frontend Developer",
    jobType: "Full Time",
    experience: "2-3 years",
    salary: "₹6,00,000 per annum",
    location: "Bangalore, India",
    lastDate: "31st December 2024",
    applyLink: "https://apply-link.com/job1"
  },
  {
    id: 2,
    companyName: "Web Solutions",
    jobRole: "Backend Developer",
    jobType: "Full Time",
    experience: "3-5 years",
    salary: "₹8,00,000 per annum",
    location: "Mumbai, India",
    lastDate: "30th November 2024",
    applyLink: "https://apply-link.com/job2"
  },
  {
    id: 3,
    companyName: "App Innovators",
    jobRole: "Mobile Developer",
    jobType: "Part Time",
    experience: "1-2 years",
    salary: "₹4,00,000 per annum",
    location: "Delhi, India",
    lastDate: "15th December 2024",
    applyLink: "https://apply-link.com/job3"
  },
  {
    id: 4,
    companyName: "CloudNet",
    jobRole: "DevOps Engineer",
    jobType: "Full Time",
    experience: "3-4 years",
    salary: "₹10,00,000 per annum",
    location: "Hyderabad, India",
    lastDate: "20th December 2024",
    applyLink: "https://apply-link.com/job4"
  },
  {
    id: 5,
    companyName: "DataDrive",
    jobRole: "Data Scientist",
    jobType: "Full Time",
    experience: "2-5 years",
    salary: "₹12,00,000 per annum",
    location: "Pune, India",
    lastDate: "25th December 2024",
    applyLink: "https://apply-link.com/job5"
  },
  {
    id: 6,
    companyName: "CyberTech",
    jobRole: "Cybersecurity Analyst",
    jobType: "Full Time",
    experience: "2-3 years",
    salary: "₹9,00,000 per annum",
    location: "Chennai, India",
    lastDate: "5th January 2025",
    applyLink: "https://apply-link.com/job6"
  },
  {
    id: 7,
    companyName: "Ecomify",
    jobRole: "E-commerce Specialist",
    jobType: "Part Time",
    experience: "1-3 years",
    salary: "₹5,00,000 per annum",
    location: "Remote",
    lastDate: "31st December 2024",
    applyLink: "https://apply-link.com/job7"
  },
  {
    id: 8,
    companyName: "DesignIt",
    jobRole: "UI/UX Designer",
    jobType: "Full Time",
    experience: "2-4 years",
    salary: "₹7,00,000 per annum",
    location: "Bangalore, India",
    lastDate: "10th January 2025",
    applyLink: "https://apply-link.com/job8"
  },
  {
    id: 9,
    companyName: "TechSolve",
    jobRole: "Solution Architect",
    jobType: "Full Time",
    experience: "5+ years",
    salary: "₹15,00,000 per annum",
    location: "Noida, India",
    lastDate: "31st December 2024",
    applyLink: "https://apply-link.com/job9"
  },
  {
    id: 10,
    companyName: "AI Innovate",
    jobRole: "Machine Learning Engineer",
    jobType: "Full Time",
    experience: "3-5 years",
    salary: "₹14,00,000 per annum",
    location: "Mumbai, India",
    lastDate: "20th January 2025",
    applyLink: "https://apply-link.com/job10"
  }
];

function Jobmodal({ open, handleClose, jobId }) {
  // Find the job data based on the jobId passed
  const job = jobData.find(job => job.id === jobId);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {job ? (
          <>
            <Typography variant="h6" gutterBottom>
              {job.companyName}
            </Typography>
            <Typography>Job Role: {job.jobRole}</Typography>
            <Typography>Job Type: {job.jobType}</Typography>
            <Typography>Experience: {job.experience}</Typography>
            <Typography>Salary: {job.salary}</Typography>
            <Typography>Location: {job.location}</Typography>
            <Typography>Last Date to Apply: {job.lastDate}</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              href={job.applyLink} // Redirect to application link
              target="_blank"
            >
              Apply Now
            </Button>
          </>
        ) : (
          <Typography variant="body2">Job details not found</Typography>
        )}
      </Box>
    </Modal>
  );
}

Jobmodal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  jobId: PropTypes.number.isRequired,
};

export default Jobmodal;
