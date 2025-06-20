'use client';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Collapse,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useState } from 'react';
import { useSidebar } from '../context/SidebarContext';

const navItems = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    submenu: []
  },
  {
    label: 'Clients',
    icon: <PeopleIcon />,
    submenu: ['List Clients', 'Add Client']
  },
  {
    label: 'Scheduler',
    icon: <CalendarMonthIcon />,
    submenu: ['Calendar View', 'Reminders']
  },
  {
    label: 'Staff',
    icon: <GroupIcon />,
    submenu: ['All Staff', 'Assign Roles']
  },
  {
    label: 'Invoices',
    icon: <ReceiptIcon />,
    submenu: ['All Invoices', 'Create Invoice']
  }
];

export default function Sidebar() {
  const { isOpen, setIsOpen, drawerWidth } = useSidebar();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          transition: 'width 0.3s',
          boxSizing: 'border-box',
          backgroundColor: '#092B4E',
          color: 'white',
          overflowX: 'hidden'
        }
      }}
    >
      {/* Logo at the top */}
      <Box sx={{ textAlign: 'center', pt: 2 }}>
        {isOpen ? (
          <Box
            component="img"
            src="/logo-placeholder.png"
            alt="Full Logo"
            sx={{ width: '80%', maxWidth: '120px', mx: 'auto' }}
          />
        ) : (
          <Box
            component="img"
            src="/logo-icon.png"
            alt="Logo Icon"
            sx={{ width: '32px', height: '32px', mx: 'auto' }}
          />
        )}
      </Box>

      {/* Toggle Button below logo */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ color: 'white' }}>
          {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Sidebar Navigation */}
      <List>
        {navItems.map(({ label, icon, submenu }) => (
          <Box key={label}>
            <ListItem
              button
              onClick={() => (submenu.length ? toggleSubmenu(label) : null)}
              sx={{ px: 2 }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: isOpen ? 2 : 'auto' }}>
                {icon}
              </ListItemIcon>
              {isOpen && (
                <>
                  <ListItemText primary={label} />
                  {submenu.length > 0 &&
                    (openSubmenus[label] ? <ExpandLess /> : <ExpandMore />)}
                </>
              )}
            </ListItem>

            {submenu.length > 0 && (
              <Collapse in={openSubmenus[label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {submenu.map((item) => (
                    <ListItem
                      key={item}
                      button
                      sx={{
                        pl: isOpen ? 6 : 4,
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
