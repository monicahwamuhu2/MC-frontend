import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step8 = ({ onChange, value }) => {
  const options = ["Yes", "No"];

  const handleSelect = (acceptsInsurance) => {
    onChange("acceptsInsurance", acceptsInsurance);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Do You Need Insurance Coverage?
      </Typography>
      <Box>
        {options.map((option) => (
          <Button
            key={option}
            variant={value === option ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(option)}
            sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: value === option ? "primary.main" : "transparent",
              color: value === option ? "#fff" : "primary.main",
              border: value === option ? "none" : "1px solid",
            }}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Step8;
