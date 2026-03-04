import React from 'react'
import { CirclePlus, UserPlus, Pen, Zap } from "lucide-react";

export default function Works() {
  return (
    <div className='bg-gradient-to-l from-sky-50 to-sky-50 min-h-screen px-4 sm:px-6 lg:px-8'>
        <section className='mt-20 p-5 text-center lg:mt-40'>
            <h1 className='text-3xl font-bold sm:text-4xl'>How <span className='text-blue-700'>Invitation</span> Works</h1>
            <p>Discover top talents, connect with experts, and unlock new opportunities.</p>
        </section>

        <section className='mt-10 flex flex-wrap justify-center gap-6 lg:mt-20'>
            <div className="w-full max-w-sm min-h-80 rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl">
            {/* Icon */}
            <div className="mb-6">
                <CirclePlus
                size={48} 
                className="p-4 bg-blue-600 text-white rounded-2xl" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Event Creation
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
                Set your event date or create a bucket <br />
                from the day you want to start and end.
            </p>
            </div>

            <div className="w-full max-w-sm min-h-72 rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl transition-shadow">
            {/* Icon */}
            <div className="mb-6">
                <UserPlus
                size={48} 
                className="p-4 bg-purple-600 text-white rounded-2xl" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Event Creation
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
                Set your event date or create a bucket <br />
                from the day you want to start and end.
            </p>
            </div>

            <div className="w-full max-w-sm min-h-80 rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl transition-shadow">
            {/* Icon */}
            <div className="mb-6">
                <Pen
                size={48} 
                className="p-4 bg-green-600 text-white rounded-2xl" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Event Creation
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
                Set your event date or create a bucket <br />
                from the day you want to start and end.
            </p>
            </div>

            <div className="w-full max-w-sm min-h-72 rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl transition-shadow">
            {/* Icon */}
            <div className="mb-6">
                <Zap
                size={48} 
                className="p-4 bg-orange-600 text-white rounded-2xl" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Event Creation
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
                Set your event date or create a bucket <br />
                from the day you want to start and end.
            </p>
            </div>

        </section>
    </div>
  )
}
