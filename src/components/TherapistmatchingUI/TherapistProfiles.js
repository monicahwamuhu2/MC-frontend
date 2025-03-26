import React, { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Avatar, 
  Chip, 
  Rating, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  CircularProgress
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';

const TherapistProfiles = () => {
  const navigate = useNavigate();
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simulate loading effect for better UX even if data retrieval is quick
    setTimeout(() => {
      try {
        const savedTherapists = localStorage.getItem('matchedTherapists');
        if (savedTherapists) {
          setTherapists(JSON.parse(savedTherapists));
        } else {
          setError("No matched therapists found. Please try the matching process again.");
        }
      } catch (err) {
        setError("Failed to load therapist profiles. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  const handleContactClick = (therapist) => {
    setSelectedTherapist(therapist);
    setContactDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setContactDialogOpen(false);
    setMessage("");
  };

  const handleSendMessage = () => {
    // Here you would implement the actual message sending functionality
    console.log(`Message to ${selectedTherapist.name}: ${message}`);
    alert(`Your message has been sent to ${selectedTherapist.name}. They will contact you soon!`);
    handleCloseDialog();
  };

  const goBack = () => {
    navigate(-1);
  };

  // Function to generate random rating for demo purposes
  const generateRating = () => {
    return (4 + Math.random()).toFixed(1);
  };

  // Generate a placeholder image URL with the first letter of the therapist's name
  const getAvatarUrl = (name) => {
    const initial = name ? name.charAt(0).toUpperCase() : "T";
    return `https://ui-avatars.com/api/?name=${initial}&background=random&size=150&font-size=0.5`;
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '80vh' 
      }}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ mt: 3 }}>
          Finding your perfect therapist match...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '80vh',
        p: 3 
      }}>
        <Typography variant="h6" color="error" gutterBottom>
          {error}
        </Typography>
        <Button variant="contained" onClick={goBack}>
          Back to Matching
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      maxWidth: 1200, 
      mx: 'auto', 
      mt: 4, 
      p: 3
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 4 
      }}>
        <Typography variant="h4" component="h1">
          Your Matched Therapists
        </Typography>
        <Button variant="outlined" onClick={goBack}>
          Back to Matching
        </Button>
      </Box>

      {therapists.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" gutterBottom>
            No therapists matched your criteria.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Try adjusting your preferences to find more matches.
          </Typography>
          <Button variant="contained" onClick={goBack}>
            Modify Preferences
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {therapists.map((therapist, index) => {
            const rating = generateRating();
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}>
                  <Box sx={{ 
                    bgcolor: 'primary.light', 
                    py: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <Avatar 
                      src={getAvatarUrl(therapist.name)}
                      alt={therapist.name}
                      sx={{ width: 100, height: 100, mb: 2, border: '3px solid white' }}
                    />
                    <Typography variant="h5" component="h2" sx={{ color: 'common.white' }}>
                      {therapist.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Rating value={parseFloat(rating)} precision={0.5} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 1, color: 'common.white' }}>
                        {rating}/5
                      </Typography>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PersonIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        {therapist.gender || "Not specified"}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <WorkIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        {therapist.experience} years experience
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        {therapist.location
                          ? `${therapist.location.city}, ${therapist.location.state}`
                          : "Remote"
                        }
                      </Typography>
                    </Box>
                    
                    <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
                      Specialties
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {therapist.specialties?.map((specialty, i) => (
                        <Chip
                          key={i}
                          label={specialty}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      )) || <Typography variant="body2">Not specified</Typography>}
                    </Box>
                    
                    <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
                      Session Modes
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {therapist.sessionModes?.map((mode, i) => (
                        <Chip
                          key={i}
                          label={mode}
                          size="small"
                          color="secondary"
                          variant="outlined"
                        />
                      )) || <Typography variant="body2">Not specified</Typography>}
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      variant="contained" 
                      fullWidth
                      onClick={() => handleContactClick(therapist)}
                      sx={{ 
                        bgcolor: 'primary.main',
                        '&:hover': { bgcolor: 'primary.dark' }
                      }}
                    >
                      Contact Me
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          Contact {selectedTherapist?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Send a message to {selectedTherapist?.name} to inquire about their services or schedule an appointment.
          </DialogContentText>
          <TextField
            autoFocus
            multiline
            rows={4}
            label="Your Message"
            fullWidth
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button 
            onClick={handleSendMessage} 
            variant="contained"
            disabled={!message.trim()}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TherapistProfiles;