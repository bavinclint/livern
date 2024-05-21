import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Livern Real Estate | Find The Perfect Properties",
  description: "Find your dream home property",
  keywords: "rentals, find rentals, find properties",
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default MainLayout;
