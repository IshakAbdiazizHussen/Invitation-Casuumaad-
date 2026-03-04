"use client";

import React, { useState } from 'react'

export default function Trust({ onTrustAction }) {
  const testimonials = [
    {
      id: "ishak",
      initials: "IA",
      name: "Ishak A.",
      role: "Event Director",
      rating: "★★★★★",
      quote: "Casuumaad helped us send hundreds of invitations in minutes with clear delivery updates.",
    },
    {
      id: "amina",
      initials: "AH",
      name: "Amina H.",
      role: "Business Owner",
      rating: "★★★★★",
      quote: "The WhatsApp and SMS flow is simple. My team now handles event invites without stress.",
    },
    {
      id: "yusuf",
      initials: "YM",
      name: "Yusuf M.",
      role: "Community Organizer",
      rating: "★★★★★",
      quote: "The live status board made follow-up easy. I could see sent and pending invitations instantly.",
    },
  ];

  const [activeId, setActiveId] = useState(testimonials[0].id);
  const active = testimonials.find((item) => item.id === activeId) || testimonials[0];

  return (
    <div className='bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 min-h-screen px-4 sm:px-6 lg:px-8'>
        <section className='text-center mt-20'>
            <h1 className='text-3xl font-bold p-4 sm:text-4xl'>Trusted by <span className='text-emerald-700'>Event Organizers</span></h1>
            <p className='mx-auto max-w-2xl text-gray-600'>Real feedback from users managing events with Casuumaad.</p>

            <div className='mt-10 flex flex-col items-center gap-6 lg:mt-20 lg:flex-row lg:justify-center lg:gap-12'>
              {testimonials.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full max-w-md min-h-56 rounded-2xl border bg-white p-8 text-left shadow-2xl transition-all hover:shadow-xl ${
                      isActive ? "border-2 border-amber-400 ring-2 ring-amber-100" : "border-gray-100"
                    }`}
                  >
                    <div className='flex gap-5'>
                      <div>
                        <p className="rounded-2xl bg-emerald-500 p-2 font-bold text-white">
                          {item.initials}
                        </p>
                      </div>

                      <div>
                        <h3 className='font-bold'>{item.name}</h3>
                        <p className='text-gray-500'>{item.role}</p>
                      </div>
                    </div>

                    <div className="mt-8 text-gray-600">
                      <p className='text-orange-400'>{item.rating}</p>
                      <p className='mt-2'>{item.quote}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className='mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-emerald-200 bg-white p-6 text-left shadow-lg'>
              <p className='text-sm font-semibold text-emerald-700'>Selected Testimonial</p>
              <h3 className='mt-1 text-2xl font-bold text-gray-900'>{active.name} - {active.role}</h3>
              <p className='mt-2 text-gray-600'>{active.quote}</p>
              <button
                type="button"
                onClick={() => onTrustAction?.()}
                className='mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700'
              >
                Start Your Event Setup
              </button>
            </div>
        </section>
    </div>
  )
}
