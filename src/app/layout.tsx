// src/app/layout.tsx
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme"; // Adjust the path if needed

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust as necessary
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Mombasa Dog Whisperer",
  description: "Professional dog training and handling services in Mombasa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.variable}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstarts an elegant, consistent baseline */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
