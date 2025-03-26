import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step5 = ({ onChange, value }) => {
  const sessionModes = ["In-Person", "Online", "Hybrid"];

  const handleSelect = (mode) => {
    onChange("sessionMode", mode);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Select Session Mode
      </Typography>
      <Box>
        {sessionModes.map((mode) => (
          <Button
            key={mode}
            variant={value === mode ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(mode)}
            sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: value === mode ? "primary.main" : "transparent",
              color: value === mode ? "#fff" : "primary.main",
              border: value === mode ? "none" : "1px solid",
            }}
          >
            {mode}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Step5;
