"use client";
import Hero from "@/components/Hero";
import { Container, Typography, Button, Stack, Box } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
      <Hero />
    </Container>
  );
}