'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Montserrat, Open_Sans, Roboto } from 'next/font/google'

// Font configurations
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

// ActionButton component
const ActionButton = ({ href, className, children }: { 
  href: string; 
  className?: string; 
  children: React.ReactNode 
}) => {
  return (
    <Link 
      href={href} 
      className={`inline-block rounded-lg transition-all duration-300 ${className}`}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
    >
      {children}
    </Link>
  );
};

// Learning points component
const LearningPoints = () => {
  const points = [
    'Personal branding tips',
    'Crafting an impressive resume',
    'LinkedIn profile optimisation',
    'Effective networking strategies',
    'Creating a personalized action plan'
  ];

  return (
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="text-yellow-300 mr-2">•</span>
          <span className="text-lg sm:text-xl">{point}</span>
        </li>
      ))}
    </ul>
  );
};

// Workshop Details component
const WorkshopDetails = () => {
  return (
    <div className="space-y-4">
      <h2 className={`${montserrat.variable} font-montserrat text-2xl sm:text-3xl font-semibold mb-6`}>
        Workshop Details:
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-yellow-300 mr-2">•</span>
          <span className="text-lg sm:text-xl">Date: Coming Soon</span>
        </li>
        <li className="flex items-start">
          <span className="text-yellow-300 mr-2">•</span>
          <span className="text-lg sm:text-xl">Time: To be announced</span>
        </li>
        <li className="flex items-start">
          <span className="text-yellow-300 mr-2">•</span>
          <span className="text-lg sm:text-xl">Mode: Online</span>
        </li>
        <li className="flex items-start">
          <span className="text-yellow-300 mr-2">•</span>
          <span className="text-lg sm:text-xl">Duration: 2 hours</span>
        </li>
      </ul>
    </div>
  );
};

// Expert Profile component
const ExpertProfile = () => {
  return (
    <div className="bg-[#E85F5C] p-6 sm:p-8 rounded-lg shadow-lg">
      <h2 className={`${montserrat.variable} font-montserrat text-2xl sm:text-3xl font-semibold mb-6 text-white`}>
        Meet the Facilitator
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-48 h-48 relative rounded-full overflow-hidden">
          <Image
            src="/KK.jpeg"
            alt="Expert's profile picture"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className={`${montserrat.variable} font-montserrat text-xl font-semibold mb-2 text-white`}>
            Karthik Kesav
          </h3>
          <p className="text-lg mb-4 text-white">Entrepreneur | Trainer | Consultant </p>
          <p className="text-white">
          Karthik Kesav is an experienced entrepreneur, management consultant, and learning & development expert. With over 12 years in the industry, he has a proven track record of driving business growth, mentoring, and coaching. Karthik is the co-founder of Pragmatix Learning Edutech, where he has scaled the company to become a leading placement training provider in Kerala. He has also worked as a consultant for various startups, advising on growth strategies, learning & development, and operations. Karthik is an alumnus of IIM Kozhikode and is a sought-after speaker at events. 
          </p>
        </div>
      </div>
    </div>
  );
};

// Company Details component
const CompanyDetails = () => {
  return (
    <div className="bg-[#0D98B9] text-white p-6 sm:p-8 rounded-lg shadow-lg">
      <h2 className={`${montserrat.variable} font-montserrat text-2xl sm:text-3xl font-semibold mb-6`}>
        Pragmatix Learning
      </h2>
      <p className="text-lg mb-4">
      Pragmatix Learning was founded in 2015 with a vision to bridge the gap between academic education and industry requirements. Our journey began with a small team of passionate educators and industry experts who believed in the power of practical, hands-on learning.
      </p>
      <p className="text-lg mb-4">
      If you run in placement circles of colleges in Kerala, you’ve surely heard of PRAGMATIX. Over the past few years, PRAGMATIX has become one of Kerala’s leading training and development service providers for educational institutions.
      </p>
      <p className="text-lg">
      Today, we are as bustling as ever, with a lot more up our sleeves, than just placement training in colleges. Right from organizing summer camps for elementary school students to providing staffing solutions and workshops on artificial intelligence for the corporate workforce, we’ve got it all covered!
      </p>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className={`min-h-screen flex flex-col ${openSans.variable} font-opensans`}>
      <div className="flex-grow bg-white w-full py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4">
          <header className="flex flex-col items-center mb-8 sm:mb-12">
            <div className="relative w-3/4 sm:w-2/3 md:w-1/2 max-w-2xl mb-4">
              <Image
                src="/logo1.jpg"
                alt="Pragmatix Learning Logo"
                width={800}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
            <h1 className={`${montserrat.variable} font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D98B9] text-center`}>
              Ready to Launch Your Career?
            </h1>
          </header>
          
          <main className="max-w-6xl mx-auto space-y-12">
            <p className={`${montserrat.variable} font-montserrat text-xl sm:text-2xl text-[#264B78] text-center`}>
              Join our online workshop to land a job with a salary of{' '}
              <span className="font-bold text-[#E85F5C]">₹9 Lakhs p.a.</span> or more!
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="bg-[#0D98B9] text-white p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex-1">
                <h2 className={`${montserrat.variable} font-montserrat text-2xl sm:text-3xl font-semibold mb-6`}>
                  You&apos;ll Learn:
                </h2>
                <LearningPoints />
              </div>
              
              <div className="bg-[#0D98B9] text-white p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 flex-1">
                <WorkshopDetails />
              </div>
            </div>

            <div className="text-center">
              <ActionButton
                href="https://forms.gle/5MmFoNHWAPw393LC6"
                className={`${roboto.variable} font-roboto bg-[#F0C808] text-[#264B78] text-xl sm:text-2xl py-3 px-6 sm:py-4 sm:px-8 md:px-10 hover:bg-[#E85F5C] hover:text-white hover:scale-110`}
              >
                Register Now
              </ActionButton>
            </div>

            <ExpertProfile />

            <div className="text-center">
              <ActionButton
                href="https://forms.gle/5MmFoNHWAPw393LC6"
                className={`${roboto.variable} font-roboto bg-[#F0C808] text-[#264B78] text-xl sm:text-2xl py-3 px-6 sm:py-4 sm:px-8 md:px-10 hover:bg-[#E85F5C] hover:text-white hover:scale-110`}
              >
                Register Now
              </ActionButton>
            </div>

            <CompanyDetails />
          </main>
        </div>
      </div>
      
      <footer className={`${montserrat.variable} font-montserrat bg-[#264B78] text-white py-8`}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-6">Let&apos;s make your career aspirations a reality! 💪</p>
          <ActionButton
            href="https://www.pragmatixlearning.com"
            className="bg-white text-[#264B78] px-6 py-2 rounded-lg hover:bg-[#F0C808] transition-colors duration-300"
          >
            Visit Pragmatix Learning
          </ActionButton>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;