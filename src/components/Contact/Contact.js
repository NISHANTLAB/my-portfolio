import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Get In Touch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Connect With Me
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    startIcon={<EmailIcon />}
                    href="mailto:your.nishantkumarsingh355@gmail.com"
                    sx={{ mb: 1 }}
                    fullWidth
                  >
                  nishantkumarsingh355@gmail.com
                  </Button>
                  <Button
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/nishant-kumar-singh-aaa000b7/"
                    target="_blank"
                    sx={{ mb: 1 }}
                    fullWidth
                  >
                    LinkedIn Profile
                  </Button>
                  <Button
                    startIcon={<GitHubIcon />}
                    href="https://github.com/NISHANTLAB"
                    target="_blank"
                    sx={{ mb: 1 }}
                    fullWidth
                  >
                    GitHub Profile
                  </Button>
                  <Button
                    startIcon={<img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="Naukri" style={{width: '24px', height: '24px'}} />}
                    href="https://www.naukri.com/mnjuser/profile"
                    target="_blank"
                    fullWidth
                  >
                    Naukri Profile
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;