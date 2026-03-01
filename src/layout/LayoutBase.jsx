import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SocialLinks } from "../components/SocialLinks";
import { Footer } from "../components/Footer";

export const LayoutBase = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <SocialLinks />
      <Footer />
    </section>
  );
};
