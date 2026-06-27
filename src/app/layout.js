import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Learning Next_Auth",
    template: "$s",
  },
  description: "Practicing Next Auth",
  keywords: ["NextJS", "React", "Next Auth", "Learning"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
