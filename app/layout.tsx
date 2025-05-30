import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "./Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
