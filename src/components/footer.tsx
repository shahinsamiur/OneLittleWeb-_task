"use client";

import React from "react";
import { footerSections, socialLinks } from "@/src/_mock/footer";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-16">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between  pb-12">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-10 md:mb-0 ">
            <Image
              src={"/logo.png"}
              alt="logo"
              className="w-24 "
              width={900}
              height={900}
            ></Image>
            <p className="text-sm leading-relaxed pr-4 opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex gap-4 text-xl mt-5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    className="hover:opacity-70 transition"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className=" md:w-1/2 flex flex-wrap md:gap-0 justify-between">
            {footerSections.map((section, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/3 mb-10 md:mb-0 flex flex-col  justify-between"
              >
                <h2 className="font-semibold mb-4">{section.title}</h2>

                <ul className="space-y-3 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:opacity-70 transition text-left! w-full"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm  bg-[#230B41] text-white py-4">
        © Copyright {new Date().getFullYear()} All Rights Reserved by
        OneLittleWeb
      </div>
    </footer>
  );
};

export default Footer;
