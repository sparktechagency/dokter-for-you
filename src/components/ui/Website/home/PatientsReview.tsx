"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Title from "@/components/shared/Title";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Winson Herry",
    location: "California",
    text: "gravida elementum tincidunt volutpat in Quisque urna ullamcorper sed at, consectetur quis Donec turpis dui. Morbi vitae urna, maximus venenatis nisl, vitae ac",
    image: "/person.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "New York",
    text: "Exceptional service and care! The staff went above and beyond to ensure my comfort. I couldn't be happier with the results and would highly recommend to anyone.",
    image: "/person.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Texas",
    text: "Professional, knowledgeable, and caring. The entire experience exceeded my expectations. I'm extremely satisfied with the quality of care I received.",
    image: "/person.png",
  },
];

export default function PatientsReview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center", // Ensures the slides are centered
    skipSnaps: false,
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <section className="pt-[72px] pb-[94px] bg-[#F7F7F7]">
      <div className="mx-auto  px-4">
        <div className="text-center  pb-[62px]">
          <p className="text-[#11D279] text-[16px] font-medium mb-2">Testimonial</p>
          <Title className="">
            WHAT OUR PATIENTS SAYS?
          </Title>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex  ">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="embla__slide flex-[0_0_80%] min-w-0 bg-[#FDFDFD]  shadow-lg me-4"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={70}
                      height={70}
                      className="rounded-full border-2 p-1 border-[#E6E6E6]"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-[#6B6B6B]">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-[#6B6B6B] leading-relaxed py-2">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="w-2.5 h-2.5 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/50"
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
