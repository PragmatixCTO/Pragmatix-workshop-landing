'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="bg-white w-full py-8">
    <header className="container mx-auto flex justify-center items-center">
      <div className="relative w-1/2 max-w-2xl">
          <Image
            src="/logo1.jpg"
            alt="Pragmatix Learning Logo"
            width={800}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-[#F0C808] mb-6 text-center">
            Ready to <span className="text-[#F0C808]">Launch</span> Your Career?
          </h1>
          <p className="text-2xl text-[#E85F5C] mb-12 text-center">
            Join our online workshop to land a job with a salary of <span className="font-bold text-[#E85F5C]">₹9 Lakhs PA</span> or more!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0D98B9] text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-semibold mb-6">You&apos;ll Learn:</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Personal branding tips
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Crafting an impressive resume & LinkedIn profile
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Effective networking strategies
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Creating a personalized action plan
                </li>
              </ul>
            </div>

            <div className="bg-[#264B78] text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-semibold mb-6">Workshop Details:</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#E85F5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <strong>When:</strong> To be informed upon registration
                </p>
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#E85F5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <strong>Where:</strong> Zoom (link to be provided later)
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
          <Link
  href="https://example.com/register"
  className="inline-block bg-[#F0C808] text-[#264B78] font-bold py-4 px-10 rounded-full text-2xl hover:bg-[#E85F5C] hover:text-white transition duration-300 transform hover:scale-110 shadow-lg"
>
  Register Now
</Link>
          </div>

          <div className="bg-[#0D98B9] text-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">About Pragmatix Learning</h2>
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

          <div className="bg-[#264B78] text-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">Our Other Services</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                One-to-One Mentoring
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Mock Interviews
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Resume Building Workshops
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#F0C808]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Personal Branding & Portfolio Consultancy
              </li>
            </ul>
            <div className="text-center">
            <Link
  href="https://example.com/consultation"
  className="inline-block bg-[#E85F5C] text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-[#F0C808] hover:text-[#264B78] transition duration-300 transform hover:scale-105 shadow-lg"
>
  Book a Free 10-Min Consultation
</Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#264B78] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl mb-6">Let's make your career aspirations a reality! 💪</p>
          <Link
            href="https://www.pragmatixlearning.com"
            className="inline-block bg-[#06B6B6] text-white font-bold py-3 px-8 rounded-full hover:bg-[#0D98B9] transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Visit Pragmatix Learning
          </Link>
        </div>
      </footer>
    </div>
  )
}