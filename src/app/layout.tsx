import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import SocialFooter from "@/components/SocialFooter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});



export const metadata: Metadata = {
  title: "Mombasa Dog Whisperer",
  description: "Professional dog training and handling services in Mombasa",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.ico" type="image/x-icon" />    
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={raleway.variable}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <SocialFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
