import "../styles/globals.css";
import { Button } from "../utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function Hero() {
  const images = [
    "/sponsors/arbnb.svg",
    "/sponsors/bookingcom.svg",
    "/sponsors/vrbo.svg",
    "/sponsors/tripadvisor.svg",
    "/sponsors/agoda.svg",
    "/sponsors/expedia.svg",
    "/sponsors/hometogo.svg",
  ];
  return (
    <div>
      <div className="w-full min-h-[50vh] bg-grid pt-50 lg:pt-60 flex flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-center gap-2 relative">
          <h1 className="text-3xl lg:text-6xl font-bold text-center">
            Airbnb Assistants For
          </h1>
          <h2 className="text-2xl lg:text-4xl text-center">
            Property Management
          </h2>
          <p className="text-xs md:text-lg lg:w-1/2 lg:text-sm text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button className="mt-4">Schedule A Meeting</Button>
          <a className="underline cursor-pointer hover:text-foreground">
            See Pricing
          </a>

          <Image
            src="/hero_image_1.png"
            alt="hero image"
            width={900}
            height={900}
            className="absolute bottom-0 left-2 lg:left-40 size-16 lg:size-20"
          />

          <Image
            src="/hero_image_2.png"
            alt="hero image"
            width={900}
            height={900}
            className="absolute bottom-0 right-2 lg:right-40 size-16 lg:size-20"
          />

          <Image
            src="/hero_image_3.png"
            alt="hero image"
            width={900}
            height={900}
            className="absolute -top-20 left-2 lg:left-40 size-16 lg:size-20"
          />

          <Image
            src="/hero_image_4.png"
            alt="hero image"
            width={900}
            height={900}
            className="absolute -top-20 right-2 lg:right-40 size-16 lg:size-20"
          />

          <div className="absolute -bottom-10 right-0 size-2 bg-[#0C3B7C] rounded-full"></div>
          <div className="absolute -top-14 right-20 size-3 bg-[#FFEC5A] rounded-full"></div>
          <div className="absolute -bottom-10 right-[50%] size-2 bg-[#5AF9FF] rounded-full"></div>
          <div className="absolute -top-30 right-[50%] size-3 bg-[#34E0A1] rounded-full"></div>
          <div className="absolute -bottom-10 left-0 size-2 bg-[#FFEC5A] rounded-full"></div>
          <div className="absolute hidden lg:inline-block top-[40%] left-20 size-3 bg-[#FF5A5F] rounded-full"></div>
          <div className="absolute -top-16 left-20 size-3 bg-[#635BFF] rounded-full"></div>
        </section>
      </div>
      <section className="py-20 flex flex-col justify-center items-center gap-4 relative px-0!">
        <p className="font-semibold">Trusted by leaders in 50+ industries</p>
        <div className="w-full h-20 relative">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            autoFill={true}
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="company logo"
                width={900}
                height={900}
                className="size-16 lg:size-20 mx-10"
              />
            ))}
          </Marquee>
          <div className="w-20  z-30 h-full top-0 left-0 absolute bg-linear-to-r from-white to-transparent"></div>
          <div className="w-20  z-30 h-full top-0 right-0 absolute bg-linear-to-l from-white to-transparent"></div>
        </div>
      </section>
    </div>
  );
}
