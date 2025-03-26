import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const Step3 = ({ onChange, value }) => {
  return (
    <Box sx={{ mt: 3, textAlign: "center" }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel shrink={!!value}>Age Range</InputLabel>
        <Select 
          value={value || ""} 
          onChange={(e) => onChange("ageRange", e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>Select age range</MenuItem>
          <MenuItem value="18-24">18-24</MenuItem>
          <MenuItem value="25-34">25-34</MenuItem>
          <MenuItem value="35-44">35-44</MenuItem>
          <MenuItem value="45-54">45-54</MenuItem>
          <MenuItem value="55-64">55-64</MenuItem>
          <MenuItem value="65+">65+</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Step3;
