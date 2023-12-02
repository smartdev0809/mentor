import React from "react";
import { Navbar } from "../components";

export const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow flex-1">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Your marketplace for high-quality&nbsp;
              <span
                className="text-blue-600"
              >
                digital assets
              </span>.
            </h1>
            <p className="mt-6 text-lg">Welcome to DigitalHippo. Every asset on our platform is verified by our team to ensure our highest quality standards.</p>
          </div>
        </div>
      </div>
      <Navbar />
    </main>
  );
};
