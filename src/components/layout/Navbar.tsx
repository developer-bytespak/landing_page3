'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-20 right-20 z-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wider" style={{ color: 'var(--accent-primary)' }}>
              LSC
            </span>
            {/* <span className="ml-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Logistics & Supply Chain
            </span> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Services
            </a>
            <a href="#markets" className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Markets
            </a>
            <a href="#credentials" className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Experience
            </a>
            <a href="#contact" className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
