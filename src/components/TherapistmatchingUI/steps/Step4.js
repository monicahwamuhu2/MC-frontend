import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step4 = ({ onChange, value }) => {
  const maritalStatuses = ["Single", "Married"];

  const handleSelect = (status) => {
    onChange("marital", status);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Marital Status
      </Typography>
      <Box>
        {maritalStatuses.map((status) => (
          <Button
            key={status}
            variant={value === status ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(status)}
            sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: value === status ? "primary.main" : "transparent",
              color: value === status ? "#fff" : "primary.main",
              border: value === status ? "none" : "1px solid",
            }}
          >
            {status}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Step4;
