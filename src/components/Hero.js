import React from "react";
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  Avatar, 
  Stack 
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/mh.jpg";

// Import icons
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChatIcon from '@mui/icons-material/Chat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const HeroFeatures = [
  {
    icon: <PsychologyIcon sx={{ fontSize: 32, color: "#4a67ff" }} />,
    text: "AI-Powered Emotional Support"
  },
  {
    icon: <ChatIcon sx={{ fontSize: 32, color: "#4a67ff" }} />,
    text: "Personalized Therapy Matching"
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 32, color: "#4a67ff" }} />,
    text: "24/7 Compassionate Guidance"
  }
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box 
      id="home"
      sx={{ 
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4eff9 100%)",
        py: { xs: 6, md: 12 },
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side (Text Content) */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                component="span" 
                sx={{ 
                  backgroundColor: "#4a67ff", 
                  color: "white", 
                  px: 2, 
                  py: 0.8, 
                  borderRadius: 5,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: 1,
                  display: "inline-block",
                  mb: 2
                }}
              >
                MINDFUL CONNECT
              </Typography>

              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: "bold", 
                  color: "#333", 
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Your Mental Wellness, Our Priority
              </Typography>

              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#666", 
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                Empowering your mental health journey with AI-driven insights, 
                personalized therapy matching, and compassionate support tailored 
                to your unique emotional landscape.
              </Typography>

              <Stack 
                direction="row" 
                spacing={2} 
                sx={{ mb: 4 }}
              >
                <Button 
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => navigate("/therapists")}
                  sx={{
                    borderRadius: 30,
                    px: 3,
                    py: 1.5,
                    boxShadow: "0 10px 20px rgba(74, 103, 255, 0.3)",
                    "&:hover": {
                      boxShadow: "0 15px 25px rgba(74, 103, 255, 0.4)"
                    }
                  }}
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => navigate("/about")}
                  sx={{
                    borderRadius: 30,
                    px: 3,
                    py: 1.5,
                    borderWidth: 2
                  }}
                >
                  Learn More
                </Button>
              </Stack>

              {/* Feature Icons */}
              <Grid container spacing={2}>
                {HeroFeatures.map((feature, index) => (
                  <Grid item xs={4} key={index}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        gap: 1.5
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          bgcolor: "rgba(74, 103, 255, 0.1)", 
                          width: 50, 
                          height: 50 
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                      >
                        {feature.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Side (Image) */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box 
                sx={{ 
                  position: 'relative', 
                  display: 'flex', 
                  justifyContent: 'center' 
                }}
              >
                <img
                  src={heroImage}
                  alt="Mental Health Support"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  }}
                />
                {/* Decorative Floating Elements */}
                <Box 
                  sx={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: 100,
                    height: 100,
                    bgcolor: 'rgba(74, 103, 255, 0.1)',
                    borderRadius: '50%',
                    zIndex: -1
                  }} 
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: 150,
                    height: 150,
                    bgcolor: 'rgba(110, 72, 230, 0.1)',
                    borderRadius: '50%',
                    zIndex: -1
                  }} 
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;