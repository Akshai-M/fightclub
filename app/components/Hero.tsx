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
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-[#f82a3b] rounded-2xl flex items-center justify-center font-bold text-white text-3xl shadow-2xl">
              FC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Fightclub India
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200/60 mb-2">
            An Extension of Chennai Martial Arts
          </p>
          <p className="text-lg text-zinc-200/60 max-w-2xl mx-auto">
            Master the ancient arts with over 20 years of dedicated martial arts expertise. 
            Train with authentic techniques from India and around the world.
          </p>
        </div>
        
        
      </div>
      
      
    </section>
  );
};

export default Hero;