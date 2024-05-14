import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import { Lora } from "next/font/google";
import { Libre_Bodoni } from "next/font/google";

export const metadata = {
  title: "Livern Real Estate | Find The Perfect Properties",
  description: "Find your dream home property",
  keywords: "rentals, find rentals, find properties",
};

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
});

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default MainLayout;
