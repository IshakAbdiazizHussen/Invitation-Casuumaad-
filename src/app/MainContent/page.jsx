import React from 'react';
import { Calendar, Users, MessageCircle, Send } from 'lucide-react';

export default function MainContent() {
  return (
    <div className='mt-20 px-4 sm:px-6 lg:mt-32 lg:px-8'>
        <section className='text-center'>
            <h1 className='text-3xl font-bold sm:text-4xl'>PowerFul Features to <span className='text-blue-600'>Simplify Your Events</span></h1>
            <p className='p-6'>Everything that you want to organise or create</p>
        </section>

        <section className='mt-6 flex flex-wrap justify-center gap-6'>
            <div className="w-full max-w-sm min-h-72 rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl transition-shadow">
            {/* Icon */}
            <div className="mb-6">
                <Calendar 
                size={48} 
                className="p-4 bg-sky-100 text-sky-700 rounded-2xl" />
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
                <Users 
                size={48} 
                className="p-4 bg-pink-100 text-pink-800 rounded-2xl" />
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
                <MessageCircle 
                size={48} 
                className="p-4 bg-green-100 text-green-800 rounded-2xl" />
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
                <Send 
                size={48} 
                className="p-4 bg-orange-100 text-orange-800 rounded-2xl" />
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
