import Image from "next/image";
import { Button } from "../utils";
import { services } from "../_mock/service";
export default function Service() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-6">
        <h1 className="w-full text-center text-3xl">
          Our <span className="text-foreground">Service</span>
        </h1>
        <p className="lg:w-1/2 text-center font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="w-full flex flex-wrap gap-6 justify-center items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full md:w-2/5 lg:w-1/4 border-2 border-border p-4 md:h-90 lg:h-96 space-y-4 rounded-2xl hover:shadow-lg transition duration-300 hover:border-transparent"
            >
              <Image
                src={service.image}
                alt="service"
                width={1000}
                height={1000}
                className=" h-auto rounded-lg w-20"
              />
              <h1 className="text-xl">{service.name}</h1>
              <p>{service.description}</p>
              <Button
                className="border border-border! bg-transparent! text-text! rounded-2xl!"
                href="#"
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
