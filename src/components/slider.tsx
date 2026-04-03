"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    src: "/client/client1.png",
    name: "Jenny Wilson",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    src: "/client/client2.png",
    name: "Esther Howard",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    src: "/client/client3.png",
    name: "Robert Fox",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    src: "/client/client1.png",
    name: "Jenny Wilson",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    src: "/client/client2.png",
    name: "Esther Howard",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    src: "/client/client3.png",
    name: "Robert Fox",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    src: "/client/client1.png",
    name: "Jenny Wilson",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    src: "/client/client2.png",
    name: "Esther Howard",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    src: "/client/client3.png",
    name: "Robert Fox",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
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
    <div className="embla pt-10 sm:pt-14 md:pt-16  h-80! w-full! overflow-x-hidden">
      <div className="w-screen" ref={emblaRef}>
        <div className="flex">
          {slides.map((data, index) => (
            <div
              key={index}
              className="
                flex-[0_0_85%] 
                sm:flex-[0_0_60%] 
                md:flex-[0_0_40%] 
                lg:flex-[0_0_28%] 
                px-2 sm:px-3
              "
            >
              <div className="transition-all  shadow-[0px_1px_27.4px_0px_#88888869] duration-300 rounded-xl p-5 sm:p-6 flex h-40 items-center gap-4 bg-white  hover:scale-105">
                <div>
                  <Image
                    src={data.src}
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
                    alt={data.name}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-left!">
                    {data.name}
                  </h3>
                  <p className=" text-gray-600 text-ellipsis text-left! text-xs">
                    {data.des}
                  </p>
                  <div className="text-yellow-400 text-sm sm:text-base">
                    ★★★★
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
