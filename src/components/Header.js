import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme,
  Container
} from "@mui/material";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom"; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navigationLinks = [
  { name: "Home", path: "#home" },
  { name: "AI Chatbot", path: "#chatbot" },
  { name: "Features", path: "#features" },
  { name: "How It Works", path: "#how-it-works" },
  { name: "Testimonials", path: "#testimonials" }
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        navigate('/');
        // Allow time for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Handle regular navigation
      navigate(path);
    }
    
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            py: 1,
            px: { xs: 1, sm: 2 }
          }}
        >
          {/* Logo */}
          <Typography 
            variant="h6" 
            component={RouterLink} 
            to="/"
            sx={{ 
              fontWeight: "bold", 
              color: "#4a67ff", 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                fontSize: '1.5rem', 
                mr: 1,
                animation: 'pulse 2s infinite'
              }}
            >
              🌀
            </Box>
            Mindful Connect
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, alignItems: 'center' }}>
              {navigationLinks.map((link) => (
                <Typography 
                  key={link.name}
                  variant="body1" 
                  sx={{ 
                    cursor: "pointer",
                    fontWeight: 500,
                    color: '#333',
                    position: 'relative',
                    '&:hover': {
                      color: '#4a67ff',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: 0,
                      height: 2,
                      bgcolor: '#4a67ff',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          )}

          {/* CTA Button (visible on both mobile and desktop) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="contained"
              onClick={() => navigate("/therapists")}
              sx={{
                background: "linear-gradient(90deg, #4a67ff 0%, #6e48e6 100%)",
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                boxShadow: '0 4px 10px rgba(74, 103, 255, 0.3)',
                px: { xs: 2, sm: 3 },
                py: 1,
                '&:hover': {
                  boxShadow: '0 6px 15px rgba(74, 103, 255, 0.4)',
                }
              }}
            >
              Find a Therapist
            </Button>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton 
                edge="end" 
                color="inherit" 
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{
              sx: { 
                width: '70%', 
                maxWidth: '300px',
                bgcolor: 'white',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                boxShadow: '-5px 0 25px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={toggleDrawer}>
                <CloseIcon />
              </IconButton>
            </Box>
            
            <List sx={{ px: 2 }}>
              {navigationLinks.map((link) => (
                <ListItem 
                  button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.path)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    '&:hover': {
                      bgcolor: 'rgba(74, 103, 255, 0.1)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={link.name} 
                    primaryTypographyProps={{ 
                      fontWeight: 500,
                      fontSize: '1.1rem'
                    }}
                  />
                </ListItem>
              ))}
              
              <Box sx={{ mt: 3, px: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Need immediate support?
                </Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: "30px",
                    textTransform: "none",
                    fontWeight: 600,
                    mb: 1
                  }}
                  onClick={() => {
                    handleNavClick('#chatbot');
                  }}
                >
                  Chat with Pandora
                </Button>
              </Box>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;