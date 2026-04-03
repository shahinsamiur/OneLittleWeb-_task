"use client";
import { ContainerWraper } from "@/src/utils";
import Service from "../components/service";
import PriceSection from "../components/pakageSection";
import Tools from "../components/tools";
import MeetingSection from "../components/meetingSection";
import ClientsReview from "../components/ClientsReview";
import FAQSection from "../components/faq";
export default function page() {
  return (
    <ContainerWraper>
      <div className="min-h-screen flex flex-col justify-center items-center w-full  overflow-x-hidden">
        <Service />
        <PriceSection />
        <Tools />
        <MeetingSection />
        <ClientsReview />
        <FAQSection />
      </div>
    </ContainerWraper>
  );
}
