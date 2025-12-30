"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import heroImage from "@/app/assets/dojo.png";
import { useRouter } from "next/navigation";
import LoginPage from "@/app/Login";

const Hero = () => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  const handleBuyClick = () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      router.push("/products");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />
      <div className="absolute inset-0 bg-neutral-800/20" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className=" herotext text-white text-7xl md:text-9xl whitespace-nowrap font-bold mb-4 ">
            Fightclub India
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-2">
            An Extension of Chennai Martial Arts
          </p>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            {
              "Our legacy is in teaching martial arts for over 40 years. To complement your training, we've been Chennai's most trusted supplier of authentic gear since 2015"
            }
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="martial"
            size="xl"
            className="min-w-[200px] bg-[#f82a3b] text-white rounded-[10px]"
            onClick={handleBuyClick}
          >
            Buy Products
          </Button>
          <Button
            variant="hero"
            size="xl"
            className="min-w-[200px] bg-white border-none"
            onClick={() => router.push("/learn-martial-art")}
          >
            Learn Martial Art
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 text-neutral-50 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-50 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-md">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <LoginPage onSuccess={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;