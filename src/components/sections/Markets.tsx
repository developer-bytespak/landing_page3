'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const markets = [
  'Federal civilian agencies',
  'State & local government operations',
  'Public health & emergency response',
  'Infrastructure & public works',
  'Government supply chain programs',
];

export default function Markets() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text fade in sequentially
      const items = textRef.current?.querySelectorAll('.market-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 30%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }

      // Image parallax
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play reverse play reverse',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section-dark"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div ref={textRef}>
            <p
              className="text-sm tracking-[0.2em] uppercase mb-6 md:mb-8"
              style={{ color: 'var(--accent-primary)' }}
            >
              Who We Support
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold mb-8 md:mb-10 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Markets We Serve
            </h2>
            <p
              className="text-lg md:text-xl mb-10 md:mb-12 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our logistics and manufacturing services are tailored to meet the unique demands of government operations across multiple sectors.
            </p>

            {/* Market List */}
            <ul className="space-y-4">
              {markets.map((market, index) => (
                <li
                  key={index}
                  className="market-item flex items-center gap-4 p-5 md:p-6 rounded-lg transition-all duration-300"
                  style={{
                    background: 'var(--background-card)',
                    border: '1px solid var(--border-default)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-muted)';
                    e.currentTarget.style.background = 'var(--background-elevated)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-default)';
                    e.currentTarget.style.background = 'var(--background-card)';
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ background: 'var(--accent-primary)' }}
                  />
                  <span
                    className="text-base md:text-lg"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {market}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div
            ref={imageRef}
            className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden"
            style={{
              background: 'var(--background-elevated)',
              border: '1px solid var(--border-muted)',
            }}
          >
            {/* Placeholder for image - replace with actual image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/markets-image.jpg)',
                filter: 'grayscale(20%) brightness(0.7)',
              }}
            />
            {/* Overlay gradient */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0.5) 100%)',
              }}
            />
            {/* Placeholder content when no image */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--background-card)' }}>
              <div className="text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p style={{ color: 'var(--text-muted)' }}>
                  Distribution Center Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
