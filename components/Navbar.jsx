'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  alpha
} from '@mui/material';
import { useState } from 'react';
import { useSidebar } from '../context/SidebarContext';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const navItems = [
  { label: 'DASHBOARD', icon: <DashboardIcon />, options: ['Overview', 'Stats'] },
  { label: 'CLIENTS', icon: <PeopleIcon />, options: ['List', 'Add New'] },
  { label: 'SCHEDULER', icon: <CalendarMonthIcon />, options: ['Calendar', 'Reminders'] },
  { label: 'STAFF', icon: <GroupIcon />, options: ['Team', 'Roles'] },
  { label: 'INVOICES', icon: <ReceiptIcon />, options: ['All Invoices', 'Create Invoice'] }
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [avatarMenuAnchor, setAvatarMenuAnchor] = useState(null);
  const { drawerWidth } = useSidebar();

  const handleMouseEnter = (event, item) => {
    setAnchorEl(event.currentTarget);
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setActiveItem(null);
  };

  const handleAvatarClick = (event) => {
    setAvatarMenuAnchor(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarMenuAnchor(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#089FDA',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        marginLeft: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: 'margin-left 0.3s, width 0.3s'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          overflowX: 'auto',
          px: 4,
          minHeight: '64px'
        }}
      >
        {/* LEFT: Navigation with Icons */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {navItems.map(({ label, icon, options }) => (
            <Box
              key={label}
              onMouseLeave={handleMouseLeave}
              sx={{ position: 'relative' }}
            >
              <Button
                onMouseEnter={(e) => handleMouseEnter(e, label)}
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '8px 16px',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                startIcon={icon}
              >
                {label}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={activeItem === label}
                onClose={handleMouseLeave}
                MenuListProps={{
                  onMouseEnter: () => setActiveItem(label),
                  onMouseLeave: handleMouseLeave
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                sx={{
                  '& .MuiPaper-root': {
                    marginTop: '4px',
                    minWidth: '150px'
                  }
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(8, 159, 218, 0.1)'
                      }
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>

        {/* RIGHT: Search, Notifications, Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search Bar */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              backgroundColor: alpha('#DCF6FF', 0.15),
              '&:hover': {
                backgroundColor: alpha('#DCF6FF', 0.25)
              },
              display: 'flex',
              alignItems: 'center',
              px: 1,
              maxWidth: 250
            }}
          >
            <SearchIcon sx={{ color: 'white', mr: 1 }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'white', width: '100%' }}
            />
          </Box>

          {/* Notifications */}
          <IconButton sx={{ color: 'white' }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile Avatar */}
          <IconButton onClick={handleAvatarClick}>
            <Avatar sx={{ bgcolor: '#092B4E' }}>JD</Avatar>
          </IconButton>
          <Menu
            anchorEl={avatarMenuAnchor}
            open={Boolean(avatarMenuAnchor)}
            onClose={handleAvatarClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <MenuItem onClick={handleAvatarClose}>Profile</MenuItem>
            <MenuItem onClick={handleAvatarClose}>Settings</MenuItem>
            <MenuItem onClick={handleAvatarClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
