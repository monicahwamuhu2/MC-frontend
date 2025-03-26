import React from "react";
import { Button, Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const benefits = [
  { text: "Matched with the right therapist", icon: <CheckCircleOutlineIcon /> },
  { text: "AI-powered therapy companion", icon: <PsychologyIcon /> },
  { text: "Build lasting mental resilience", icon: <HealthAndSafetyIcon /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const floatVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4eff9 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minHeight: "60vh", // Reduced from 70vh
        py: 5, // Reduced from 8
        overflow: "hidden"
      }}
    >
      {/* Decorative background elements */}
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          width: "70vw",
          height: "70vw",
          maxWidth: "1000px",
          maxHeight: "1000px",
          borderRadius: "50%",
          border: "3px dashed rgba(74, 103, 255, 0.2)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          border: "3px dashed rgba(74, 103, 255, 0.1)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0
        }}
      />
      
      {/* Floating shapes */}
      <Box
        component={motion.div}
        variants={floatVariants}
        animate="float"
        sx={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "24px",
          background: "rgba(74, 103, 255, 0.1)",
          top: "20%",
          left: "15%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        variants={floatVariants}
        animate="float"
        transition={{
          delay: 1
        }}
        sx={{
          position: "absolute",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(74, 103, 255, 0.15)",
          bottom: "15%",
          right: "20%",
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        variants={floatVariants}
        animate="float"
        transition={{
          delay: 0.5
        }}
        sx={{
          position: "absolute",
          width: "40px",
          height: "40px",
          background: "rgba(74, 103, 255, 0.2)",
          transform: "rotate(45deg)",
          top: "30%",
          right: "25%",
          zIndex: 0
        }}
      />
      
      {/* Main content */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 }, // Reduced padding
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
              textAlign: "center"
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  mb: 0.5, // Reduced from 1
                }}
              >
                Begin Your Healing Journey
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography variant="h3" fontWeight={700} sx={{ mb: 1.5 }}> {/* Reduced from gutterBottom */}
                Transform Your Mental Health
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: "600px", mx: "auto", mb: 2.5 }} // Reduced from mb: 4
              >
                Join over 2,500 people who have found relief, growth, and lasting change through our 
                personalized therapist matching service and AI-powered support.
              </Typography>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ marginBottom: "1.5rem" }} // Reduced from 2rem
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  gap: 2, // Reduced from 3
                  mb: 2.5 // Reduced from 4
                }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        p: 1.5, // Reduced from 2
                        borderRadius: 2,
                        background: "rgba(255, 255, 255, 0.7)",
                        backdropFilter: "blur(5px)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                        minWidth: { sm: "180px" }
                      }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Typography variant="body2" fontWeight={500}>
                        {benefit.text}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
            
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/therapists")}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: "30px",
                  px: 3.5, // Reduced from 4
                  py: 1.25, // Reduced from 1.5
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  boxShadow: "0 10px 20px rgba(74, 103, 255, 0.3)",
                  background: "linear-gradient(90deg, #4a67ff 0%, #6e48e6 100%)",
                  "&:hover": {
                    boxShadow: "0 15px 30px rgba(74, 103, 255, 0.4)",
                  },
                }}
              >
                Find Your Perfect Therapist Match
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, opacity: 0.8 }} // Reduced from mt: 3
              >
                Get matched in under 5 minutes • No credit card required
              </Typography>
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CallToAction;