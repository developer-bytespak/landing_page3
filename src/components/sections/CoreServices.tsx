'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Equipment Manufacturing',
    description: 'Custom fabrication and precision manufacturing for mission-critical equipment.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Medical & Industrial Supplies',
    description: 'Comprehensive sourcing of medical equipment and industrial materials.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
        <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Warehousing & Distribution',
    description: 'Secure storage facilities and efficient distribution networks nationwide.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Fleet & Vehicle Support',
    description: 'Vehicle procurement, maintenance, and fleet management solutions.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Emergency & Rapid-Response',
    description: 'Swift deployment capabilities for urgent operational requirements.',
  },
];

export default function CoreServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          onEnter: () => tl.restart(),
          onEnterBack: () => tl.restart(),
        },
      });

      // Animate small title
      const smallTitle = headerRef.current?.querySelector('.header-animate:nth-child(1)');
      if (smallTitle) {
        tl.fromTo(
          smallTitle,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0
        );
      }

      // Animate heading - character by character
      const headingChars = headerRef.current?.querySelectorAll('.char-animate');
      if (headingChars) {
        tl.fromTo(
          headingChars,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: 'power3.out',
          },
          0.3
        );
      }

      // Animate description
      const description = headerRef.current?.querySelector('.header-animate:nth-child(3)');
      if (description) {
        tl.fromTo(
          description,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          1.0
        );
      }

      // Animate cards one by one
      const cards = cardsRef.current?.querySelectorAll('.gradient-card');
      if (cards) {
        cards.forEach((card, index) => {
          tl.fromTo(
            card,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
            1.5 + index * 0.25
          );

          // Add rotating animation for gear icon (1st card - index 0)
          if (index === 0) {
            const gearIcon = card.querySelector('svg');
            if (gearIcon) {
              gsap.to(gearIcon, {
                rotation: 360,
                duration: 4,
                ease: 'none',
                repeat: -1,
              });
            }
          }

          // Add pulse animation for medical document icon (2nd card - index 1)
          if (index === 1) {
            const medicalIcon = card.querySelector('svg');
            if (medicalIcon) {
              gsap.to(medicalIcon, {
                scale: 1.1,
                duration: 0.8,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
              });
            }
          }

          // Add floating animation for warehouse icon (3rd card - index 2)
          if (index === 2) {
            const warehouseIcon = card.querySelector('svg');
            if (warehouseIcon) {
              gsap.to(warehouseIcon, {
                y: -8,
                duration: 1.2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
              });
            }
          }

          // Add bouncing animation for truck icon (4th card - index 3)
          if (index === 3) {
            const truckIcon = card.querySelector('svg');
            if (truckIcon) {
              gsap.to(truckIcon, {
                y: -12,
                duration: 0.6,
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true,
              });
            }
          }


        });
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
        <div ref={headerRef} className="text-center mb-20 md:mb-8! flex flex-col items-center ">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-6 md:mb-8 header-animate"
            style={{ color: 'var(--accent-primary)' }}
          >
            What We Deliver
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold mb-8 md:mb-10"
            style={{ color: 'var(--text-primary)' }}
          >
            {'Supply Chain Solutions'.split('').map((char, i) => (
              <span key={i} className="char-animate" style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-center header-animate"
            style={{ color: 'var(--text-secondary)' }}
          >
            Comprehensive logistics and manufacturing capabilities designed for government operations
          </p>
        </div>

        {/* Service Cards Grid */}
        <div
          ref={cardsRef}
          className="services-grid  "
        >
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="gradient-card -z-!"
            >
              <div className="gradient-card-content">
                <div
                  className="mb-6"
                  style={{ color: '#3b82f6' }}
                >
                  {service.icon}
                </div>
                <h3 className="heading">
                  {service.title}
                </h3>
                <p
                  style={{ color: '#8b949e' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
