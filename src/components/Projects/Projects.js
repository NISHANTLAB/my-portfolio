import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Evolution - Insurance Management System',
      description: 'A comprehensive ERP solution for policy, client, and claims management for Yacht and boats. Features include real-time premium calculation, automated document handling, comprehensive subagent statements, and service center module for commission distribution.',
      duration: 'Jun 2023 to Feb 2024',
      company: 'Cognisun Infotech pvt ltd',
      image: 'https://source.unsplash.com/random/800x600/?yacht',
      tech: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'Material-UI'],
      demo: 'https://yachtsman.ie/'
    },
    {
      title: 'Titmus Vision Screener',
      description: 'An IOT-based vision screening system that tests for multiple eye disorders in under 8 minutes. Implemented automated test result storage and retrieval, with pass/fail determination based on predetermined parameters. The system achieved a 40% increase in user satisfaction.',
      duration: 'Sep 2022 to Jun 2023',
      company: 'Optisurgicare',
      image: 'https://source.unsplash.com/random/800x600/?eye-test',
      tech: ['React.js', 'Node.js', 'IoT Integration', 'WebSocket', 'REST APIs'],
      demo: '#'
    },
    {
      title: 'Office Management System',
      description: 'A robust system with role-based access control for managing back-office administration, employee information, payroll, and project management. Includes features for task management, time-sheet submissions, and performance evaluations.',
      duration: 'Mar 2022 to Sep 2022',
      company: 'Cognisun Infotech pvt ltd',
      image: 'https://source.unsplash.com/random/800x600/?office',
      tech: ['MERN Stack', 'Redux', 'Material-UI', 'JWT Authentication'],
      demo: '#'
    },
    {
      title: 'Business Networking & Promotion App',
      description: 'A Flutter-based business promotion app for Rotary members with features like Directory, Meetings, and Announcements. Implemented face-based attendance tracking, Google Maps integration, and automated notifications, resulting in 40% increase in user satisfaction.',
      duration: 'Feb 2022 to Aug 2022',
      company: 'Freelance Project',
      image: 'https://source.unsplash.com/random/800x600/?networking',
      tech: ['Flutter', 'Node.js', 'Google Maps API', 'Face Recognition', 'Push Notifications'],
      demo: '#'
    },
    {
      title: 'E-commerce Website',
      description: 'Contributed to the development of server-side components and API implementation using Node.js and Express.js. Worked on frontend development with React.js and participated in code reviews to improve code quality.',
      duration: 'Aug 2021 to Feb 2022',
      company: 'Webthot MediaTech',
      image: 'https://source.unsplash.com/random/800x600/?ecommerce',
      tech: ['Node.js', 'React.js', 'Express.js', 'REST APIs'],
      demo: '#'
    }
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(0,0,0,0.1)'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {project.company} | {project.duration}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tech.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(33, 150, 243, 0.1)',
                          color: 'primary.main',
                          '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.2)' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', p: 2, pt: 0 }}>
                  {project.demo !== '#' && (
                    <Button 
                      size="small" 
                      startIcon={<LaunchIcon />} 
                      href={project.demo} 
                      target="_blank"
                      variant="contained"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': { backgroundColor: 'primary.dark' }
                      }}
                    >
                      View Project
                    </Button>
                  )}
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;