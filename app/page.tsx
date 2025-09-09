'use client';
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Partnerships from "@/app/components/Partnerships";
import Services from "@/app/components/Services";
import "@/app/globals.css"
import Contact  from "@/app/components/Contact";
const Index = () => {
  return (
    <div className="min-h-screen bg-[#F2F3F2]">
      <Header />
      <Hero />
      <Services />
      <About />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;