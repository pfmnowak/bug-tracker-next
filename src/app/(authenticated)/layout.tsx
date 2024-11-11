import MainLayoutProvider from "@/ui/MainLayoutProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayoutProvider>{children}</MainLayoutProvider>;
}
