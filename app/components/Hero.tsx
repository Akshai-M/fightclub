import { Button } from "@/app/components/ui/button";
import heroImage from "@/app/assets/dojo.jpeg"
// import heroImage from "@/assets/hero-martial-arts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        
        
        
      </div>
      
      
    </section>
  );
};

export default Hero;