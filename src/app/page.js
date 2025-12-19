import Image from "next/image";

export default function Home() {
  return (
    <div className="border-t-8 border-sky-400">
    <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
    
    {/* Left: Logo/Title */}
    <div>
      <h1 className="text-2xl font-bold text-blue-600">Casuumaad</h1>
    </div>

    {/* Center: Navigation Menu */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <ul className="flex space-x-10">
        <li className="text-gray-700 hover:text-sky-400 cursor-wait font-medium transition-colors">Home</li>
        <li className="text-gray-700 hover:text-sky-400 cursor-pointer font-medium transition-colors">Features</li>
        <li className="text-gray-700 hover:text-sky-400 cursor-pointer font-medium transition-colors">How it works</li>
        <li className="text-gray-700 hover:text-sky-400 cursor-pointer font-medium transition-colors">Pricing</li>
        <li className="text-gray-700 hover:text-sky-400 cursor-pointer font-medium transition-colors">Contact</li>
      </ul>
    </div>

    {/* Right: Button */}
    <div>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition font-medium shadow-lg">
        Get Started
      </button>
    </div>

  </div>

      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side: Text + Buttons */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Send Invitations <br />
          <span className="text-blue-600">Instantly</span> with <br />
          Casuumaad
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Create events, manage guests, and send invitations through <br />
          SMS & WhatsApp — fast and effortless.
        </p>

        {/* Buttons Side by Side */}
        <div className="flex flex-wrap gap-6">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 shadow-lg font-medium transition flex items-center gap-2">
            Start Now →
          </button>

          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 shadow-lg font-medium transition flex items-center gap-2">
            ▶️ See How It Works
          </button>
        </div>
      </div>

      {/* Right Side: Phone Mockup with Animated Success Popup */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative max-w-sm w-full">
          {/* Main Phone Frame */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-gray-900 overflow-hidden">
            
            {/* Animated Success Notification Popup */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 animate-slideDown">
              <div className="bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 border border-gray-200">

                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium text-gray-800">Sent Successfully</p>
                  <p className="text-sm text-gray-600">250 invitations</p>
                </div>
              </div>
            </div>

            {/* Phone Content */}
            <div className="mt-20"> {/* Extra top margin to make space for popup */}
              <h2 className="text-2xl font-bold text-center mb-2">Create Event</h2>
              <p className="text-center text-gray-600 text-sm mb-8">Set up your invitation</p>

              <div className="space-y-6">
                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Event Name</p>
                  <p className="font-medium">Wedding Celebration</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-medium">Dec 25, 2024 • 6:00 PM</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">Grand Hotel Ballroom</p>
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



</div>
  );
}
