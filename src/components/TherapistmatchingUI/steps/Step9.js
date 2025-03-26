import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step9 = ({ onChange, value }) => {
  const budgets = ["Free", "Ksh 1,500 - Ksh 2,500", "Ksh 3,000 - Ksh 5,000", "Ksh 5,000+"];

  const handleSelect = (budget) => {
    onChange("budget", budget);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Select Your Budget Range
      </Typography>
      <Box>
        {budgets.map((budget) => (
          <Button
            key={budget}
            variant={value === budget ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(budget)}
            sx={{
              m: 1,
              minWidth: 180,
              backgroundColor: value === budget ? "primary.main" : "transparent",
              color: value === budget ? "#fff" : "primary.main",
              border: value === budget ? "none" : "1px solid",
            }}
          >
            {budget}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Step9;
