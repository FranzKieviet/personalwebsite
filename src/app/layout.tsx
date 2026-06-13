import "./globals.css";
import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js + MUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}