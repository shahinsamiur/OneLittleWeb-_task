"use client";

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import Image from "next/image";
import { Button } from "../utils";
import { toast } from "react-toastify";
const faqs = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately and billing is prorated.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time with no questions asked. Once cancelled, you'll continue to have access until the end of your current billing period.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom information to your invoices such as your company name, VAT number, billing address, and any additional notes from the billing settings page.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "Billing is handled automatically on a monthly or annual basis depending on your chosen plan. You'll receive an email receipt after each successful payment.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "You can update your email address from your profile settings. A verification link will be sent to your new email address to confirm the change.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(faqs[0].id);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  const handleOnclick = () => {
    toast.error("This feature is not available right now");
  };

  return (
    <>
      <section className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4 py-10 font-sans">
        <div className="w-full max-w-2xl">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">
              Support
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              Frequently asked
              <br />
              questions
            </h2>
          </div>

          <div className="divide-y divide-foreground/30">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className=" cursor-pointer">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left group py-5"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[15px] font-semibold transition-colors duration-200 `}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full border-2 border-foreground! flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "border-rose-400 text-rose-400"
                          : "border-rose-300 text-rose-300 group-hover:border-rose-400 group-hover:text-rose-400"
                      }`}
                    >
                      {isOpen ? (
                        <LuMinus size={13} strokeWidth={2.5} />
                      ) : (
                        <GoPlus size={14} />
                      )}
                    </span>
                  </button>

                  {/* Answer with smooth animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-500 leading-relaxed pr-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="w-full  bg-gray-100 rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-6 shadow-sm">
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            <Image
              src="/support/support1.png"
              alt="user"
              width={100}
              height={100}
              className="rounded-full border-2 border-white bg-background size-20 relative left-3"
            />
            <Image
              src="/support/support2.png"
              alt="user"
              width={100}
              height={100}
              className="rounded-full border-2 border-white bg-background size-22 z-20"
            />
            <Image
              src="/support/support3.png"
              alt="user"
              width={80}
              height={80}
              className="rounded-full border-2 border-white bg-background size-20 right-3 "
            />
          </div>
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Still have Questions?
          </h2>
          {/* Subtitle */}
          <p className="text-gray-500 text-sm sm:text-base ">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          {/* Button */}
          <Button href="#" onClick={handleOnclick}>
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
