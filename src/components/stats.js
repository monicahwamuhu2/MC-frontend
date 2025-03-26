import React from "react";
import { Box, Grid, Typography, Card, CardContent, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';

const stats = [
  { 
    value: "300+", 
    text: "people guided toward greater emotional balance.", 
    subtext: "Our platform has successfully matched individuals with therapists who understand their unique needs and concerns.",
    icon: <PersonSearchIcon sx={{ fontSize: 40, color: "#6e48e6" }} />
  },
  { 
    value: "95%", 
    text: "clients notice difference within 6 sessions.", 
    subtext: "Our matching algorithm considers personality, therapy style, and specific concerns to create meaningful connections.",
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#6e48e6" }} />
  },
  { 
    value: "5+", 
    text: "years experience in psychological support.", 
    subtext: "Our network includes certified therapists specializing in various modalities to address diverse mental health needs.",
    icon: <PsychologyIcon sx={{ fontSize: 40, color: "#6e48e6" }} />
  },
];

const KeyStats = () => {
  return (
    <Box 
      sx={{ 
        py: 8, 
        backgroundColor: "#f5f7fa",
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #e4eff9 100%)"
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
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
            MINDFUL MATCHES
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="#333" sx={{ mb: 2 }}>
            Finding Your Ideal Therapist
          </Typography>
          <Typography variant="h6" color="#555" maxWidth="800px" mx="auto" lineHeight={1.6}>
            At Mindful Connect, we've helped hundreds of people discover the right therapeutic match, 
            providing personalized connections that lead to meaningful mental health outcomes.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card 
                  elevation={0}
                  sx={{ 
                    borderRadius: 4, 
                    p: 1.5, 
                    height: "100%",
                    background: "white",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(74, 103, 255, 0.15)"
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      {stat.icon}
                    </Box>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: "bold",
                        backgroundImage: "linear-gradient(90deg, #4a67ff 0%, #6e48e6 100%)",
                        backgroundClip: "text",
                        color: "transparent",
                        mb: 1
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" fontWeight="medium" color="#333" sx={{ mb: 2 }}>
                      {stat.text}
                    </Typography>
                    <Divider sx={{ my: 2, width: "40%", mx: "auto" }} />
                    <Typography variant="body2" color="#666" lineHeight={1.7}>
                      {stat.subtext}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Typography variant="body1" color="#555" sx={{ mb: 2, fontStyle: "italic" }}>
              "Finding the right therapist changed everything for me. The matching process at Mindful Connect
              was thoughtful and considered what I really needed."
            </Typography>
            <Typography variant="subtitle2" color="#888">
              — Sarah K., Mindful Connect client
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default KeyStats;