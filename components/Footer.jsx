'use client';

import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#092B4E', color: '#DCF6FF', pt: 6, pb: 2 }}>
      <Box sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={4}>
          {/* Business Info + Social */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Business Portal
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Comprehensive business management solutions to help you streamline operations and grow your business.
            </Typography>
            <Box>
              <IconButton sx={{ color: '#DCF6FF' }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: '#DCF6FF' }}><TwitterIcon /></IconButton>
              <IconButton sx={{ color: '#DCF6FF' }}><LinkedInIcon /></IconButton>
              <IconButton sx={{ color: '#DCF6FF' }}><InstagramIcon /></IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">Dashboard</Link>
            <Link href="#" color="inherit" underline="hover" display="block">About</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Contact</Link>
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Services
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">Client Management</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Scheduling</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Staff Management</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Invoicing</Link>
          </Grid>

          {/* Support */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Support
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">Help Center</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Terms of Service</Link>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Email: support@businessportal.com<br />
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: '#DCF6FF' }} />

        <Typography variant="body2" align="center">
          © 2025 Business Portal. All rights reserved. Built with Next.js and Material-UI.
        </Typography>
      </Box>
    </Box>
  );
}
