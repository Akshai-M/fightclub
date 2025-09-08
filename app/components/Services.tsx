// import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import productsImage from "@/app/assets/dojo.png";
import trainingImage from "@/app/assets/dojo.png";
import workshopImage from "@/app/assets/dojo.png";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      title: "Martial Arts Products",
      subtitle: "Martial Art Products",
      description:
        "Your one-stop destination for martial arts equipment, uniforms, and weapons — from certified tournament brands to world-class international labels.",
        image: productsImage,
      buttonText: "Buy Products",
      buttonVariant: "f82a3b" as const,
      gradient: "from-primary/20 to-primary/5",
      text: "white"
    },
    {
      title: "Martial Arts Training",
      subtitle: "Do Martial Art",
      description:
        "Learn martial arts at your nearest, most convenient location under the guidance of qualified instructors from basics to advanced skills.",
        image: trainingImage,
      buttonText: "Learn Now",
      buttonVariant: "ffbb00" as const,

      gradient: "from-accent/20 to-accent/5",
      text: "black"

    },
    {
      title: "Martial Arts Workshop",
      subtitle: "Book us for an Event/Workshop",
      description:
        "Transform your event with professional martial arts demonstrations and workshops. Perfect for schools, corporate events, and celebrations.",
        image: workshopImage,
      buttonText: "Book Now",
      buttonVariant: "f82a3b" as const,

      gradient: "from-secondary/20 to-secondary/5",
      text: "white"
    },
  ];

  return (
    <section id="services" className="py-20 px-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-zinc-700 max-w-2xl mx-auto">
            Comprehensive martial arts solutions for training, equipment, and
            events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-black/30 martial-transition hover:shadow-martial bg-card/50 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <Image
                    src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover martial-transition group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-800 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  className={`w-full bg-[#${service.buttonVariant}] text-${service.text} rounded-[10px] py-3 font-semibold martial-transition hover:shadow-2xl`}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
