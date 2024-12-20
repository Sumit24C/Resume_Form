import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import theme from "./theme";
import Submit from "./Submit";

const Resume = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contacts: [""],
    skills: [""],
    projects: [{ title: "", description: "" }],
    workExperience: [{ company: "", position: "" }],
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleArrayChange = (section, index, key, value) => {
    const updatedArray = formData[section].map((item, i) =>
      i === index ? (key ? { ...item, [key]: value } : value) : item
    );
    setFormData({ ...formData, [section]: updatedArray });
  };

  const addNewField = (section, defaultValue) => {
    setFormData({ ...formData, [section]: [...formData[section], defaultValue] });
  };

  const removeField = (section, index) => {
    const updatedArray = formData[section].filter((_, i) => i !== index);
    setFormData({ ...formData, [section]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
    setIsSubmitted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Resume Form
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Box mb={2}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                color="primary"
              />
            </Box>

            {/* Email Field */}
            <Box mb={2}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                color="primary"
              />
            </Box>

            {/* Contacts */}
            {/* Contacts */}
            <Typography variant="h6" color="primary">
              Contacts
            </Typography>
            {formData.contacts.map((contact, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <TextField
                  fullWidth
                  type="url" // Updated to accept URLs
                  label={`Contact ${index + 1}`}
                  value={contact}
                  onChange={(e) =>
                    handleArrayChange("contacts", index, null, e.target.value)
                  }
                  required
                  helperText="Enter a valid URL (e.g., https://example.com)"
                />
                <IconButton
                  onClick={() => removeField("contacts", index)}
                  color="secondary"
                  disabled={formData.contacts.length === 1}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddCircleIcon />}
              onClick={() => addNewField("contacts", "")}
              color="primary"
            >
              Add Contact
            </Button>


            {/* Skills */}
            <Typography variant="h6" mt={4} color="primary">
              Skills
            </Typography>
            {formData.skills.map((skill, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <TextField
                  fullWidth
                  label={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) =>
                    handleArrayChange("skills", index, null, e.target.value)
                  }
                  required
                />
                <IconButton
                  onClick={() => removeField("skills", index)}
                  color="secondary"
                  disabled={formData.skills.length === 1}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddCircleIcon />}
              onClick={() => addNewField("skills", "")}
              color="primary"
            >
              Add Skill
            </Button>

            {/* Projects */}
            <Typography variant="h6" mt={4} color="primary">
              Projects
            </Typography>
            {formData.projects.map((project, index) => (
              <Box key={index} mb={2}>
                <TextField
                  fullWidth
                  label="Project Title"
                  value={project.title}
                  onChange={(e) =>
                    handleArrayChange("projects", index, "title", e.target.value)
                  }
                  required
                  margin="dense"
                />
                <TextField
                  fullWidth
                  label="Project Description"
                  value={project.description}
                  onChange={(e) =>
                    handleArrayChange("projects", index, "description", e.target.value)
                  }
                  margin="dense"
                  multiline
                  rows={3}
                />
                <IconButton
                  onClick={() => removeField("projects", index)}
                  color="secondary"
                  disabled={formData.projects.length === 1}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddCircleIcon />}
              onClick={() => addNewField("projects", { title: "", description: "" })}
              color="primary"
            >
              Add Project
            </Button>

            {/* Work Experience */}
            <Typography variant="h6" mt={4} color="primary">
              Work Experience
            </Typography>
            {formData.workExperience.map((work, index) => (
              <Box key={index} mb={2}>
                <TextField
                  fullWidth
                  label="Company Name"
                  value={work.company}
                  onChange={(e) =>
                    handleArrayChange("workExperience", index, "company", e.target.value)
                  }
                  required
                  margin="dense"
                />
                <TextField
                  fullWidth
                  label="Position"
                  value={work.position}
                  onChange={(e) =>
                    handleArrayChange("workExperience", index, "position", e.target.value)
                  }
                  required
                  margin="dense"
                />
                <IconButton
                  onClick={() => removeField("workExperience", index)}
                  color="secondary"
                  disabled={formData.workExperience.length === 1}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddCircleIcon />}
              onClick={() =>
                addNewField("workExperience", { company: "", position: "" })
              }
              color="primary"
            >
              Add Work Experience
            </Button>

            {/* Submit Button */}
            <Submit isSubmitted={isSubmitted} />
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Resume;
