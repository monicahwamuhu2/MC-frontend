import React, { useState, useEffect } from "react";
import { 
  Box, 
  Button, 
  MobileStepper,
  CircularProgress, 
  Typography,
  useMediaQuery,
  Paper,
  Container,
  Chip,
  useTheme,
  alpha
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";

const steps = [
  "Your Concern",
  "Therapist Gender",
  "Age Range",
  "Marital Status",
  "Session Mode",
  "Experience Level",
  "Specialization",
  "Insurance",
  "Budget",
  "Cultural Needs",
];

const TherapistMatching = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    concern: [],
    gender: "",
    ageRange: "",
    marital: "",
    sessionMode: "",
    experienceLevel: "",
    specialization: "",
    acceptsInsurance: "",
    budget: "",
    culturalSensitivity: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isStepComplete, setIsStepComplete] = useState(false);

  // Check if current step is complete
  useEffect(() => {
    const checkStepCompletion = () => {
      switch (activeStep) {
        case 0: return formData.concern && formData.concern.length > 0;
        case 1: return !!formData.gender;
        case 2: return !!formData.ageRange;
        case 3: return !!formData.marital;
        case 4: return !!formData.sessionMode;
        case 5: return !!formData.experienceLevel;
        case 6: return !!formData.specialization;
        case 7: return !!formData.acceptsInsurance;
        case 8: return !!formData.budget;
        case 9: return !!formData.culturalSensitivity;
        default: return false;
      }
    };
    
    setIsStepComplete(checkStepCompletion());
  }, [activeStep, formData]);

  const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const fetchTherapists = async () => {
    setLoading(true);
    setError("");
  
    const experienceNumber = parseInt(formData.experienceLevel, 10) || 0;
  
    const queryParams = new URLSearchParams({
      specialty: formData.specialization,
      gender: formData.gender,
      experience: experienceNumber.toString(),
      therapyType: formData.sessionMode,
      concerns: formData.concern.join(','),
      insurance: formData.acceptsInsurance,
      budget: formData.budget,
      culturalPreference: formData.culturalSensitivity
    }).toString();
  
    try {
     
      
      // With this line
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/therapists?${queryParams}`);
      
      if (!response.ok) throw new Error("Failed to fetch therapists");
  
      const data = await response.json();
      
      localStorage.setItem('matchedTherapists', JSON.stringify(data.data));
      localStorage.setItem('userPreferences', JSON.stringify(formData));
      
      navigate('/therapist-profiles');
    } catch (err) {
      setError(err.message || "An error occurred while finding therapists");
    } finally {
      setLoading(false);
    }
  };

  const renderStepComponent = () => {
    const stepComponents = [
      <Step1 onChange={handleChange} selectedConcerns={formData.concern} />, 
      <Step2 onChange={handleChange} selectedGender={formData.gender} />, 
      <Step3 onChange={handleChange} value={formData.ageRange} />, 
      <Step4 onChange={handleChange} value={formData.marital} />, 
      <Step5 onChange={handleChange} value={formData.sessionMode} />, 
      <Step6 onChange={handleChange} value={formData.experienceLevel} />, 
      <Step7 onChange={handleChange} value={formData.specialization} />, 
      <Step8 onChange={handleChange} value={formData.acceptsInsurance} />, 
      <Step9 onChange={handleChange} value={formData.budget} />, 
      <Step10 onChange={handleChange} value={formData.culturalSensitivity} />,
    ];
    return stepComponents[activeStep] || null;
  };

  // Progress indicator for mobile view
  const renderProgressIndicator = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
        {steps.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              mx: 0.3,
              bgcolor: index === activeStep 
                ? 'primary.main' 
                : index < activeStep 
                  ? alpha('#8A2BE2', 0.6) 
                  : alpha('#3498db', 0.2),
              boxShadow: index === activeStep 
                ? '0 0 4px rgba(138, 43, 226, 0.7)' 
                : 'none',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>
    );
  };

  // Calculate step progress percentage
  const progressPercentage = ((activeStep) / (steps.length - 1)) * 100;

  return (
    <Container maxWidth="md" disableGutters={isMobile}>
      <Paper 
        elevation={6}
        sx={{ 
          width: "100%", 
          borderRadius: 2,
          mt: isMobile ? 2 : 1,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #3498db, #8A2BE2)',
            borderRadius: '2px 2px 0 0',
          }
        }}
      >
        {/* Progress bar */}
        <Box sx={{ 
          height: '3px', 
          width: `${progressPercentage}%`, 
          background: 'linear-gradient(90deg, #3498db, #8A2BE2)',
          transition: 'width 0.4s ease-in-out',
          boxShadow: '0 0 6px rgba(138, 43, 226, 0.5)'
        }} />
        
        <Box sx={{ 
          px: isMobile ? 2 : 3, 
          py: isMobile ? 2 : 2,
          background: 'radial-gradient(circle at top right, rgba(138, 43, 226, 0.03), transparent 60%), radial-gradient(circle at bottom left, rgba(52, 152, 219, 0.03), transparent 60%)'
        }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 1
            }}
          >
            <PersonSearchIcon 
              sx={{ 
                fontSize: isMobile ? 24 : 28, 
                color: '#8A2BE2',
                filter: 'drop-shadow(0 0 2px rgba(138, 43, 226, 0.4))'
              }} 
            />
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                background: 'linear-gradient(90deg, #3498db, #8A2BE2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              Find Your Perfect Therapist
            </Typography>
          </Box>
          
          {isMobile ? (
            <>
              <Typography 
                variant="body2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 1, 
                  fontWeight: 600,
                  color: '#8A2BE2'
                }}
              >
                Step {activeStep + 1}: {steps[activeStep]}
              </Typography>
              {renderProgressIndicator()}
            </>
          ) : (
            <Box sx={{ mb: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  textAlign: 'center', 
                  fontWeight: 600,
                  mb: 0.5,
                  color: '#8A2BE2'
                }}
              >
                Step {activeStep + 1} of {steps.length}: {steps[activeStep]}
              </Typography>
              <MobileStepper
                variant="progress"
                steps={steps.length}
                position="static"
                activeStep={activeStep}
                sx={{ 
                  bgcolor: 'transparent',
                  '& .MuiLinearProgress-root': {
                    height: 5,
                    borderRadius: 3,
                    bgcolor: alpha('#3498db', 0.2)
                  },
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #3498db, #8A2BE2)',
                    boxShadow: '0 1px 2px rgba(138, 43, 226, 0.4)'
                  }
                }}
                nextButton={<div />}
                backButton={<div />}
              />
            </Box>
          )}

          <Box 
            sx={{ 
              mt: 2, 
              minHeight: isMobile ? '300px' : '280px',
              display: 'flex',
              flexDirection: 'column',
              p: 1.5,
              bgcolor: 'rgba(255,255,255,0.5)',
              borderRadius: 2,
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)'
            }}
          >
            {renderStepComponent()}
          </Box>

          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              mt: 2,
              flexDirection: isMobile ? 'column' : 'row', 
              gap: isMobile ? 1.5 : 1
            }}
          >
            <Button 
              startIcon={<KeyboardArrowLeft />}
              disabled={activeStep === 0} 
              onClick={handleBack}
              variant="outlined"
              fullWidth={isMobile}
              size={isMobile ? "medium" : "small"}
              sx={{ 
                borderRadius: 2,
                borderColor: alpha('#3498db', 0.6),
                color: '#3498db',
                '&:hover': {
                  borderColor: '#3498db',
                  bgcolor: alpha('#3498db', 0.05)
                },
                px: 2,
                py: 0.5,
                transition: 'all 0.2s',
                fontWeight: 500
              }}
            >
              Back
            </Button>
            
            {activeStep === steps.length - 1 ? (
              <Button 
                variant="contained" 
                onClick={fetchTherapists}
                disabled={loading || !isStepComplete}
                fullWidth={isMobile}
                size={isMobile ? "medium" : "small"}
                sx={{
                  background: 'linear-gradient(90deg, #3498db, #8A2BE2)',
                  borderRadius: 2,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #2980b9, #7A1BD2)',
                    boxShadow: '0 3px 8px rgba(138, 43, 226, 0.3)'
                  },
                  px: 3,
                  py: isMobile ? 1 : 0.75,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Find My Perfect Match"
                )}
              </Button>
            ) : (
              <Button 
                endIcon={<KeyboardArrowRight />}
                variant="contained" 
                onClick={handleNext}
                disabled={!isStepComplete}
                fullWidth={isMobile}
                size={isMobile ? "medium" : "small"}
                sx={{ 
                  background: 'linear-gradient(90deg, #3498db, #8A2BE2)',
                  borderRadius: 2,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #2980b9, #7A1BD2)',
                    boxShadow: '0 3px 8px rgba(138, 43, 226, 0.2)'
                  },
                  px: 2,
                  py: 0.5,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s',
                  fontWeight: 500,
                  textTransform: 'none'
                }}
              >
                Continue
              </Button>
            )}
          </Box>

          {error && (
            <Box sx={{ 
              mt: 2, 
              p: 1.5, 
              bgcolor: alpha('#ff4d4d', 0.1),
              borderLeft: '3px solid #ff4d4d',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
            }}>
              <Typography color="#e74c3c" variant="body2" fontWeight={500}>{error}</Typography>
            </Box>
          )}
          
          {/* Progress summary */}
          {!isMobile && activeStep > 0 && (
            <Box sx={{ 
              mt: 2, 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 0.5,
              p: 1,
              borderRadius: 1.5,
              bgcolor: alpha('#ffffff', 0.5)
            }}>
              <Typography variant="caption" sx={{ 
                mr: 0.5,
                color: alpha('#333', 0.7),
                fontWeight: 500
              }}>
                Your selections:
              </Typography>
              {formData.concern?.length > 0 && (
                <Chip 
                  size="small" 
                  label={`Concerns: ${formData.concern.length}`} 
                  sx={{
                    background: 'linear-gradient(90deg, #3498db, #5d6dbd)',
                    color: 'white',
                    fontWeight: 500,
                    height: '20px',
                    fontSize: '0.7rem'
                  }}
                />
              )}
              {formData.gender && (
                <Chip 
                  size="small" 
                  label={`Gender: ${formData.gender}`} 
                  sx={{
                    background: 'linear-gradient(90deg, #5d6dbd, #8A2BE2)',
                    color: 'white',
                    fontWeight: 500,
                    height: '20px',
                    fontSize: '0.7rem'
                  }}
                />
              )}
              {formData.sessionMode && (
                <Chip 
                  size="small" 
                  label={`Session: ${formData.sessionMode}`} 
                  sx={{
                    background: 'linear-gradient(90deg, #3498db, #8A2BE2)',
                    color: 'white',
                    fontWeight: 500,
                    height: '20px',
                    fontSize: '0.7rem'
                  }}
                />
              )}
              {formData.specialization && (
                <Chip 
                  size="small" 
                  label={`Specialization: ${formData.specialization}`} 
                  sx={{
                    background: 'linear-gradient(90deg, #6A5ACD, #8A2BE2)',
                    color: 'white',
                    fontWeight: 500,
                    height: '20px',
                    fontSize: '0.7rem'
                  }}
                />
              )}
            </Box>
          )}
        </Box>
      </Paper>
      
      {/* Save progress notice */}
      <Box sx={{
        mt: 1,
        mx: 'auto',
        width: 'fit-content',
        px: 2,
        py: 0.5,
        borderRadius: 2,
        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.03), rgba(138, 43, 226, 0.03))',
        border: '1px solid rgba(138, 43, 226, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography 
          variant="caption"
          sx={{ 
            color: alpha('#8A2BE2', 0.7),
            fontWeight: 500,
            fontSize: '0.65rem'
          }}
        >
          Your progress is automatically saved
        </Typography>
      </Box>
    </Container>
  );
};

export default TherapistMatching;