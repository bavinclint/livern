import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Livern Real Estate | Find The Perfect Properties",
  description: "Find your dream home property",
  keywords: "rentals, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default MainLayout;
