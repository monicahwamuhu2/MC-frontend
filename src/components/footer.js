import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{
      background: "#f8f8f8",
      padding: "20px 0",
      textAlign: "center",
      borderTop: "1px solid #ddd"
    }}>
      <Container>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
          © 2025 All Rights Reserved. 
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", marginTop: "5px" }}>
          Mindiful Connect
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;