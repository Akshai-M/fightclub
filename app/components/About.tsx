import Image from "next/image";
import aboutImage from "@/app/assets/dojo.png"

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 space-y-28">
        
      
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              {"Hi there, this is Syed Asif Ali, the author of this website. I have been dedicated to martial arts for over 20 years. My experience spans across many Indian and Western martial arts, and I am also highly experienced in teaching women's self-defense."}
            </p>
          </div>

       
          
        </div>

     
        <div className="grid md:grid-cols-2 gap-12 items-center">
      
         

         
        </div>
      </div>
    </section>
  );
};

export default About;