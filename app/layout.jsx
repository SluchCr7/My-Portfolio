// 'use client'
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/pagetransition";
import StairTransition from "../components/StairTransition";
// const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
  , weight: ["100", "200", "300", "400", "500", "600", "700"]
  , variable: "--font-jetBrainsMono"
})

export const metadata = {
  title: "Ahmed Abobakr",
  description: "Wep Developer (Front-end)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <PageTransition>
          <Header />
          {children}
        </PageTransition>
        <StairTransition />
      </body>
    </html>
  );
}
