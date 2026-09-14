import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"; 
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const valleySans = localFont({
  src: "./fonts/ValleySans-VariableFont_wght.ttf",
  variable: "--font-valley-sans",
});

export const metadata: Metadata = {
  title: "Self Money Care",
  description: "Aplicação web que visa melhorar a gestão pessoal e de terceiros de gastos financeiros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${valleySans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex">
        <AuthProvider>
          <main className="flex-1">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
