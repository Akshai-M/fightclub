import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-700/30 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Information</h2>
          <p className="text-xl text-zinc-200/80 max-w-2xl mx-auto">
            Ready to start your martial arts journey? Get in touch with us today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="bg-card/80 backdrop-blur-sm shadow-martial border-neutral-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                
                <div className="space-y-6 ">
                 
                  

                  
                </div>

                <div className="mt-8">
                  <button className="w-full bg-[#f82a3b] text-white rounded-[10px] py-3 font-semibold">
                    Schedule a Consultation
                  </button>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;