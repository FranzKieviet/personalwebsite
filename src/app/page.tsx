"use client";
import Hero from "@/components/Hero";
import { Container, Typography, Button, Stack, Box } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
      <Hero />
      
      <Typography variant="h2" fontWeight={700}>
        Hello World 👋
      </Typography>

      <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
        Built with Next.js + MUI
      </Typography>

      <Box display="flex" justifyContent="center" gap={2} mt={4}>
        <Button variant="contained">Primary Button</Button>
        <Button variant="outlined">Secondary Button</Button>
      </Box>
    </Container>
  );
}