import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile.svg';

const Hero = () => {
  const skills = [
    { name: 'Node.js', level: 'Advanced' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'MySQL', level: 'Advanced' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Express.js', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'AWS', level: 'Intermediate' }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar
                  src={profileImage}
                  alt="Nishant Kumar Singh"
                  sx={{ width: 120, height: 120, mr: 3 }}
                />
              </Box>
              <Typography variant="h2" component="h1" color="white" gutterBottom>
                Nishant Kumar Singh
              </Typography>
              <Typography variant="h4" color="white" gutterBottom>
                Senior MERN Stack Developer at Cognisun Infotech
              </Typography>
              <Typography variant="h6" color="white" paragraph>
                Passionate full-stack developer with 3+ years of experience in building scalable web applications using MERN stack. Expertise in developing robust backend services, RESTful APIs, and modern responsive front-end interfaces.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item xs={6} key={skill.name}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      <Typography variant="h6">{skill.name}</Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {skill.level}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;