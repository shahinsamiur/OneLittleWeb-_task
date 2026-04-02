import React from "react";
// import { Switch } from "@/components/ui/switch";

export default function priceSection() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-6">
        <h1 className="w-full text-center text-3xl">
          Airnbn Assistent <span className="text-foreground">pricing</span>
        </h1>
        <p className=" text-center font-medium">
          Choose a plan that’s right for you
        </p>
        <div className="flex justify-center items-center gap-4">
          <p>Pay Monthly </p>
          {/* <Switch /> */}
          <p>Pay Yearly</p>
        </div>
      </section>
    </div>
  );
}
