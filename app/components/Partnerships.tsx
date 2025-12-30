import Image from "next/image";
import dojo1 from "@/app/assets/i1.png";
import dojo2 from "@/app/assets/i2.png";
import dojo3 from "@/app/assets/i3.png";
import dojo4 from "@/app/assets/i4.png";
import dojo5 from "@/app/assets/i5.png";
import dojo6 from "@/app/assets/i6.png";
import dojo7 from "@/app/assets/i7.png";

const images = [
  { src: dojo1, label: "Budokai" },
  { src: dojo2, label: "Dojo 2" },
  { src: dojo3, label: "Flying dragon kung fu" },
  { src: dojo4, label: "Born to fight" },
  { src: dojo5, label: "Combat Kinetics" },
  { src: dojo6, label: "Isshinryu" },
  { src: dojo7, label: "Dojo 7" },
];

const Partnerships = () => {
  return (
    <section id="partnerships" className="py-20 px-12 md:px-14 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Community</h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Trusted by leaders of renowned martial arts organizations
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex w-max animate-scroll">
            {[...images, ...images].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[180px] max-w-[200px] mx-8"
              >
                <div className="w-40 h-38 flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-sm md:text-base font-medium text-neutral-600 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
