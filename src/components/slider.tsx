"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  "/images/user1.jpg",
  "/images/user2.jpg",
  "/images/user3.jpg",
  "/images/user4.jpg",
  "/images/user1.jpg",
  "/images/user2.jpg",
  "/images/user3.jpg",
  "/images/user4.jpg",
];

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      ClassNames(),
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <div className="embla py-16 bg-gray-100">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {slides.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_30%] px-2"
            >
              <div className="card transition-all duration-300 rounded-xl p-6 flex flex-col items-center gap-4">
                <Image
                  src={src}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                  alt={`User ${index + 1}`}
                />

                <h3 className="font-semibold">User {index + 1}</h3>

                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
