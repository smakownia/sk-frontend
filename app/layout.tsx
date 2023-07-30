import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
