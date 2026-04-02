"use client";
import { ContainerWraper } from "@/src/utils";
import Service from "../components/service";
import PriceSection from "../components/pakageSection";
export default function page() {
  return (
    <ContainerWraper>
      <div className="min-h-screen flex flex-col justify-center items-center w-full gap-20">
        <Service />
        <PriceSection />
      </div>
    </ContainerWraper>
  );
}
