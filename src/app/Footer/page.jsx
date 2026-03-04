import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className='bg-slate-800 text-white'>
        <section className='p-8 sm:p-12 lg:p-20'>
            <h1 className='text-sky-400'>Invitational</h1>
            <p>The easiest way to create, manage and send event <br />invitations throughy SMS and WhatsApp</p>
            
            
            <section className='flex gap-5'>
                <div>
                <Facebook className='text-sky-400 bg-gray-500 rounded p-1 w-8 h-8' size={18}/>
            </div>

            <div>
                <Twitter className='text-sky-400 bg-gray-500 rounded p-1 w-8 h-8' size={18}/>
            </div>

            <div>
                <Instagram className='text-sky-400 bg-gray-500 rounded p-1 w-8 h-8' size={18}/>
            </div>

            <div>
                <Linkedin className='text-sky-400 bg-gray-500 rounded p-1 w-8 h-8' size={18}/>
            </div>
            </section>

            <section className='mt-8 flex flex-col gap-6 sm:flex-row sm:gap-12'>
                <div>
                    <h1>Company</h1>
                    <p>About</p>
                     <p>Categories</p>
                      <p>Blog</p>
                       <p>Press</p>
                </div>

                <div>
                    <h1>Product</h1>
                    <p>Features</p>
                     <p>Pricing</p>
                      <p>Templetes</p>
                       <p>Intelligations</p>
                </div>

                <div>
                    <h1>Support</h1>
                    <p>FAQs</p>
                     <p>Help Center</p>
                      <p>Contact</p>
                       <p>Privacy Policy</p>
                </div>

                
            </section>
            
        </section>
    </div>
  )
}
