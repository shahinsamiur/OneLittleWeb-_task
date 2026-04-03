import React from "react";
import Slider from "./slider";
export default function ClientsReview() {
  return (
    <div>
      {" "}
      <section className="flex flex-col justify-center items-center gap-6 w-full py-10">
        <h1 className="w-full text-center text-3xl font-semibold">
          Check Our Clients <span className="text-foreground">Review</span>
        </h1>

        <p className="text-center font-medium lg:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Slider />
      </section>
    </div>
  );
}
