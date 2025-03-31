import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Ubuntu , Cantarell , Poppins , Inter , Dancing_Script } from "next/font/google";
export const metadata: Metadata = {
  title: "Team Green's Bliss Initiative",
  description: "Empowering minds, nurturing growth, and building a brighter future through education",
};

const cantarell = Cantarell({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });
const dancing_Script = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '700'] });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
