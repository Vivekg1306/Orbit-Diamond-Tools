import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <About />
        <Featured />
        <Products />
        <WhyUs />
        <Services />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
