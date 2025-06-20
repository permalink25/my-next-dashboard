'use client';
import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';

export default function LandingPage() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((distance / 1000 / 60) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #089FDA, #092B4E)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 6,
        position: 'relative' // Needed for positioning logo
      }}
    >
      {/* ✅ Logo positioned at top-left */}
      <Box sx={{ position: 'absolute', top: 24, left: 24 }}>
        <Image
          src="/logo.jpg"
          alt="Permalink Support Services Logo"
          width={180}
          height={100}
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          color: '#FFFFFF',
          letterSpacing: 2,
          mb: 5,
          fontWeight: 'bold',
          textShadow: '0px 1px 4px rgba(0,0,0,0.4)'
        }}
      >
        Welcome to the Business Portal
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINUTES', value: timeLeft.minutes },
          { label: 'SECONDS', value: timeLeft.seconds }
        ].map((item) => (
          <Grid item key={item.label}>
            <Paper
              elevation={3}
              sx={{
                width: 100,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.85)',
                color: '#092B4E',
                borderRadius: 2,
                backdropFilter: 'blur(8px)'
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {item.value}
              </Typography>
              <Typography variant="caption" sx={{ letterSpacing: 1 }}>
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="body2"
        sx={{
          color: '#DCF6FF',
          mt: 6,
          textAlign: 'center',
          maxWidth: 500,
          opacity: 0.9
        }}
      >
        {/* Optional footer text here */}
      </Typography>
    </Box>
  );
}
