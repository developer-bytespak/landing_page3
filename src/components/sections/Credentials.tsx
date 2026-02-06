'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Registered government contractor',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Fully insured and bondable',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Quality control processes',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Scalable logistics operations',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'UEI available upon request',
  },
];

const naicsCodes = [
  { code: '336999', desc: 'Other Transportation Equipment Manufacturing' },
  { code: '423450', desc: 'Medical Equipment Merchant Wholesalers' },
  { code: '493110', desc: 'General Warehousing and Storage' },
  { code: '484110', desc: 'General Freight Trucking, Local' },
  { code: '541614', desc: 'Process & Logistics Consulting Services' },
];

export default function Credentials() {
  const sectionRef = useRef<HTMLElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
  const naicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Checkmarks draw in on scroll
      const items = checklistRef.current?.querySelectorAll('.credential-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
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

      // NAICS codes fade in
      const naicsItems = naicsRef.current?.querySelectorAll('.naics-item');
      if (naicsItems) {
        gsap.fromTo(
          naicsItems,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: naicsRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section-navy"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-6 md:mb-8"
            style={{ color: 'var(--accent-primary)' }}
          >
            Trust & Compliance
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold mb-8 md:mb-10 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience & Credentials
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            We maintain the highest standards of compliance and operational readiness to support government missions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Experience & Checklist */}
          <div>
            <div
              className="p-10 md:p-12 rounded-xl mb-8 md:mb-10"
              style={{
                background: 'var(--background-card)',
                border: '1px solid var(--border-default)',
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="p-4 rounded-lg"
                  style={{ background: 'var(--background-elevated)' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-semibold leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Government Ready
                </h3>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                With years of experience supporting government operations, we understand the unique requirements of public sector procurement. Our team is trained to meet strict compliance standards while delivering exceptional service quality.
              </p>
            </div>

            {/* Compliance Checklist */}
            <div ref={checklistRef} className="space-y-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="credential-item flex items-center gap-4 p-5 md:p-6 rounded-lg"
                  style={{
                    background: 'var(--background-card)',
                    border: '1px solid var(--border-default)',
                  }}
                >
                  <div style={{ color: 'var(--accent-primary)' }}>
                    {item.icon}
                  </div>
                  <span
                    className="text-base"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: NAICS Codes */}
          <div>
            <div
              className="p-10 md:p-12 rounded-xl h-full"
              style={{
                background: 'var(--background-card)',
                border: '1px solid var(--border-default)',
              }}
            >
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div
                  className="p-4 rounded-lg"
                  style={{ background: 'var(--background-elevated)' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-semibold leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  NAICS Codes
                </h3>
              </div>

              <div ref={naicsRef} className="space-y-5 md:space-y-6">
                {naicsCodes.map((item, index) => (
                  <div
                    key={index}
                    className="naics-item flex items-start gap-4 pb-5 md:pb-6"
                    style={{
                      borderBottom: index < naicsCodes.length - 1 ? '1px solid var(--border-default)' : 'none',
                    }}
                  >
                    <code
                      className="text-sm font-mono px-3 py-2 rounded flex-shrink-0"
                      style={{
                        background: 'var(--background-elevated)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {item.code}
                    </code>
                    <span
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
