"use client";
import { ContainerWraper } from "@/src/utils";
import Service from "../components/service";
export default function page() {
  return (
    <ContainerWraper>
      <div className="min-h-screen flex flex-col justify-center items-center w-full">
        <Service />
      </div>
    </ContainerWraper>
  );
}
