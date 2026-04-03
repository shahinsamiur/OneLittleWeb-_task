"use client";

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

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

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="min-h-screen bg-[#f0f0eb] flex items-center justify-center px-4 py-20 font-sans">
      <div className="w-full max-w-2xl">
        {/* Header */}
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

        {/* FAQ List */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-5">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[15px] font-semibold transition-colors duration-200 ${
                      isOpen
                        ? "text-gray-900"
                        : "text-gray-800 group-hover:text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
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

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Still have questions?
            <a
              href="#"
              className="text-rose-400 font-semibold hover:text-rose-500 transition-colors underline underline-offset-2"
            >
              Contact our support team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
