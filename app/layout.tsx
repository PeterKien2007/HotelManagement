import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manchester United Hotel",
  description: "Hotel management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}