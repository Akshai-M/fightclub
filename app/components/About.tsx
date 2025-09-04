import { Card, CardContent } from "@/app/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground">
              Meet Master Syed Asif Ali - Your Guide to Martial Arts Excellence
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-martial">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <div className="text-4xl font-bold bg-[#f82a3b] w-full h-full flex justify-center items-center rounded-[1rem] text-white">SA</div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    Syed Asif Ali - Martial Arts Master
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Hi there, this is Syed Asif Ali, the author of this website. I have been dedicated to martial arts for over 20 years. My experience spans across many Indian and Western martial arts, and I am also highly experienced in teaching women's self-defense.
                    </p>
                    
                    <p>
                      Born and raised in Chennai, I studied and learned martial arts here before pursuing advanced training in several countries. I have devoted one-third of my life to martial arts, and today, I focus on training students in Chennai. I also manage a few branches across the Indian Union.
                    </p>
                    
                    <p>
                      For those interested, I offer <strong className="text-[#f82a3b]">online training</strong> through martial art booklets (PDFs), DVDs, and live Zoom sessions.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="bg-neutral-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                      20+ Years Experience
                    </span>
                    <span className="bg-neutral-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                      Multiple Disciplines
                    </span>
                    <span className="bg-neutral-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                      Women's Self-Defense
                    </span>
                    <span className="bg-neutral-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                      Online Training
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;