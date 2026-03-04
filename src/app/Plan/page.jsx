import React from 'react'

export default function Plan() {
  return (
    <div>
        <section className='mt-20 px-4 text-center sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold sm:text-4xl'>Simple, <span className='text-blue-800'>Affordable Pricing</span></h1>
            <p>Flexible Plans for Every Business</p>
        </section>

            <div className='mt-8 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-10'>
            <section>
            <div className="mt-6 w-full max-w-md min-h-[28rem] rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl">

            {/* Title */}
            <h3 className="text-xl font-bold text-center">
                Weekly Plan
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-center">
                PLans Makes You Success
            </p>
            <h1 className='mt-6 text-center text-3xl font-bold'>$9.99 <span className='ml-2 text-xl font-medium text-gray-400'>/ 7 Days</span></h1>
            <section className='mt-10'>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>

            </section>

            <button className="w-full bg-gray-100 text-black py-4 rounded-lg mt-8 font-medium transition">
                Activate Weekly
              </button>

            </div>
        </section>

            <section>
                <p className='text-center bg-blue-700 w-40 rounded-4xl text-white mx-auto'>★Recomended</p>
                <div className="w-full max-w-md min-h-[28rem] rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl border-2 border-sky-300">

            {/* Title */}

            <h3 className="text-xl font-bold text-center">
                Monthly Plan
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-center">
                Best value of our guest more than number
            </p>
            <h1 className='mt-6 text-center text-3xl font-bold'>$29.99 <span className='ml-2 text-xl font-medium text-gray-400'>/ 30 Days</span></h1>
            <section className='mt-10'>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>
                <p><span className=" bg-sky-200 text-sky-600 rounded">✓</span> Active sending requests about plan</p>

            </section>

            <button className="w-full bg-blue-700 text-white py-4 rounded-lg mt-8 font-medium  transition">
                Activate Monthly
              </button>

            </div>
        </section>

            </div>
        
        
    </div>
  )
}
