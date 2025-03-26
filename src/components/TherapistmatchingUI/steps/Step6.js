import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step6 = ({ onChange, value }) => {
  const experienceLevels = ["Beginner (1-3 yrs)", "Intermediate (3-7 yrs)", "Expert (7+ yrs)"];

  const handleSelect = (level) => {
    onChange("experienceLevel", level);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Select Experience Level
      </Typography>
      <Box>
        {experienceLevels.map((level) => (
          <Button
            key={level}
            variant={value === level ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(level)}
            sx={{
              m: 1,
              minWidth: 160,
              backgroundColor: value === level ? "primary.main" : "transparent",
              color: value === level ? "#fff" : "primary.main",
              border: value === level ? "none" : "1px solid",
            }}
          >
            {level}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Step6;
