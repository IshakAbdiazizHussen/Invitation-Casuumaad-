import React from 'react';
import { Calendar, Users, MessageCircle, Send } from 'lucide-react';

export default function MainContent({ onFeatureClick }) {
  const features = [
    {
      id: "setup",
      icon: Calendar,
      iconClass: "bg-emerald-100 text-emerald-700",
      title: "Smart Event Setup",
      description: "Create your event in minutes with date, time, location, and custom message options.",
      cta: "Create Event",
    },
    {
      id: "guests",
      icon: Users,
      iconClass: "bg-pink-100 text-pink-800",
      title: "Guest List Management",
      description: "Add, edit, and group guests quickly so every invitation goes to the right people.",
      cta: "Add Guests",
    },
    {
      id: "delivery",
      icon: MessageCircle,
      iconClass: "bg-green-100 text-green-800",
      title: "WhatsApp and SMS Delivery",
      description: "Send invitations instantly through WhatsApp and SMS with one click.",
      cta: "See Delivery Flow",
    },
    {
      id: "status",
      icon: Send,
      iconClass: "bg-orange-100 text-orange-800",
      title: "Real-Time Delivery Status",
      description: "Track sent invitations and see delivery progress in a clear live dashboard.",
      cta: "View Testimonials",
    },
  ];

  return (
    <div className='mt-20 px-4 sm:px-6 lg:mt-32 lg:px-8'>
      <section className='text-center'>
        <h1 className='text-3xl font-bold sm:text-4xl'>
          Powerful Features to <span className='text-emerald-700'>Simplify Your Events</span>
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-gray-600'>
          Everything you need to create events, manage guests, and send invitations clearly and fast.
        </p>
      </section>

      <section className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <button
              type="button"
              key={feature.title}
              onClick={() => onFeatureClick?.(feature.id)}
              className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl transition-shadow hover:shadow-xl"
            >
              <div className="mb-6">
                <Icon size={48} className={`rounded-2xl p-4 ${feature.iconClass}`} />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
              <p className="mt-4 font-semibold text-emerald-700">{feature.cta} →</p>
            </button>
          );
        })}
      </section>
    </div>
  );
}
