import React, { useState } from 'react';
import {
  ThemeProvider,
  Container,
  Box,
  Button,
  Typography,
  FormControl,
  Paper,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import theme from './theme.jsx'; // Assuming your theme file is correctly configured
import Submit from './Submit.jsx';

const ApplicationForm = () => {
  const [jobName, setJobName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobOptions = [
    'Software Engineer',
    'Data Scientist',
    'Product Manager',
    'UX Designer',
    'DevOps Engineer',
    'Cybersecurity Analyst',
    'AI/ML Engineer',
    'Full-Stack Developer',
    'Technical Writer',
    'Cloud Architect',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobName) {
      alert("Please select a Job Name");
      return;
    }

    console.log("Job name: ", jobName);
    setIsSubmitted(true)

  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          mt={5}
          p={4}
          component={Paper}
          elevation={3}
          sx={{
            borderRadius: 2,
            backgroundColor: "#fff",
          }}>
          <Typography variant="h5" align="center" gutterBottom color="primary">
            Application Form
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Job Selection Dropdown */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="job-name-label">Select Job</InputLabel>
              <Select
                labelId="job-name-label"
                value={jobName}
                onChange={(e) => setJobName(e.target.value)}
                disabled={isSubmitted}
                label="Select Job"
              >
                {jobOptions.map((job, index) => (
                  <MenuItem key={index} value={job}>
                    {job}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Submit Button */}
            <Submit isSubmitted={isSubmitted} />
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ApplicationForm;
