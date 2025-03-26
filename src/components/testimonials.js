import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Avatar, Rating, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    text: "Finding the right therapist was always a struggle. The AI matching took my preferences seriously and connected me with a therapist who truly understands my anxiety.",
    name: "Emma Wilson",
    age: 28,
    avatar: "E",
    rating: 5,
    issue: "Anxiety & Work Stress"
  },
  {
    text: "I was skeptical about being matched by an algorithm, but my therapist is perfect for me. Sessions are convenient, and I'm making real progress with my depression.",
    name: "David Chen",
    age: 34,
    avatar: "D",
    rating: 5,
    issue: "Depression"
  },
  {
    text: "Between work and family, I never had time for therapy. The matching process was quick, and my therapist's flexible scheduling makes it easy to prioritize my mental health.",
    name: "Sophia Rodriguez",
    age: 41,
    avatar: "S",
    rating: 4.5,
    issue: "Work-Life Balance"
  },
  {
    text: "After my divorce, I felt completely lost. The therapist I was matched with specializes in life transitions and has helped me rebuild my confidence and find purpose again.",
    name: "Michael Taylor",
    age: 37,
    avatar: "M",
    rating: 5,
    issue: "Life Transitions"
  },
  {
    text: "I've tried multiple platforms before, but none matched me with someone who understands my cultural background. My therapist here gets my family dynamics completely.",
    name: "Aisha Patel",
    age: 31,
    avatar: "A",
    rating: 5,
    issue: "Family Relationships"
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const getVisibleCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };
  
  const visibleCount = getVisibleCount();
  const maxIndex = testimonials.length - visibleCount;
  
  const nextTestimonial = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to beginning
    }
  };
  
  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };
  
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } }
  };

 
    
    return (
      <Box 
        id="testimonials"
        sx={{ 
          py: { xs: 6, md: 8 }, 
          px: 3, 
          background: "linear-gradient(145deg, #f8f9ff 0%, #f0f4ff 100%)",
          borderRadius: { xs: 0, md: "0 0 80px 80px" },
          position: "relative",
          overflow: "hidden"
        }}
      >
      {/* Background decorative elements */}
      <Box component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        sx={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74, 103, 255, 0.2) 0%, rgba(74, 103, 255, 0) 70%)",
          top: "-250px",
          right: "-100px",
          zIndex: 0
        }}
      />
      
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variant="subtitle1" 
            sx={{ 
              color: "primary.main", 
              fontWeight: 600, 
              letterSpacing: 1,
              textTransform: "uppercase",
              mb: 1
            }}
          >
            Success Stories
          </Typography>
          
          <Typography 
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variant="h4" 
            fontWeight={700} 
            sx={{ mb: 2 }}
          >
            Transforming Lives Through Perfect Matches
          </Typography>
          
          <Typography 
            component={motion.p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="body1" 
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto" }}
          >
            Our intelligent matching system has helped thousands of people find therapists who truly understand 
            their unique needs and concerns. Here's what they have to say about their experiences.
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          position: "relative",
          mb: 2
        }}>
          <IconButton 
            onClick={prevTestimonial}
            sx={{ 
              position: {xs: "relative", md: "absolute"}, 
              left: {xs: "auto", md: "-20px"},
              zIndex: 2,
              bgcolor: "white",
              boxShadow: 2,
              "&:hover": { bgcolor: "white", boxShadow: 3 }
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          
          <Box sx={{ 
            display: "flex", 
            gap: 3, 
            justifyContent: "center", 
            width: "100%",
            px: { xs: 0, md: 6 },
            overflow: "hidden"
          }}>
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <Card 
                  component={motion.div}
                  key={`${testimonial.name}-${currentIndex+index}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  sx={{ 
                    maxWidth: 350,
                    minHeight: 270,
                    width: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    borderRadius: 3,
                    overflow: "visible",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
                    }
                  }}
                >
                  <FormatQuoteIcon sx={{ 
                    position: "absolute", 
                    top: -15, 
                    left: 20, 
                    color: "primary.main", 
                    fontSize: 40,
                    bgcolor: "white",
                    borderRadius: "50%",
                    p: 1,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                  }} />
                  
                  <CardContent sx={{ p: 3, pt: 4 }}>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                      "{testimonial.text}"
                    </Typography>
                    
                    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: "primary.main", 
                          color: "white", 
                          width: 50, 
                          height: 50,
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {testimonial.name}, {testimonial.age}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                          {testimonial.issue}
                        </Typography>
                        <Rating value={testimonial.rating} precision={0.5} size="small" readOnly />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </AnimatePresence>
          </Box>
          
          <IconButton 
            onClick={nextTestimonial}
            sx={{ 
              position: {xs: "relative", md: "absolute"}, 
              right: {xs: "auto", md: "-20px"},
              zIndex: 2,
              bgcolor: "white",
              boxShadow: 2,
              "&:hover": { bgcolor: "white", boxShadow: 3 }
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
        
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: 1,
          mt: 3
        }}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <Box
              key={index}
              component={motion.div}
              animate={{
                backgroundColor: currentIndex === index ? "primary.main" : "rgba(0,0,0,0.1)"
              }}
              onClick={() => setCurrentIndex(index)}
              sx={{ 
                width: 32, 
                height: 4, 
                borderRadius: 1,
                cursor: "pointer"
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;