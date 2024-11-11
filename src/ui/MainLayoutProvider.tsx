"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box, Container, CssBaseline, Divider } from "@mui/material";

export default function MainLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline enableColorScheme />
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          ml: "280px",
          width: "100%",
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
    </Box>
  );
}
