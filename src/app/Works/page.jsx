"use client";

import React, { useState } from 'react'
import { CirclePlus, UserPlus, Pen, Zap } from "lucide-react";

export default function Works({ onStepAction }) {
  const steps = [
    {
      id: "create_event",
      icon: CirclePlus,
      iconClass: "bg-emerald-600",
      step: "Step 1",
      title: "Create Your Event",
      description: "Set event name, date, time, timezone, and location in one simple form.",
      action: "Fill event form and save details.",
    },
    {
      id: "add_guests",
      icon: UserPlus,
      iconClass: "bg-purple-600",
      step: "Step 2",
      title: "Add Guest Contacts",
      description: "Upload or enter guest phone numbers and group them for faster sending.",
      action: "Add phone numbers with country code.",
    },
    {
      id: "customize_message",
      icon: Pen,
      iconClass: "bg-green-600",
      step: "Step 3",
      title: "Customize Invitation Message",
      description: "Write your invitation details and personalize it for your guests.",
      action: "Review message before sending.",
    },
    {
      id: "send_track",
      icon: Zap,
      iconClass: "bg-orange-600",
      step: "Step 4",
      title: "Send and Track Live Status",
      description: "Send via WhatsApp or SMS, then monitor queued, sent, and failed in real time.",
      action: "Open status board and monitor progress.",
    },
  ];
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];

  return (
    <div className='bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 min-h-screen px-4 sm:px-6 lg:px-8 animate-enter'>
        <section className='mt-20 p-5 text-center lg:mt-40'>
            <h1 className='text-3xl font-bold sm:text-4xl'>How <span className='text-emerald-700'>Invitation</span> Works</h1>
            <p className='mx-auto mt-3 max-w-2xl text-gray-600'>
              Follow these 4 clear steps to create your event, send invitations, and track delivery status.
            </p>
        </section>

        <section className='mt-10 flex flex-wrap justify-center gap-6 lg:mt-20 animate-enter-delay-1'>
          {steps.map((item) => {
            const Icon = item.icon;
            const isActive = item.step === activeStep.step;
            return (
              <button
                type="button"
                key={item.step}
                onClick={() => {
                  setActiveStepIndex(steps.findIndex((s) => s.step === item.step));
                  onStepAction?.(item.id);
                }}
                className={`w-full max-w-sm rounded-2xl border bg-white p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isActive ? "border-emerald-500 ring-2 ring-emerald-200" : "border-gray-100"
                }`}
              >
                <p className="mb-3 text-sm font-semibold text-emerald-700">{item.step}</p>
                <div className="mb-6">
                  <Icon
                    size={48}
                    className={`rounded-2xl p-4 text-white animate-bob ${item.iconClass}`}
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </button>
            );
          })}
        </section>

        <section className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-emerald-200 bg-white p-6 shadow-lg animate-enter-delay-2">
          <p className="text-sm font-semibold text-emerald-700">Active Step</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-900">{activeStep.step}: {activeStep.title}</h3>
          <p className="mt-2 text-gray-600">{activeStep.description}</p>
          <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">{activeStep.action}</p>
          <button
            type="button"
            onClick={() => onStepAction?.(activeStep.id)}
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Run This Step
          </button>
        </section>
    </div>
  )
}
