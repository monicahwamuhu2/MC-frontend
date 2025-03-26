import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step2 = ({ onChange, selectedGender }) => {
  const genders = ["Male", "Female", "No Preference"];

  const handleSelect = (gender) => {
    onChange("gender", gender);
  };

  return (
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom>
        Select Therapist Gender
      </Typography>
      {genders.map((gender) => (
        <Button
          key={gender}
          variant={selectedGender === gender ? "contained" : "outlined"}
          color={selectedGender === gender ? "primary" : "secondary"}
          onClick={() => handleSelect(gender)}
          sx={{ m: 1, minWidth: 120 }}
          aria-pressed={selectedGender === gender}
        >
          {gender}
        </Button>
      ))}
    </Box>
  );
};

export default Step2;
