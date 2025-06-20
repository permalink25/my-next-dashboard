'use client';

import {
  Avatar,
  Box,
  Button,
  Chip,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    goal: '',
    photo: null,
    photoPreview: null,
    status: ['Active', 'Premium'],
    title: 'Business Manager'
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({
        ...profile,
        photo: file,
        photoPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = () => {
    setEditMode(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center',
        marginTop: '80px'
      }}
    >
      {/* Top Profile Card */}
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', maxWidth: 800, width: '100%' }}>
        <Box
          sx={{
            background: 'linear-gradient(to right, #089FDA, #092B4E)',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 4
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              src={profile.photoPreview || ''}
              sx={{
                width: 64,
                height: 64,
                bgcolor: '#DCF6FF',
                color: '#092B4E',
                fontWeight: 'bold'
              }}
            >
              {!profile.photoPreview && 'JD'}
            </Avatar>
            <Box>
              <Typography variant="h5">{profile.name || 'Your Name'}</Typography>
              <Typography variant="subtitle1">{profile.title}</Typography>
              <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                {profile.status.map((label) => (
                  <Chip key={label} label={label} sx={{ bgcolor: 'white', color: '#089FDA' }} />
                ))}
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{ bgcolor: '#DCF6FF', color: '#092B4E' }}
            onClick={() => setEditMode(!editMode)}
          >
            ✏️ Edit Profile
          </Button>
        </Box>
      </Paper>

      {/* Personal Info */}
      <Paper elevation={2} sx={{ p: 4, borderRadius: 2, maxWidth: 800, width: '100%' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Personal Information
        </Typography>

        {!editMode ? (
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>👤 Full Name</Typography>
              <Typography>{profile.name || '-'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>🎂 Date of Birth</Typography>
              <Typography>{profile.dob || '-'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>🧑 Gender</Typography>
              <Typography>{profile.gender || '-'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>🏠 Address</Typography>
              <Typography>{profile.address || '-'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>🚩 Goal</Typography>
              <Typography>{profile.goal || '-'}</Typography>
            </Box>
          </Box>
        ) : (
          <Box component="form" sx={{ display: 'grid', gap: 2 }}>
            <TextField
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              fullWidth
            />
            <TextField
              label="Date of Birth"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              placeholder="YYYY-MM-DD"
              fullWidth
            />
            <TextField
              label="Gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              placeholder="Enter your gender"
              fullWidth
            />
            <TextField
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Enter your address"
              fullWidth
            />
            <TextField
              label="Goal"
              name="goal"
              value={profile.goal}
              onChange={handleChange}
              placeholder="Your goal"
              fullWidth
              multiline
              rows={3}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ backgroundColor: '#089FDA', width: 'fit-content' }}
            >
              Save Changes
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
