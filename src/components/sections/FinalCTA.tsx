'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline fade + slight scale
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Subtext fade
      gsap.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 30%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // CTA button
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'bottom 30%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Magnetic effect for CTA button
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="section section-dark overflow-hidden"
    >
      {/* Subtle animated gradient background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(29, 78, 216, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none -z-10"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-default) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-default) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="container-main text-center max-w-4xl mx-auto">
        <h2
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 md:mb-12 leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Let&apos;s Support Your Supply Chain Needs
        </h2>

        <p
          ref={subtextRef}
          className="text-lg md:text-2xl mb-14 md:mb-16 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Available for prime or subcontracting opportunities
        </p>

        <button
          ref={ctaRef}
          className="px-12 py-6 text-lg md:text-xl font-semibold rounded-xl transition-all duration-300 cursor-pointer mb-16 md:mb-20"
          style={{
            background: 'var(--accent-primary)',
            color: 'var(--text-primary)',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 40px var(--accent-glow), 0 0 80px var(--accent-glow)';
          }}
        >
          Contact Us Today
        </button>

        {/* Additional info */}
        <div className="mt-20 flex flex-col md:flex-row justify-center gap-10 md:gap-16">
          <div className="flex items-center justify-center gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6 flex-shrink-0"
              style={{ color: 'var(--accent-primary)' }}
            >
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span
              className="text-base"
              style={{ color: 'var(--text-muted)' }}
            >
              contact@yourcompany.com
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6 flex-shrink-0"
              style={{ color: 'var(--accent-primary)' }}
            >
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span
              className="text-base"
              style={{ color: 'var(--text-muted)' }}
            >
              (555) 123-4567
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
