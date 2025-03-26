import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaRobot, FaUserFriends, FaClipboardCheck, FaComments } from "react-icons/fa";
import ChatModal from "./ChatModal"; // Import the ChatModal component

const steps = [
  {
    number: "1",
    title: "Share Your Preferences",
    description:
      "Answer simple questions about your concerns, preferred therapist qualities, and therapy style to help us understand your unique needs.",
    icon: <FaClipboardCheck size={30} color="#4a67ff" />
  },
  {
    number: "2",
    title: "Get Matched",
    description:
      "Our AI matching system analyzes your responses to find therapists who align with your specific requirements and therapeutic goals.",
    icon: <FaUserFriends size={30} color="#4a67ff" />
  },
  {
    number: "3",
    title: "Connect & Begin Healing",
    description:
      "Review your matched therapists, select the one who resonates with you, and initiate contact to begin your journey toward better mental health.",
    icon: <FaComments size={30} color="#4a67ff" />
  },
];

const HowItWorks = () => {
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

  return (
    <Container id="how-it-works" sx={{ py: 5 }}>
      <Box sx={
        { textAlign: "center", mb: 4 }}>
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          variant="h4"
          fontWeight={600}
          gutterBottom
        >
          Find Your Perfect Therapist Match
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{ maxWidth: "800px", mx: "auto", mb: 1 }}
        >
          Our intelligent matching system connects you with therapists who align perfectly with your needs,
          preferences, and therapy goals — all in just a few clicks.
        </Typography>
      </Box>
      
      <Grid container spacing={3} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box sx={{ 
                height: "100%",
                p: 2.5, 
                borderRadius: 2, 
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                backgroundColor: "#f8f9fa",
                border: "1px solid #e0e4e8",
                borderLeft: "4px solid #4a67ff",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
                }
              }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <Box sx={{ 
                    bgcolor: "white", 
                    borderRadius: "50%", 
                    width: 45, 
                    height: 45, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    mr: 2
                  }}>
                    {step.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 0.5 }}>
                  {step.description}
                </Typography>
                <Typography 
                  variant="h3" 
                  color="primary" 
                  fontWeight={700} 
                  sx={{ 
                    position: "absolute",
                    top: 10,
                    right: 16,
                    opacity: 0.15,
                    fontSize: "3rem"
                  }}
                >
                  {step.number}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ 
        mt: 4, 
        p: 3, 
        borderRadius: 3, 
        backgroundColor: "#EFF3FF",
        display: "flex", 
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        border: "1px solid rgba(74, 103, 255, 0.2)"
      }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ 
            bgcolor: "#4a67ff", 
            borderRadius: "50%", 
            width: 55, 
            height: 55, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            boxShadow: "0 6px 15px rgba(74, 103, 255, 0.3)",
            flexShrink: 0
          }}>
            <FaRobot size={28} color="white" />
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 0.5 }}>
              Meet Pandora, Your Free AI Mental Health Assistant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Need immediate support? Chat with Pandora, our AI companion designed to provide
              guided exercises and emotional support 24/7. While Pandora offers valuable
              assistance, it's not a replacement for professional therapy.
            </Typography>
          </Box>
        </Box>
        <Button 
          variant="contained" 
          color="primary"
          onClick={openChat} // Add onClick handler to open chat modal
          sx={{ 
            borderRadius: 50,
            px: 3,
            py: 1,
            fontSize: "1rem",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 15px rgba(74, 103, 255, 0.3)",
            "&:hover": {
              boxShadow: "0 8px 25px rgba(74, 103, 255, 0.5)",
            },
            flexShrink: 0
          }}
        >
          Chat with Pandora
        </Button>
      </Box>

      {/* Add ChatModal component */}
      <ChatModal isOpen={isChatOpen} onClose={closeChat} />
    </Container>
  );
};

export default HowItWorks;