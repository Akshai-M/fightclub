import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-200 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Information</h2>
          <p className="text-xl text-neutral-800 max-w-2xl mx-auto">
            Ready to start your martial arts journey? Get in touch with us today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="bg-card/80 backdrop-blur-sm shadow-martial border-black/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6 ">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f82a3b] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 " />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-neutral-700">
                        Royapettah, Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ffbb00] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-neutral-700">
                        7550134063
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f82a3b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-neutral-700">
                        dragonlee@fightclubindia.in
                      </p>
                    </div>
                  </div>
                </div>

                
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-card/80 backdrop-blur-sm border-black/50 shadow-martial">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Find Us</h3>
                
                <div className="bg-zinc-600/10 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-16 h-16 text-[#f82a3b] mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Chennai, Tamil Nadu</h4>
                    <p className="text-neutral/700 mb-4">
                      Royapettah Area
                    </p>
                    <Button variant="hero" size="sm" className="border-none">
                      <a href="https://maps.app.goo.gl/anRe4B2mhSeb2BJ69" target="_blank">Open in maps</a>
                    </Button>
                  </div>
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