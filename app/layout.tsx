import theme from "@/app/ui/theme";
import {
  Box,
  Container,
  CssBaseline,
  Drawer,
  ThemeProvider,
} from "@mui/material";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Bug Tracker | Next.js",
  description: "A Bug Tracker app created with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Drawer variant="permanent">
            <Box sx={{ px: 2 }}>Drawer content</Box>
          </Drawer>
          <Container sx={{ width: "100%", height: "100vh" }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
