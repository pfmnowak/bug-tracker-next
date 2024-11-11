import { Providers } from "@/providers/Providers";
import SessionGuard from "@/providers/SessionGuard";
import MainLayoutProvider from "@/ui/MainLayoutProvider";
import theme from "@/ui/theme";
import { ThemeProvider } from "@mui/material";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

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
        <Providers>
          <SessionGuard>
            <ThemeProvider theme={theme}>
              <MainLayoutProvider>{children}</MainLayoutProvider>
            </ThemeProvider>
          </SessionGuard>
        </Providers>
      </body>
    </html>
  );
}
