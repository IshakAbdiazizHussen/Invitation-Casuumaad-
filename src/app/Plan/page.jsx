"use client";

import React, { useState } from 'react'

export default function Plan({ onPlanSelect }) {
  const plans = [
    {
      id: "weekly",
      name: "Weekly Plan",
      price: "$9.99",
      period: "/ 7 Days",
      subtitle: "Great for testing your first campaign",
      recommended: false,
      features: [
        "Up to 250 invitations",
        "WhatsApp and SMS sending",
        "Live delivery status",
        "Basic guest grouping",
        "Email support",
      ],
    },
    {
      id: "monthly",
      name: "Monthly Plan",
      price: "$29.99",
      period: "/ 30 Days",
      subtitle: "Best value for regular events and teams",
      recommended: true,
      features: [
        "Up to 2000 invitations",
        "Priority send queue",
        "Advanced live status board",
        "Guest tags and segmentation",
        "Priority support",
      ],
    },
  ];

  const [activePlanId, setActivePlanId] = useState("monthly");
  const activePlan = plans.find((plan) => plan.id === activePlanId) || plans[0];

  return (
    <div>
      <section className='mt-20 px-4 text-center sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold sm:text-4xl'>Simple, <span className='text-emerald-800'>Affordable Pricing</span></h1>
        <p className='mt-2 text-gray-600'>Choose a plan and activate it instantly.</p>
      </section>

      <div className='mt-8 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-10'>
        {plans.map((plan) => {
          const isActive = activePlanId === plan.id;
          return (
            <section key={plan.id} className="w-full max-w-md">
              {plan.recommended && (
                <p className='mx-auto mb-2 w-40 rounded-4xl bg-amber-500 text-center text-white'>★ Recommended</p>
              )}
              <button
                type="button"
                onClick={() => {
                  setActivePlanId(plan.id);
                  onPlanSelect?.(plan.id);
                }}
                className={`w-full min-h-[28rem] rounded-2xl border bg-white p-8 text-left shadow-2xl transition-all hover:shadow-xl ${
                  isActive ? "border-2 border-emerald-400 ring-2 ring-emerald-200" : "border-gray-100"
                }`}
              >
                <h3 className="text-center text-xl font-bold">{plan.name}</h3>
                <p className="text-center leading-relaxed text-gray-600">{plan.subtitle}</p>
                <h1 className='mt-6 text-center text-3xl font-bold'>
                  {plan.price} <span className='ml-2 text-xl font-medium text-gray-400'>{plan.period}</span>
                </h1>
                <section className='mt-8 space-y-2'>
                  {plan.features.map((feature) => (
                    <p key={feature}>
                      <span className="rounded bg-emerald-200 text-emerald-700">✓</span> {feature}
                    </p>
                  ))}
                </section>
                <p className={`mt-8 rounded-lg py-4 text-center font-medium transition ${
                  plan.recommended ? "bg-emerald-600 text-white" : "bg-gray-100 text-black"
                }`}>
                  Activate {plan.name.replace(" Plan", "")}
                </p>
              </button>
            </section>
          );
        })}
      </div>

      <section className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-emerald-200 bg-white p-6 shadow-lg">
        <p className="text-sm font-semibold text-emerald-700">Selected Plan</p>
        <h3 className="mt-1 text-2xl font-bold text-gray-900">{activePlan.name}</h3>
        <p className="mt-2 text-gray-600">{activePlan.subtitle}</p>
        <button
          type="button"
          onClick={() => onPlanSelect?.(activePlan.id)}
          className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Continue with {activePlan.name}
        </button>
      </section>
    </div>
  )
}
