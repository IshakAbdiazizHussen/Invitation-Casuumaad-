"use client";

import { useState } from "react";
import MainContent from "./MainContent/page";
import Works from "./Works/page";
import Plan from "./Plan/page";
import Trust from "./Trust/page";
import Footer from "./Footer/page";

export default function Home() {
  const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState({
    total: 0,
    pending: 0,
    sent: 0,
    failed: 0,
    history: [],
  });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventName: "Wedding Celebration",
    eventDate: "2026-12-25",
    eventTime: "18:00",
    timezone: detectedTimeZone,
    location: "Grand Hotel Ballroom",
    notes: "",
  });
  const [eventPreview, setEventPreview] = useState({
    eventName: "Wedding Celebration",
    eventDateTime: "Dec 25, 2026 • 6:00 PM (UTC)",
    timezone: detectedTimeZone,
    location: "Grand Hotel Ballroom",
  });

  const timezoneOptions = [
    "UTC",
    "Africa/Mogadishu",
    "Africa/Nairobi",
    "Europe/London",
    "Europe/Istanbul",
    "Asia/Dubai",
    "Asia/Riyadh",
    "Asia/Kolkata",
    "Asia/Kuala_Lumpur",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
  ];

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

    const timezoneLabel = formData.timezone || "UTC";
    setEventPreview({
      eventName: formData.eventName || "Untitled Event",
      eventDateTime: `${eventDateTime} (${timezoneLabel})`,
      timezone: timezoneLabel,
      location: formData.location || "Location not set",
    });
    setIsFormOpen(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function buildInviteMessage() {
    return `You're invited to ${eventPreview.eventName}. Date & Time: ${eventPreview.eventDateTime}. Timezone: ${eventPreview.timezone}. Location: ${eventPreview.location}.`;
  }

  function getPhoneForDelivery() {
    return formData.phone.replace(/[^\d+]/g, "").trim();
  }

  function openDelivery() {
    if (!getPhoneForDelivery()) {
      setIsFormOpen(true);
      return;
    }
    setIsDeliveryOpen(true);
  }

  function sendWhatsApp() {
    const phone = getPhoneForDelivery().replace(/\D/g, "");
    if (!phone) return;
    queueDelivery("WhatsApp", phone);
    const text = encodeURIComponent(buildInviteMessage());
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  function sendSms() {
    const phone = getPhoneForDelivery();
    if (!phone) return;
    queueDelivery("SMS", phone);
    const body = encodeURIComponent(buildInviteMessage());
    window.open(`sms:${phone}?&body=${body}`, "_blank", "noopener,noreferrer");
  }

  function queueDelivery(channel, recipient) {
    const id = Date.now();
    const createdAt = new Date().toLocaleTimeString();

    setDeliveryStatus((prev) => ({
      ...prev,
      total: prev.total + 1,
      pending: prev.pending + 1,
      history: [
        {
          id,
          channel,
          recipient,
          status: "Queued",
          createdAt,
        },
        ...prev.history,
      ].slice(0, 20),
    }));

    setTimeout(() => {
      const isSuccess = true;
      setDeliveryStatus((prev) => ({
        ...prev,
        pending: Math.max(0, prev.pending - 1),
        sent: prev.sent + (isSuccess ? 1 : 0),
        failed: prev.failed + (isSuccess ? 0 : 1),
        history: prev.history.map((item) =>
          item.id === id ? { ...item, status: isSuccess ? "Sent" : "Failed" } : item
        ),
      }));
    }, 1400);
  }

  function handleFeatureClick(featureId) {
    if (featureId === "setup" || featureId === "guests") {
      setIsFormOpen(true);
      return;
    }

    if (featureId === "delivery") {
      openDelivery();
      return;
    }

    if (featureId === "status") {
      setIsStatusOpen(true);
    }
  }

  function handleWorksStepClick(stepId) {
    if (stepId === "create_event" || stepId === "add_guests" || stepId === "customize_message") {
      setIsFormOpen(true);
      return;
    }

    if (stepId === "send_track") {
      openDelivery();
      setIsStatusOpen(true);
    }
  }

  function handlePlanSelect(planId) {
    const planLabel = planId === "monthly" ? "Monthly Plan" : "Weekly Plan";
    setFormData((prev) => ({
      ...prev,
      eventType: planLabel,
      notes: prev.notes || `Selected ${planLabel}`,
    }));
    setIsFormOpen(true);
  }

  function handleTrustAction() {
    setIsFormOpen(true);
  }

  function handleFooterAction(action) {
    if (action === "setup") {
      setIsFormOpen(true);
      return;
    }

    if (action === "send") {
      openDelivery();
      return;
    }

    if (action === "status") {
      setIsStatusOpen(true);
    }
  }

  return (
    <div className="border-t-8 border-emerald-500 bg">
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-amber-50/90 backdrop-blur">
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 md:py-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-emerald-700">Casuumaad</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors duration-300 hover:bg-emerald-700 sm:px-6 sm:py-3 sm:text-base"
          >
            Get Started
          </button>
        </div>
      </div>

      <nav id="main-navigation" className="mt-4 border-t border-emerald-200 pt-3">
        <ul className="flex gap-2 overflow-x-auto pb-1">
          <li className="shrink-0"><a href="#home" className="block rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-700">Home</a></li>
          <li className="shrink-0"><a href="#features" className="block rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-700">Features</a></li>
          <li className="shrink-0"><a href="#how-it-works" className="block rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-700">How it works</a></li>
          <li className="shrink-0"><a href="#pricing" className="block rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-700">Pricing</a></li>
          <li className="shrink-0"><a href="#contact" className="block rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-700">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

      <section id="home" className="scroll-mt-32 bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side: Text + Buttons */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Send Invitations <br className="hidden sm:block" />
          <span className="text-emerald-700">Instantly</span> with <br className="hidden sm:block" />
          Casuumaad
        </h1>
        <p className="mb-4 inline-block rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          Theme Test Mode
        </p>

        <p className="mb-10 text-base text-gray-600 sm:text-lg">
          Create events, manage guests, and send invitations through <br className="hidden md:block" />
          SMS & WhatsApp — fast and effortless.
        </p>

        {/* Buttons Side by Side */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 font-medium text-white shadow-lg transition-colors duration-300 hover:bg-emerald-700 sm:w-auto"
          >
            Start Now →
          </button>

          <button
            type="button"
            onClick={() => setIsHowItWorksOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-amber-500 px-8 py-4 font-medium text-amber-700 shadow-lg transition-colors duration-300 hover:bg-amber-100 sm:w-auto"
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
            
            {/* Live delivery badge: queued -> sent */}
            {deliveryStatus.total > 0 && (
              <div className="absolute left-1/2 top-4 -translate-x-1/2 animate-slideDown">
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-2xl sm:px-6 sm:py-4">
                  {deliveryStatus.pending > 0 ? (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      ...
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                      ✓
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-800 sm:text-base">
                      {deliveryStatus.pending > 0 ? "Sending Invitation..." : "Sent Successfully"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {deliveryStatus.pending > 0
                        ? `${deliveryStatus.pending} pending`
                        : `${deliveryStatus.sent} invitations`}
                    </p>
                  </div>
                </div>
              </div>
            )}

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

              <button className="w-full bg-emerald-600 text-white py-4 rounded-lg mt-8 font-medium hover:bg-emerald-700 transition">
                Continue to Guest List →
              </button>
              <button
                type="button"
                onClick={openDelivery}
                className="mt-3 w-full rounded-lg border-2 border-amber-500 py-3 font-medium text-amber-700 transition-colors hover:bg-amber-100"
              >
                Send via WhatsApp / SMS
              </button>
              <button
                type="button"
                onClick={() => setIsStatusOpen(true)}
                className="mt-3 w-full rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                Open Live Delivery Status
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    <section id="features" className="scroll-mt-32">
      <MainContent onFeatureClick={handleFeatureClick} />
    </section>
    <section id="how-it-works" className="scroll-mt-32">
      <Works onStepAction={handleWorksStepClick} />
    </section>
    <section id="pricing" className="scroll-mt-32">
      <Plan onPlanSelect={handlePlanSelect} />
    </section>
    <section id="testimonials" className="scroll-mt-32">
      <Trust onTrustAction={handleTrustAction} />
    </section>
    <section id="contact" className="scroll-mt-32">
      <Footer onFooterAction={handleFooterAction} />
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number (with country code)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
            <input
              type="text"
              name="eventType"
              placeholder="Event Type (Wedding, Meeting, etc.)"
              value={formData.eventType}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
            <input
              type="text"
              name="eventName"
              required
              placeholder="Event Name"
              value={formData.eventName}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="date"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
              <input
                type="time"
                name="eventTime"
                required
                value={formData.eventTime}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>
            <select
              name="timezone"
              required
              value={formData.timezone}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            >
              {timezoneOptions.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="location"
              required
              placeholder="Event Location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
            <textarea
              rows="4"
              name="notes"
              placeholder="Tell us about your event..."
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
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
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="mb-2 text-sm font-semibold text-emerald-700">Step 1</p>
              <h3 className="font-bold text-gray-900">Create Event</h3>
              <p className="mt-2 text-sm text-gray-600">Add event name, date, time, and location in seconds.</p>
            </div>
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
              <p className="mb-2 text-sm font-semibold text-amber-700">Step 2</p>
              <h3 className="font-bold text-gray-900">Add Guests</h3>
              <p className="mt-2 text-sm text-gray-600">Upload your guest list and organize groups quickly.</p>
            </div>
            <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4">
              <p className="mb-2 text-sm font-semibold text-cyan-700">Step 3</p>
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
              className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white transition-colors hover:bg-emerald-700"
            >
              View Full Section
            </button>
          </div>
        </div>
      </div>
    )}

    {isDeliveryOpen && (
      <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 px-4">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Send Invitation Now</h2>
            <button
              type="button"
              onClick={() => setIsDeliveryOpen(false)}
              className="rounded-md px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              Close
            </button>
          </div>
          <p className="mb-2 text-sm text-gray-600">To: {getPhoneForDelivery() || "No phone number"}</p>
          <p className="mb-2 text-sm text-gray-600">Timezone: {eventPreview.timezone}</p>
          <p className="mb-6 rounded-lg bg-gray-50 p-3 text-sm text-gray-700">{buildInviteMessage()}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={sendWhatsApp}
              className="w-full rounded-lg bg-green-600 px-4 py-3 font-medium text-white hover:bg-green-700"
            >
              Send WhatsApp
            </button>
            <button
              type="button"
              onClick={sendSms}
              className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white hover:bg-emerald-700"
            >
              Send SMS
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsStatusOpen(true)}
            className="mt-3 w-full rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            View Live Status Board
          </button>
        </div>
      </div>
    )}

    {isStatusOpen && (
      <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 px-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Real-Time Delivery Status</h2>
            <button
              type="button"
              onClick={() => setIsStatusOpen(false)}
              className="rounded-md px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-xl font-bold">{deliveryStatus.total}</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3">
              <p className="text-xs text-yellow-700">Pending</p>
              <p className="text-xl font-bold text-yellow-700">{deliveryStatus.pending}</p>
            </div>
            <div className="rounded-lg bg-green-50 p-3">
              <p className="text-xs text-green-700">Sent</p>
              <p className="text-xl font-bold text-green-700">{deliveryStatus.sent}</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3">
              <p className="text-xs text-red-700">Failed</p>
              <p className="text-xl font-bold text-red-700">{deliveryStatus.failed}</p>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {deliveryStatus.history.length === 0 ? (
              <p className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                No deliveries yet. Send an invitation to see live updates.
              </p>
            ) : (
              deliveryStatus.history.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                  <div>
                    <p className="font-medium text-gray-800">{item.channel} to {item.recipient}</p>
                    <p className="text-xs text-gray-500">{item.createdAt}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "Sent"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Failed"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )}

</div>
  );
}
