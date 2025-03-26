import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Step9 = ({ onChange, value }) => {
  const options = ["Christian", "Muslim", "LGBTQ+ Friendly", "No Preference"];

  const handleSelect = (preference) => {
    onChange("culturalSensitivity", preference);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Do You Have a Cultural/Religious Preference?
      </Typography>
      <Box>
        {options.map((pref) => (
          <Button
            key={pref}
            variant={value === pref ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(pref)}
            sx={{
              m: 1,
              minWidth: 180,
              backgroundColor: value === pref ? "primary.main" : "transparent",
              color: value === pref ? "#fff" : "primary.main",
              border: value === pref ? "none" : "1px solid",
            }}
          >
            {pref}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Step9;
