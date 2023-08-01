import "./globals.css";
import { ReactNode } from "react";
import { Fira_Sans } from "next/font/google";

const font = Fira_Sans({ subsets: ["cyrillic"], weight: ["400", "500"] });

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
