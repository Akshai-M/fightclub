import { Button } from "@/app/components/ui/button";
import heroImage from "@/app/assets/dojo.jpeg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-800/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Fightclub India
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-2">
            An Extension of Chennai Martial Arts
          </p>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            {"Our legacy is in teaching martial arts for over 40 years. To complement your training, we've been Chennai's most trusted supplier of authentic gear since 2015"}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="martial" size="xl" className="min-w-[200px] bg-[#f82a3b] text-white rounded-[10px]">
            Buy Products
          </Button>
          <Button variant="hero" size="xl" className="min-w-[200px] bg-white border-none">
            Learn Martial Art
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-neutral-50 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;