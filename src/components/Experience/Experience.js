import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

const Experience = () => {
  const experiences = [
    {
      company: 'Cognisun Infotech Pvt Ltd',
      location: 'Ahmedabad, Gujarat',
      position: 'Software Developer',
      duration: 'MAR 2022 - Present',
      achievements: [
        'Directed Node.js backend development, resulting in 35% performance improvement',
        'Proficiently wrote complex SQL queries and stored procedures',
        'Managed auto-notifications using Node.js cron jobs',
        'Led to 25% improvement in overall performance through innovative solutions'
      ]
    },
    {
      company: 'Evolution - Web (Ireland)',
      position: 'Project: Dynamic ERP Solution',
      duration: 'March 2022- Present',
      achievements: [
        'Real-Time Premium Calculation implementation',
        'Automated Document Handling system development',
        'Comprehensive Subagent Statements generation',
        'Service Center Module for commission distribution'
      ]
    },
    {
      company: 'Titmus Vision Screener',
      duration: 'Sept 2022- June 2023',
      achievements: [
        'Developed IOT-based vision screening system',
        'Implemented automated test result storage and retrieval',
        'Achieved 40% increase in user satisfaction',
        'Created comprehensive eye disorder testing solution'
      ]
    }
  ];

  // const handleDownloadResume = () => {
  //   // TODO: Implement resume download functionality
  //   console.log('Downloading resume...');
  // };
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/Nishant_Resume.pdf');
      if (!response.ok) {
        throw new Error('Resume file not found');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Nishant_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Sorry, there was an error downloading the resume. Please try again later.');
    }
  };
  

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Professional Experience
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadResume}
              sx={{ mt: 2 }}
            >
              Download Resume
            </Button>
          </Box>

          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom color="primary">
                      {exp.company}
                    </Typography>
                    {exp.location && (
                      <Typography variant="subtitle1" color="text.secondary">
                        {exp.location}
                      </Typography>
                    )}
                    {exp.position && (
                      <Typography variant="h6">{exp.position}</Typography>
                    )}
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {exp.duration}
                    </Typography>
                    <Box component="ul" sx={{ mt: 2 }}>
                      {exp.achievements.map((achievement, i) => (
                        <Typography
                          component="li"
                          key={i}
                          sx={{ mb: 1 }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;