import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Box, Avatar, Container } from "@mui/material";
import { motion } from "framer-motion";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import InsightsIcon from '@mui/icons-material/Insights';
import BalanceIcon from '@mui/icons-material/Balance';
import ChatIcon from '@mui/icons-material/Chat';
import ChatModal from "./ChatModal"; // Import the ChatModal component

// Import images correctly
import aiChatbot from '../assets/ai_chatbot.png';
import therapistMatching from '../assets/therapist_matching.jpeg';
import emotionalInsights from '../assets/emotional_insights.jpeg';
import workLifeBalance from '../assets/work_life_balance.jpeg';

const FeaturesSection = () => {
  // Add state for modal
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Open chat modal function
  const openChat = () => {
    setIsChatOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close chat modal function
  const closeChat = () => {
    setIsChatOpen(false);
    document.body.style.overflow = 'auto';
  };

  const features = [
    {
      title: "AI Chatbot - Meet Pandora",
      description: "Get instant emotional support through conversations with Mira, our empathetic AI companion available 24/7 to listen and guide you.",
      image: aiChatbot,
      icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
      action: "Chat with Pandora",
      highlight: true,
      onClick: openChat // Add onClick handler for this feature
    },
    {
      title: "Therapist Matching",
      description: "Find the perfect therapist based on your specific needs, preferences, and goals through our personalized matching system.",
      image: therapistMatching,
      icon: <PersonSearchIcon sx={{ fontSize: 40 }} />,
      action: "Book a Session",
      buttonVariant: "contained"
    },
    {
      title: "Emotional Insights",
      description: "Track your mood patterns and receive actionable wellness tips tailored to your emotional journey and personal growth.",
      image: emotionalInsights,
      icon: <InsightsIcon sx={{ fontSize: 40 }} />,
      action: "Learn More"
    },
    {
      title: "Work-Life Balance Coaching",
      description: "Regain control and harmony in your life with strategies that empower you to thrive both professionally and personally.",
      image: workLifeBalance,
      icon: <BalanceIcon sx={{ fontSize: 40 }} />,
      action: "Explore Coaching"
    },
  ];

  return (
    <Box id="features" sx={{ backgroundColor: "#f8f9fa", py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', textAlign: "center", mb: 4 }}>
          {/* Floating Mira Chatbot Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 1 
            }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 1000
            }}
            onClick={openChat} // Add onClick handler to open chat
          >
            <Box
              sx={{
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Message Bubble */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                style={{
                  position: 'absolute',
                  bottom: '70px',
                  right: '0px',
                  backgroundColor: '#4a67ff',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '15px 15px 0 15px',
                  maxWidth: '200px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  marginBottom: '15px'
                }}
              >
                <Typography variant="body2">
                  Hi! I'm Pandora. Need someone to talk to?
                </Typography>
              </motion.div>

              {/* Chat Button */}
              <Avatar 
                sx={{ 
                  width: 60, 
                  height: 60, 
                  bgcolor: '#4a67ff',
                  boxShadow: '0 4px 20px rgba(74, 103, 255, 0.4)',
                  '&:hover': {
                    bgcolor: '#6e48e6'
                  }
                }}
              >
                <ChatIcon />
              </Avatar>

              {/* Pulse Animation */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                  bgcolor: 'rgba(74, 103, 255, 0.2)',
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(1)',
                      opacity: 0.8
                    },
                    '70%': {
                      transform: 'scale(1.3)',
                      opacity: 0
                    },
                    '100%': {
                      transform: 'scale(1)',
                      opacity: 0
                    }
                  }
                }}
              />
            </Box>
          </motion.div>

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
              mb: 1.5
            }}
          >
            OUR SERVICES
          </Typography>
          
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1.5, color: '#333' }}>
            How Mindful Connect Can Help You Thrive
          </Typography>
          
          <Typography variant="h6" sx={{ color: '#555', mb: 3.5, maxWidth: "800px", mx: "auto" }}>
            Comprehensive mental wellness solutions designed to support your journey 
            to emotional balance and personal growth
          </Typography>
        </Box>
        
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <motion.div 
                whileHover={{ y: -5 }} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    borderRadius: "16px", 
                    boxShadow: feature.highlight 
                      ? '0 8px 25px rgba(74, 103, 255, 0.25)' 
                      : '0 8px 25px rgba(0,0,0,0.1)',
                    height: '100%',
                    border: feature.highlight ? '2px solid #4a67ff' : '1px solid #e0e0e0',
                    position: 'relative',
                    overflow: 'visible',
                    backgroundColor: feature.highlight ? '#fafbff' : 'white'
                  }}
                >
                  {feature.highlight && (
                    <Box sx={{ 
                      position: 'absolute', 
                      top: -12, 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      bgcolor: '#4a67ff',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 5,
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      zIndex: 2
                    }}>
                      FEATURED
                    </Box>
                  )}
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box 
                      sx={{ 
                        mb: 1.5, 
                        color: feature.highlight ? '#4a67ff' : 'primary.main',
                        display: 'flex',
                        justifyContent: 'flex-start'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          bgcolor: feature.highlight ? 'rgba(74, 103, 255, 0.1)' : 'rgba(25, 118, 210, 0.1)', 
                          width: 56, 
                          height: 56,
                          color: feature.highlight ? '#4a67ff' : 'primary.main'
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                    </Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: 'left' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2, flexGrow: 1, textAlign: 'left' }}>
                      {feature.description}
                    </Typography>
                    {feature.action && (
                      <Button 
                        variant={feature.buttonVariant || "outlined"} 
                        color="primary"
                        onClick={feature.onClick} // Use the onClick handler if provided
                        sx={{ 
                          borderRadius: '30px',
                          py: 1,
                          px: 3,
                          mt: 'auto',
                          alignSelf: 'flex-start',
                          boxShadow: feature.buttonVariant === "contained" ? 3 : 0,
                          bgcolor: feature.buttonVariant === "contained" ? '#4a67ff' : 'transparent',
                          '&:hover': {
                            bgcolor: feature.buttonVariant === "contained" ? '#6e48e6' : 'rgba(74, 103, 255, 0.1)'
                          }
                        }}
                      >
                        {feature.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Add ChatModal component */}
      <ChatModal isOpen={isChatOpen} onClose={closeChat} />
    </Box>
  );
};

export default FeaturesSection;