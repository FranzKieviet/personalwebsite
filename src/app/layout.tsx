import "./globals.css";
import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Franz Kieviet",
  description: "Personal website showcasing projects and experience",
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