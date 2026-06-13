"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Container} from "@mui/material";

export default function Home() {
  return (
    <Container >
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
        <Hero />
      </Container>
    </Container>
  );
}