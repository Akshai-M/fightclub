import Image from "next/image";

import founder from "@/app/assets/founder.jpg"
import instructor from "@/app/assets/instructor.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 px-12 bg-muted/30">
      <div className="container mx-auto px-6 space-y-28"><h2 className="text-4xl md:text-5xl pl-150 font-bold mb-10 ">About Us</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center ml-20">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"></h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
             I am Syed Usman Ali
            </h3>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed text-justify">
              {
                "Founder of Chennai Martial Arts, who has over 40 years of expertise in both Indian and Western martial arts. Trained internationally and deeply committed to women’s self-defense, he has dedicated a major part of his life to promoting martial arts. In 2015, he established the Chennai Martial Arts website to make tournament-approved gear accessible at affordable prices, while also offering structured training through"
              }
            </p>
          </div>

          <div className="relative w-fill md:w-sm h-80 md:h-96">
            <Image
              src={founder}
              alt="Team group photo"
              fill
              className="rounded-xl object-fill"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-fill md:w-sm h-80 md:h-96 md:ml-26">
            <Image
              src={instructor}
              alt="Grow Better Office"
              fill
              className="rounded-xl object-fill"
            />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              I am Syed Asif Ali
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed text-justify">
              {
                "Instructor and founder of Fight Club India, brings over 20 years of martial arts practice and nearly a decade of teaching experience. Recognized for his tournament demonstrations and achievements, he has conducted numerous workshops in schools, colleges, and IT companies, with a strong emphasis on women’s self-defense. With his background in technology, he built Fight Club India as a modern platform where learners can find quality martial arts training and access a complete range of uniforms, equipment, and weapons in one place"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
