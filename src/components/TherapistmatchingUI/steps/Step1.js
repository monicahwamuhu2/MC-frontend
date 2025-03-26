import React from "react";
import { Button } from "@mui/material";

const Step1 = ({ onChange, selectedConcerns = [] }) => { // Default to empty array
  if (!onChange) {
    console.error("onChange is undefined in Step1");
    return null;
  }

  const concerns = ["Anxiety", "Depression", "Stress", "Relationship Issues"];

  const handleSelect = (concern) => {
    const updatedConcerns = selectedConcerns.includes(concern)
      ? selectedConcerns.filter((c) => c !== concern) // Remove if already selected
      : [...selectedConcerns, concern]; // Add if not selected

    onChange("concern", updatedConcerns);
  };

  return (
    <div>
      <h2>What’s your main concern?</h2>
      {concerns.map((concern) => (
        <Button
          key={concern}
          variant={selectedConcerns.includes(concern) ? "contained" : "outlined"} // Highlight selected concerns
          onClick={() => handleSelect(concern)}
          sx={{ m: 1 }}
        >
          {concern}
        </Button>
      ))}
    </div>
  );
};

export default Step1;
