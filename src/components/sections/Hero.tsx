'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline fade in
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.5,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ padding: 0 }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/videp2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          style={{ 
            color: 'var(--text-primary)',
            fontFamily: 'Georgia, "Times New Roman", serif'
          }}
        >
          Logistics <span style={{ fontStyle: 'italic' }}>&</span>
          <br />
          <span style={{ color: '#60a5fa' }}>
            Supply Excellence
          </span>
        </h1>
        
        {/* Subheading */}
        {/* <p 
          className="text-lg md:text-xl mt-6 mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          Government & Federal Operations
        </p> */}

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            className="px-8 py-2.5 text-xs font-bold rounded transition-all duration-300 hover:opacity-90 uppercase tracking-wider"
            style={{
              background: '#2563eb',
              color: '#ffffff',
            }}
          >
            Contact Us
          </button>
          <button
            className="px-8 py-2.5 text-xs font-bold rounded transition-all duration-300 hover:bg-white/5 uppercase tracking-wider"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: '#ffffff',
            }}
          >
            Explore Services
          </button>
        </div> */}
        
      </div>
    </section>
  );
}
