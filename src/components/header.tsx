"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { FiMenu, FiX } from "react-icons/fi";
import { nav } from "@/src/_mock/nav";
import { Button } from "../utils";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "100vh",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.fromTo(
        iconRef.current,
        { rotate: 0 },
        { rotate: 180, duration: 0.3 },
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
      });
    }
  }, [isOpen]);

  return (
    <header className="fixed w-full bg-background shadow-[0px_4px_62px_0px_rgba(250,196,210,0.63)] z-50">
      <div className="container mx-auto px-6 py-0 flex justify-between items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          className="w-24 "
          width={900}
          height={900}
        ></Image>

        <nav className="hidden lg:flex gap-8 text-lg">
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="hover:text-foreground transition border-b-2 border-transparent hover:border-border"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Button
          className="hidden lg:flex justify-center items-center "
          href="#meeting"
        >
          <span> Schedule A Meeting</span> <FaArrowRightLong className="ml-2" />
        </Button>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden text-3xl relative z-50"
        >
          <div ref={iconRef}>{isOpen ? <FiX /> : <FiMenu />}</div>
        </button>
      </div>

      <div
        ref={menuRef}
        className="lg:hidden overflow-hidden h-0 opacity-0 bg-background"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-2xl mt-20">
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="hover:opacity-70 transition"
            >
              {item.name}
            </a>
          ))}
          <Button className="flex justify-center items-center" href="#meeting">
            Schedule A Meeting <FaArrowRightLong className="ml-2" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
