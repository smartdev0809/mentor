import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUp } from "lucide-react";
import Reveal from "./Reveal";

export const Faqs = ({ faqs, page }) => {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="mx-auto lg:mx-0">
            <h2
              id="faqs-title"
              className="text-3xl font-medium tracking-tight text-gray-900 text-center"
            >
              Frequently asked questions
            </h2>
            <p className="mt-2 text-lg text-gray-600 text-center">
              If you have anything else you want to ask,&nbsp;
              <a
                className="text-gray-900 underline"
                href="mailto:contact@kueenztechnologies.com"
              >
                reach out to us
              </a>
              .
            </p>
          </div>
        </Reveal>
        <div className="w-full pt-16">
          <div className="mx-auto w-full md:max-w-4xl p-2">
            {faqs.map((item, index) => (
              <Reveal direction="bottom" key={`faqs${index}`}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex w-full justify-between rounded-lg ${
                          page == "creativerse" ? "bg-[#FCE3D5]" : page=="tunez" ? "bg-[#dcf2e1]": "bg-sky-100"
                        } px-5 py-4 ${
                          index !== faqs.length - 1 && "mb-2"
                        } text-left ${
                          page == "creativerse"
                            ? "hover:bg-[#FCDBC7]"
                            : page=="tunez" ? "hover:bg-[#d3f8dd]" : "hover:bg-sky-200"
                        } focus:outline-none text-lg font-medium leading-6 ${
                          page == "creativerse"
                            ? "text-[#EF864A]"
                            : page=="tunez" ? "text-[#56df78]" : "text-sky-500"
                        }`}
                      >
                        <span>{item.question}</span>
                        <ChevronUp
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 ${
                            page == "creativerse"
                              ? "text-[#EF864A]"
                              : page=="tunez" ? "text-[#70f892]" : "text-sky-500"
                          }`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-6 pb-8 px-5 text-base text-gray-600">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
