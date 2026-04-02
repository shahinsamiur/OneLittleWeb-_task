"use client";
import { ContainerWraper } from "@/src/utils";
import Service from "../components/service";
export default function page() {
  return (
    <ContainerWraper>
      <div className="min-h-screen">
        <Service />
      </div>
    </ContainerWraper>
  );
}
