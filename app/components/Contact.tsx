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
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f82a3b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Location</h4>
                      <p className="text-zinc-200/70">
                        Royapettah, Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ffbb00] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Phone</h4>
                      <p className="text-zinc-200/70">
                        7550134063
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f82a3b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Email</h4>
                      <p className="text-zinc-200/70">
                        dragonlee@fightclubindia.in
                      </p>
                    </div>
                  </div>
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