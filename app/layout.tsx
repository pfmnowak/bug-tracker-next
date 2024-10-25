import {
  Box,
  Container,
  CssBaseline,
  Divider,
  ThemeProvider,
} from "@mui/material";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import theme from "./ui/theme";

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
        <ThemeProvider theme={theme} defaultMode="light">
          <CssBaseline enableColorScheme />
          <Sidebar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              ml: "280px",
            }}
          >
            <Header />
            <Divider sx={{ mx: 3 }} />
            <Container
              maxWidth={false}
              sx={{ maxWidth: "100%", width: "100%", flex: 1, pb: 3 }}
            >
              {children}
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
