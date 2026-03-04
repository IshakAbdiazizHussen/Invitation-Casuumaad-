"use client";

import { useState } from "react";
import MainContent from "./MainContent/page";
import Works from "./Works/page";
import Plan from "./Plan/page";
import Trust from "./Trust/page";
import Footer from "./Footer/page";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventName: "Wedding Celebration",
    eventDate: "2026-12-25",
    eventTime: "18:00",
    location: "Grand Hotel Ballroom",
    notes: "",
  });
  const [eventPreview, setEventPreview] = useState({
    eventName: "Wedding Celebration",
    eventDateTime: "Dec 25, 2026 • 6:00 PM",
    location: "Grand Hotel Ballroom",
  });

  function goToHowItWorks() {
    setIsHowItWorksOpen(false);
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const parsedDate = new Date(`${formData.eventDate}T${formData.eventTime || "00:00"}`);
    const eventDateTime = Number.isNaN(parsedDate.getTime())
      ? "Select date & time"
      : parsedDate.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).replace(",", " •");

    setEventPreview({
      eventName: formData.eventName || "Untitled Event",
      eventDateTime,
      location: formData.location || "Location not set",
    });
    setIsFormOpen(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="border-t-8 border-sky-400 bg">
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur">
    <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between md:py-6">
    
    {/* Left: Logo/Title */}
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-bold text-blue-600">Casuumaad</h1>
    </div>

    {/* Center: Navigation Menu */}
    <nav className="w-full md:absolute md:left-1/2 md:w-auto md:-translate-x-1/2">
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base md:gap-10">
        <li><a href="#home" className="text-gray-700 hover:text-sky-500 font-medium transition-colors duration-300">Home</a></li>
        <li><a href="#features" className="text-gray-700 hover:text-sky-500 font-medium transition-colors duration-300">Features</a></li>
        <li><a href="#how-it-works" className="text-gray-700 hover:text-sky-500 font-medium transition-colors duration-300">How it works</a></li>
        <li><a href="#pricing" className="text-gray-700 hover:text-sky-500 font-medium transition-colors duration-300">Pricing</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-sky-500 font-medium transition-colors duration-300">Contact</a></li>
      </ul>
    </nav>

    {/* Right: Button */}
    <div className="w-full md:w-auto">
      <button
        type="button"
        onClick={() => setIsFormOpen(true)}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-300 hover:bg-sky-500 md:w-auto"
      >
        Get Started
      </button>
    </div>

  </div>
  </header>

      <section id="home" className="scroll-mt-32 bg-gradient-to-l from-sky-50 to-sky-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side: Text + Buttons */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Send Invitations <br className="hidden sm:block" />
          <span className="text-blue-600">Instantly</span> with <br className="hidden sm:block" />
          Casuumaad
        </h1>

        <p className="mb-10 text-base text-gray-600 sm:text-lg">
          Create events, manage guests, and send invitations through <br className="hidden md:block" />
          SMS & WhatsApp — fast and effortless.
        </p>

        {/* Buttons Side by Side */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-colors duration-300 hover:bg-blue-700 sm:w-auto"
          >
            Start Now →
          </button>

          <button
            type="button"
            onClick={() => setIsHowItWorksOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-600 px-8 py-4 font-medium text-blue-600 shadow-lg transition-colors duration-300 hover:bg-blue-50 sm:w-auto"
          >
            ▶️ See How It Works
          </button>
        </div>
      </div>

      {/* Right Side: Phone Mockup with Animated Success Popup */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-sm">
          {/* Main Phone Frame */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-gray-900 overflow-hidden">
            
            {/* Animated Success Notification Popup */}
            <div className="absolute left-1/2 top-4 -translate-x-1/2 animate-slideDown">
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-2xl sm:px-6 sm:py-4">

                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 sm:text-base">Sent Successfully</p>
                  <p className="text-sm text-gray-600">250 invitations</p>
                </div>
              </div>
            </div>

            {/* Phone Content */}
            <div className="mt-20"> {/* Extra top margin to make space for popup */}
              <h2 className="mb-2 text-center text-xl font-bold sm:text-2xl">Create Event</h2>
              <p className="text-center text-gray-600 text-sm mb-8">Set up your invitation</p>

              <div className="space-y-6">
                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Event Name</p>
                  <p className="font-medium">{eventPreview.eventName}</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-medium">{eventPreview.eventDateTime}</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{eventPreview.location}</p>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg mt-8 font-medium hover:bg-blue-700 transition">
                Continue to Guest List →
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    <section id="features" className="scroll-mt-32">
      <MainContent />
    </section>
    <section id="how-it-works" className="scroll-mt-32">
      <Works />
    </section>
    <section id="pricing" className="scroll-mt-32">
      <Plan />
    </section>
    <section id="testimonials" className="scroll-mt-32">
      <Trust />
    </section>
    <section id="contact" className="scroll-mt-32">
      <Footer />
    </section>

    {isFormOpen && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
        <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Get Started</h2>
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="rounded-md px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              Close
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="eventType"
              placeholder="Event Type (Wedding, Meeting, etc.)"
              value={formData.eventType}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="eventName"
              required
              placeholder="Event Name"
              value={formData.eventName}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="date"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
              <input
                type="time"
                name="eventTime"
                required
                value={formData.eventTime}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="text"
              name="location"
              required
              placeholder="Event Location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <textarea
              rows="4"
              name="notes"
              placeholder="Tell us about your event..."
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )}

    {isHowItWorksOpen && (
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            <button
              type="button"
              onClick={() => setIsHowItWorksOpen(false)}
              className="rounded-md px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              Close
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
              <p className="mb-2 text-sm font-semibold text-sky-700">Step 1</p>
              <h3 className="font-bold text-gray-900">Create Event</h3>
              <p className="mt-2 text-sm text-gray-600">Add event name, date, time, and location in seconds.</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
              <p className="mb-2 text-sm font-semibold text-sky-700">Step 2</p>
              <h3 className="font-bold text-gray-900">Add Guests</h3>
              <p className="mt-2 text-sm text-gray-600">Upload your guest list and organize groups quickly.</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
              <p className="mb-2 text-sm font-semibold text-sky-700">Step 3</p>
              <h3 className="font-bold text-gray-900">Send Instantly</h3>
              <p className="mt-2 text-sm text-gray-600">Send beautiful invitations through SMS and WhatsApp.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-end gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsHowItWorksOpen(false)}
              className="rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              Maybe Later
            </button>
            <button
              type="button"
              onClick={goToHowItWorks}
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              View Full Section
            </button>
          </div>
        </div>
      </div>
    )}

</div>
  );
}
