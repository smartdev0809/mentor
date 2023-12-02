import { CheckCircle } from "lucide-react";
import React from "react";
import { Reveal } from "./Reveal";
import { Link } from "react-router-dom";

export const Pricing = ({ heading, subheading, plans, page }) => {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="container border-t border-gray-200 bg-gray-50 py-20 sm:py-32 max-w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="pricing-title"
              className="text-3xl font-bold tracking-tight text-gray-900 text-center"
            >
              {heading}
            </h2>
            <p className="mt-6 text-lg max-w-prose text-gray-600 text-center">{subheading}</p>
          </div>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map(
            (plan, index) =>
              index !== plans.length - 1 && (
                <Reveal direction="bottom" key={`pricing${index}`}>
                  <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
                    <h3 className="flex items-center text-sm font-semibold text-gray-900">
                      {plan.image}
                      <span className="ml-4">{plan.name}</span>
                    </h3>
                    <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
                      {plan.price}
                    </p>
                    <p className="mt-3 text-sm text-gray-700">{plan.detail}</p>
                    <div className="order-last mt-6">
                      <ul
                        role="list"
                        className="-my-2 divide-y text-sm divide-gray-200 text-gray-700"
                      >
                        {plan.features.map((item, index) => (
                          <li key={index} className="flex items-center py-2">
                            <CheckCircle
                              className="text-[var(--primary)]"
                              width={24}
                              height={24}
                            />
                            <span className="ml-4">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      className="inline-flex justify-center rounded-lg py-3 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-900 text-[var(--secondary)] hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
                      aria-label="Get started with the Starter plan for [object Object]"
                      href="/"
                    >
                      {plan.button}
                    </Link>
                  </section>
                </Reveal>
              )
          )}
          <Reveal direction="bottom">
            <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 order-first bg-gray-900 lg:order-none">
              <h3 className="flex items-center text-sm font-semibold text-white">
                {plans[plans.length - 1].image}
                <span className="ml-4">{plans[plans.length - 1].name}</span>
              </h3>
              <p className="relative mt-5 flex text-3xl tracking-tight text-white">
                <span aria-hidden="false" className="transition duration-300">
                  {plans[plans.length - 1].price}
                </span>
              </p>
              <p className="mt-3 text-sm text-gray-300">
                {plans[plans.length - 1].detail}
              </p>
              <div className="order-last mt-6">
                <ul
                  role="list"
                  className="-my-2 divide-y text-sm divide-gray-800 text-gray-300"
                >
                  {plans[plans.length - 1].features.map((item, index) => (
                    <li key={index} className="flex items-center py-2">
                      <CheckCircle
                        className="text-white"
                        width={24}
                        height={24}
                      />
                      <span className="ml-4">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className={`inline-flex justify-center rounded-lg py-3 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-[var(--primary)] text-[var(--primary-foreground)] before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-[#EF864A] active:text-white/80 before:transition-colors mt-6`}
                aria-label="Get started with the VIP plan for [object Object]"
                href="/"
              >
                {plans[plans.length - 1].button}
              </Link>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
