import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step7 = ({ onChange, value }) => {
  const specializations = ["CBT", "Trauma Therapy", "Couples Therapy", "Mindfulness Therapy"];

  const handleSelect = (specialization) => {
    onChange("specialization", specialization);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Select Therapy Specialization
      </Typography>
      <Box>
        {specializations.map((spec) => (
          <Button
            key={spec}
            variant={value === spec ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(spec)}
            sx={{
              m: 1,
              minWidth: 180,
              backgroundColor: value === spec ? "primary.main" : "transparent",
              color: value === spec ? "#fff" : "primary.main",
              border: value === spec ? "none" : "1px solid",
            }}
          >
            {spec}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Step7;
