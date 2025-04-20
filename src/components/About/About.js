import React from 'react';
import { Container, Typography, Grid, Paper, Box, Chip, LinearProgress, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
// import profileImage from '../../assets/profile.svg';
import profileImage from '../../assets/profile.jpeg';


const About = () => {
  const skills = [
    { name: 'Node.Js', level: 90 },
    { name: 'Express', level: 85 },
    { name: 'MySQL', level: 88 },
    { name: 'MongoDB', level: 85 },
    { name: 'Javascript', level: 92 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Socket.io', level: 80 },
    { name: 'cPanel', level: 75 },
    { name: 'Filezilla', level: 75 },
    { name: 'Serial Port', level: 70 },
    { name: 'Stored Procedures', level: 85 }
  ];

  const education = [
    {
      degree: 'B.Tech',
      institution: 'JNTU College of Engineering, Kakinada',
      year: '2015',
      percentage: '74.37%',
      specialization: 'Computer Science'
    },
    {
      degree: '12th',
      institution: 'Bihar School Examination Board, Patna',
      year: '2011',
      percentage: '63%',
      specialization: 'Science'
    },
    {
      degree: '10th',
      institution: 'Bihar School Examination Board, Patna',
      year: '2008',
      percentage: '71%',
      specialization: 'General'
    }
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Avatar
            src={profileImage}
            alt="Nishant Kumar Singh"
            sx={{
              width: 200,
              height: 200,
              border: '4px solid #fff',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              mb: 2
            }}
          />
        </Box>

        <Typography variant="h3" component="h2" gutterBottom align="center">
          About Me
        </Typography>

        {/* Personal Info */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Nishant Kumar Singh
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Date of Birth: 21/07/1993
          </Typography>
          <Typography variant="body1" paragraph>
            Experienced Full Stack Developer with approximately 3 years of expertise in developing server-side and client-side applications using Node.js, React.js, and MySQL. Skilled in building insurance-based and IoT projects, creating numerous stored procedures to optimize database performance. Adept at designing and maintaining single-page applications (SPAs) with a focus on performance and user experience. Known for strong problem-solving abilities and quick adaptation to new technologies.
          </Typography>
        </Paper>

        {/* Education */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
          Education
        </Typography>
        <Grid container spacing={3}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3,
                    background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(33, 203, 243, 0.1))',
                    border: '1px solid rgba(33, 150, 243, 0.2)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      borderBottom: '2px solid',
                      borderImage: 'linear-gradient(to right, #2196F3, #21CBF3) 1',
                      paddingBottom: 1
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 500,
                      my: 1
                    }}
                  >
                    {edu.institution}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Year:</span> {edu.year}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Score:</span> {edu.percentage}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Specialization:</span> {edu.specialization}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Skills */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
          Technical Skills
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    {skill.name}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 5,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'primary.main'
                      }
                    }} 
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;