"use client";
import Image from "next/image";
import { Button } from "../utils";
import { pricePakage } from "../_mock/pricePakage";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
export default function PriceSection() {
  const [enabled, setEnabled] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center gap-6 w-full py-10">
      <h1 className="w-full text-center text-3xl font-semibold">
        Airbnb Assistant <span className="text-foreground">Pricing</span>
      </h1>

      <p className="text-center font-medium">
        Choose a plan that’s right for you
      </p>

      {/* Switch */}
      <div className="flex justify-center items-center gap-4 relative font-semibold">
        <p>Pay Monthly</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setEnabled(!enabled)}
            className={`w-10 h-5 flex items-center rounded-full p-1 transition-all duration-300 cursor-pointer ${
              enabled ? "bg-foreground" : "bg-[#04092152]"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                enabled ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <p>Pay Yearly</p>

        <Image
          src="/save_svg.svg"
          alt="save"
          className="w-32 absolute top-5 -right-12 md:block lg:-top-2 lg:-right-32"
          width={900}
          height={900}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
        {pricePakage.map((item) => (
          <div
            key={item.id}
            className={`border border-border rounded-2xl p-6 shadow-md flex flex-col justify-between ${item.id == 2 ? "bg-foreground text-background" : ""}`}
          >
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm ">{item.desciption}</p>

              <div className="flex items-end gap-2">
                <h1 className="text-4xl font-bold">
                  {enabled ? item.priceYearly : item.price}
                </h1>
                <p className="text-sm ">/ Month</p>
              </div>

              <Button
                className={`${item.id == 2 ? "bg-background! text-foreground!" : "bg-background! border-border! border! text-text! hover:bg-foreground! hover:text-background!"} text-background w-full`}
              >
                Get Started Now
              </Button>
            </div>

            <div className="mt-6 space-y-2">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {feature.abailable ? (
                    <span className="size-8 bg-[#FAC4D2] rounded-full flex justify-center items-center">
                      <FaCheck className="text-foreground" />
                    </span>
                  ) : (
                    <span className="size-8 bg-[#F7F8F9] rounded-full flex justify-center items-center">
                      <RxCross1 className="text-[#191D23]" />
                    </span>
                  )}
                  <span className={feature.abailable ? "" : "opacity-50"}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
