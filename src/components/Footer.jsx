import React from "react";
import { Reveal } from "./Reveal";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = ({ logo, name, slogan, page, footerTabs, appLink }) => {
  return (
    <Reveal direction="bottom">
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div className="flex items-center text-gray-900">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[50%] h-[50%] object-contain"
                />
                <div className="ml-4">
                  {name && <p className="text-base font-semibold">{name}</p>}
                  {slogan && <p className="mt-1 text-sm">{slogan}</p>}
                </div>
              </div>
              <nav className="mt-11 flex gap-8 flex-wrap">
                {footerTabs.map((tab, index) => (
                  <a
                    key={index}
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                    href={tab.link}
                  >
                    <span className="relative z-10">{tab.name}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
              <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                <svg
                  viewBox="0 0 96 96"
                  fill="none"
                  aria-hidden="true"
                  className={`absolute inset-0 h-full w-full stroke-gray-300 transition-colors ${
                    page == "creativerse"
                      ? "group-hover:stroke-[#EF864A]"
                      : page == "tunez"
                      ? "group-hover:stroke-[#99EBAD]"
                      : "group-hover:stroke-sky-500"
                  }`}
                >
                  <path
                    d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <img
                  className="p-2"
                  src={page ? `/${page}/qr-code.png` : `/tunez/qr-code.png`}
                  width="200"
                  height="200"
                  alt={`Qr Code for ${page} Playstore`}
                />
              </div>
              <div className="ml-8 lg:w-64">
                <p className="text-base font-semibold text-gray-900">
                  <a href={appLink}>
                    <span className="absolute inset-0 sm:rounded-2xl"></span>
                    Download the app
                  </a>
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Scan the QR code to download the app from the Play Store.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
            <form className="flex w-full justify-center md:w-auto items-center text-gray-500">
              <a
                href="https://www.linkedin.com/company/kueenz-technologies/"
                target="_blank"
                className={
                  page == "creativerse"
                    ? "hover:text-[#EF864A]"
                    : (page = "tunez"
                        ? "hover:text-[#99EBAD]"
                        : "hover:text-sky-500")
                }
              >
                <Linkedin
                  strokeWidth={1}
                  size={20}
                  className="m-2 cursor-pointer"
                />
              </a>
              <a
                href="https://www.facebook.com/kueenz.technologies"
                target="_blank"
                className={
                  page == "creativerse"
                    ? "hover:text-[#EF864A]"
                    : (page = "tunez"
                        ? "hover:text-[#99EBAD]"
                        : "hover:text-sky-500")
                }
              >
                <Facebook
                  strokeWidth={1}
                  size={20}
                  className="m-2 cursor-pointer"
                />
              </a>
              <a
                href="https://instagram.com/kueenz.technologies"
                target="_blank"
                className={
                  page == "creativerse"
                    ? "hover:text-[#EF864A]"
                    : (page = "tunez"
                        ? "hover:text-[#99EBAD]"
                        : "hover:text-sky-500")
                }
              >
                <Instagram
                  strokeWidth={1}
                  size={20}
                  className="m-2 cursor-pointer"
                />
              </a>
              <a
                href="mailto:contact@kueenztechnologies.com"
                target="_blank"
                className={
                  page == "creativerse"
                    ? "hover:text-[#EF864A]"
                    : (page = "tunez"
                        ? "hover:text-[#99EBAD]"
                        : "hover:text-sky-500")
                }
              >
                <Mail
                  strokeWidth={1}
                  size={20}
                  className="ml-2 cursor-pointer"
                />
              </a>
              {/* <div className="w-60 min-w-0 shrink">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  autoComplete="email"
                  required=""
                  className={`block w-full appearance-none rounded-lg border border-gray-200 bg-white py-3 px-3 text-gray-900 placeholder:text-gray-400 ${
                    page == "creativerse"
                      ? "focus:border-[#EF864A]"
                      : "focus:border-sky-500"
                  } focus:outline-none ${
                    page == "creativerse"
                      ? "focus:ring-[#EF864A]"
                      : "focus:ring-sky-500"
                  } sm:text-sm`}
                />
              </div>
              <button
                className={`inline-flex justify-center rounded-lg py-3 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden ${
                  page == "creativerse" ? "bg-[#EF864A]" : "bg-sky-500"
                } text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 ${
                  page == "creativerse"
                    ? "active:bg-[#EF864A]"
                    : "active:bg-sky-500"
                } active:text-white/80 before:transition-colors ml-4 flex-none`}
                type="submit"
              >
                <span className="hidden lg:inline">Join our newsletter</span>
                <span className="lg:hidden">Join newsletter</span>
              </button> */}
            </form>
            <p className="mt-6 text-sm text-gray-500 md:mt-0">
              © Copyright 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Reveal>
  );
};
