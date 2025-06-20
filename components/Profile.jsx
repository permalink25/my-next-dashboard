'use client';

import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  TextField,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    address: '',
    goal: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Header Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 2,
          background: 'linear-gradient(to right, #089FDA, #092B4E)',
          color: 'white'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={profileImage}
            alt="Profile"
            sx={{ width: 80, height: 80, mr: 3, fontSize: 32 }}
          >
            {formData.fullName ? formData.fullName.charAt(0) : 'JD'}
          </Avatar>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {formData.fullName || 'John Doe'}
            </Typography>
            <Typography>Business Manager</Typography>
            <Box sx={{ mt: 1 }}>
              <Button size="small" variant="contained" sx={{ mr: 1 }}>
                Active
              </Button>
              <Button size="small" variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                Premium
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-button"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="upload-button">
            <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
              Edit Profile
            </Button>
          </label>
        </Box>
      </Paper>

      {/* Personal Info */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Personal Information
        </Typography>

        {editing ? (
          <Grid container spacing={2}>
            {['fullName', 'dob', 'gender', 'address', 'goal'].map((field) => (
              <Grid item xs={12} key={field}>
                <TextField
                  fullWidth
                  label={field === 'dob' ? 'Date of Birth' : field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange(field)}
                  placeholder={`Enter ${field}`}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ color: '#089FDA' }}><strong>Full Name</strong></Typography>
                <Typography>{formData.fullName || 'John Doe'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ color: '#089FDA' }}><strong>Date of Birth</strong></Typography>
                <Typography>{formData.dob || '5/14/1990'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ color: '#089FDA' }}><strong>Gender</strong></Typography>
                <Typography>{formData.gender || 'Male'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ color: '#089FDA' }}><strong>Address</strong></Typography>
                <Typography>{formData.address || '123 Main Street, New York, NY 10001'}</Typography>
              </Grid>
            </Grid>

            <Box mt={2}>
              <Typography sx={{ color: '#089FDA' }}><strong>Goal</strong></Typography>
              <Typography>
                {formData.goal ||
                  'Increase client satisfaction and expand business operations by 25% this year'}
              </Typography>
            </Box>
          </Box>
        )}
      </Paper>

      {/* Quick Stats & Recent Activity */}
      <Grid container spacing={3}>
        {/* Quick Stats */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Stats
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography color="#089FDA">Total Clients</Typography>
              <Typography fontWeight="bold" color="#092B4E">24</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography color="#089FDA">Active Projects</Typography>
              <Typography fontWeight="bold" color="#092B4E">8</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography color="#089FDA">Completed Tasks</Typography>
              <Typography fontWeight="bold" color="#092B4E">156</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography color="#089FDA">Revenue This Month</Typography>
              <Typography fontWeight="bold" color="#089FDA">$12,450</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Recent Activity
            </Typography>

            <List>
              <ListItem sx={{ alignItems: 'flex-start', pb: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: '#089FDA',
                    borderRadius: '50%',
                    mt: 1,
                    mr: 2
                  }}
                />
                <ListItemText
                  primary={<Typography fontWeight="bold">Updated client proposal</Typography>}
                  secondary={<Typography color="#089FDA" fontSize="0.875rem">2 hours ago</Typography>}
                />
              </ListItem>

              <ListItem sx={{ alignItems: 'flex-start', pb: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: '#089FDA',
                    borderRadius: '50%',
                    mt: 1,
                    mr: 2
                  }}
                />
                <ListItemText
                  primary={<Typography fontWeight="bold">Completed project milestone</Typography>}
                  secondary={<Typography color="#089FDA" fontSize="0.875rem">5 hours ago</Typography>}
                />
              </ListItem>

              <ListItem sx={{ alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: '#089FDA',
                    borderRadius: '50%',
                    mt: 1,
                    mr: 2
                  }}
                />
                <ListItemText
                  primary={<Typography fontWeight="bold">Scheduled new meeting</Typography>}
                  secondary={<Typography color="#089FDA" fontSize="0.875rem">1 day ago</Typography>}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
