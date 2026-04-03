import React from "react";
import Image from "next/image";
export default function Tools() {
  const tools = [
    "/tools/tool1.png",
    "/tools/tool2.png",
    "/tools/tool3.png",
    "/tools/tool4.png",
    "/tools/tool5.png",
    "/tools/tool6.png",
    "/tools/tool7.png",
    "/tools/tool8.png",
    "/tools/tool8.png",
  ];
  return (
    <section className="flex flex-col justify-center items-center gap-6 w-full py-10">
      <h1 className="w-full text-center text-3xl font-semibold">
        Our <span className="text-foreground">Tools</span>
      </h1>

      <p className="text-center font-medium lg:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="bg-[#F6F6F6] w-full py-10 lg:p-10 flex justify-center items-center ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6 lg:w-2/3 justify-items-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg shadow-md w-30 lg:w-52"
            >
              <Image
                src={tool}
                alt={`Tool ${index + 1}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
