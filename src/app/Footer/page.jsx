"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer({ onFooterAction }) {
  const phoneNumber = "+252610909060";
  const emailAddress = "ishakabdiaziz9060@gamil.com";
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  const footerGroups = [
    {
      title: "Company",
      links: [
        { label: "About", href: "#home" },
        { label: "Blog", href: "#home" },
        { label: "Press", href: "#home" },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "#contact" },
        { label: "Help Center", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <div className='bg-teal-950 text-white'>
      <section className='p-8 sm:p-12 lg:p-20'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div>
            <h1 className='text-2xl font-bold text-amber-300'>Casuumaad</h1>
            <p className='mt-3 max-w-md text-gray-300'>
              The easiest way to create, manage, and send event invitations through SMS and WhatsApp.
            </p>

            <section className='mt-5 flex gap-3'>
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className='rounded bg-gray-600 p-2 transition-colors hover:bg-gray-500'
                  >
                    <Icon className='h-5 w-5 text-amber-200' />
                  </a>
                );
              })}
            </section>
          </div>

          <div className='grid gap-6 sm:grid-cols-3'>
            {footerGroups.map((group) => (
              <section key={group.title}>
                <h2 className='mb-3 font-semibold text-white'>{group.title}</h2>
                <div className='space-y-2 text-gray-300'>
                  {group.links.map((link) => (
                    <a key={link.label} href={link.href} className='block hover:text-amber-200'>
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className='mt-10 rounded-2xl border border-teal-800 bg-teal-900/40 p-4 sm:p-5'>
          <p className='text-sm text-gray-300'>Quick Actions</p>
          <div className='mt-3 flex flex-col gap-3 sm:flex-row'>
            <button
              type="button"
              onClick={() => onFooterAction?.("setup")}
              className='rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700'
            >
              Start Setup
            </button>
            <button
              type="button"
              onClick={() => onFooterAction?.("send")}
              className='rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700'
            >
              Send Invitation
            </button>
            <button
              type="button"
              onClick={() => onFooterAction?.("status")}
              className='rounded-lg border border-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800'
            >
              Live Status
            </button>
          </div>
        </section>

        <section className='mt-4 rounded-2xl border border-teal-800 bg-teal-900/40 p-4 sm:p-5'>
          <p className='text-sm text-gray-300'>Direct Contact</p>
          <div className='mt-2 space-y-2'>
            <a href={`tel:${phoneNumber}`} className='block text-sm text-amber-200 hover:text-amber-100'>
              Phone: {phoneNumber}
            </a>
            <a href={`mailto:${emailAddress}`} className='block text-sm text-amber-200 hover:text-amber-100'>
              Email: {emailAddress}
            </a>
          </div>
          <div className='mt-4 flex flex-col gap-3 sm:flex-row'>
            <a
              href={`tel:${phoneNumber}`}
              className='rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-700'
            >
              Call Now
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className='rounded-lg bg-amber-500 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-amber-600'
            >
              Send Email
            </a>
          </div>
        </section>

        <p className='mt-8 text-sm text-gray-400'>© {new Date().getFullYear()} Casuumaad. All rights reserved.</p>
      </section>
    </div>
  )
}
