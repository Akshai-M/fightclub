import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import productsImage from "@/app/assets/bp.png";
import trainingImage from "@/app/assets/lma.jpg";
import workshopImage from "@/app/assets/bw.jpg";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginPage from "../Login";
import BookWorkshop from "../BookWorkshop";
import { CircleX } from "lucide-react";
import { isTokenValid } from "../utils/isTokenValid";

const Services = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showWorkShop, setShowWorkShop] = useState(false);
  const router = useRouter();

  const handleBuyClick = () => {
  const token = localStorage.getItem("accessToken");

  if (token && isTokenValid(token)) {
    router.push("/products");
  } else {
    localStorage.removeItem("accessToken");
    setShowLogin(true);
  }
};
  const handleShowWorkShop = () => {
    setShowWorkShop(true);
  };

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
          <Card
            key={"Martial Arts Products"}
            className="group overflow-hidden border-black/30 martial-transition hover:shadow-martial bg-card/50 backdrop-blur-sm"
          >
            <div className="relative overflow-hidden">
              <Image
                src={productsImage}
                alt={"Martial Arts Products"}
                className="w-full h-64 object-cover martial-transition group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-primary/5 opacity-80`}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {"Martial Art Products"}
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {"Martial Art Products"}
              </h3>
              <p className="text-zinc-800 mb-6 leading-relaxed">
                {
                  "Your one-stop destination for martial arts equipment, uniforms, and weapons — from certified tournament brands to world-class international labels."
                }
              </p>
              <Button
                className={`w-full bg-[#f82a3b] text-white rounded-[10px] py-3 font-semibold martial-transition hover:shadow-2xl`}
                onClick={handleBuyClick}
              >
                {"Buy Products"}
              </Button>
            </CardContent>
          </Card>

          <Card
            key={"Martial Arts Training"}
            className="group overflow-hidden border-black/30 martial-transition hover:shadow-martial bg-card/50 backdrop-blur-sm"
          >
            <div className="relative overflow-hidden">
              <Image
                src={trainingImage}
                alt={"Martial Arts Training"}
                className="w-full h-64 object-cover martial-transition group-hover:scale-105"
              />
              <div className={`absolute inset-0 opacity-80`} />
              <div className="absolute top-4 left-4">
                <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {"Do Martial Art"}
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {"Martial Arts Training"}
              </h3>
              <p className="text-zinc-800 mb-6 leading-relaxed">
                {
                  "Learn martial arts at your nearest, most convenient location under the guidance of qualified instructors from basics to advanced skills."
                }
              </p>
              <Button
                className={`w-full bg-[#ffbb00] rounded-[10px] py-3 font-semibold martial-transition hover:shadow-2xl`}
                onClick={() => router.push("/learn-martial-art")}
              >
                {"Learn Now"}
              </Button>
            </CardContent>
          </Card>

          <Card
            key={"Martial Arts Workshop"}
            className="group overflow-hidden border-black/30 martial-transition hover:shadow-martial bg-card/50 backdrop-blur-sm"
          >
            <div className="relative overflow-hidden">
              <Image
                src={workshopImage}
                alt={"Martial Arts Workshop"}
                className="w-full h-64 object-cover martial-transition group-hover:scale-105"
              />
              <div className={`absolute inset-0 opacity-80`} />
              <div className="absolute top-4 left-4">
                <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {"Book us for an Workshop"}
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {"Martial Arts Workshop"}
              </h3>
              <p className="text-zinc-800 mb-6 leading-relaxed">
                {
                  "Transform your event with professional martial arts demonstrations and workshops. Perfect for schools, corporate events, and celebrations."
                }
              </p>
              <Button
                className={`w-full bg-[#f82a3b] text-white rounded-[10px] py-3 font-semibold martial-transition hover:shadow-2xl`}
                onClick={handleShowWorkShop}
              >
                {"Book Now"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      {showWorkShop && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-md">
            <button
              onClick={() => setShowWorkShop(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
            >
              <CircleX />
            </button>
            <BookWorkshop onSuccess={() => setShowWorkShop(false)} />
          </div>
        </div>
      )}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-md">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
            >
              <CircleX />
            </button>
            <LoginPage onSuccess={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
