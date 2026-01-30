import React, { useEffect, useRef, useState } from 'react';

// --- Scroll Reveal Animation ---
interface RevealProps {
  children?: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ width, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    secondary: "bg-stone-200 text-slate-900 hover:bg-stone-300 focus:ring-stone-400",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
  );
};

// --- Section Header ---
export const SectionHeading: React.FC<{ title: string, subtitle?: string, centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1 w-20 bg-amber-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- Layout ---
export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Design Studio', href: '#design-studio' }, // New AI Page
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold font-serif tracking-tighter text-slate-900">
            HOME DOORS<span className="text-amber-500">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            ))}
            <a href="#admin" className="text-xs text-slate-400 hover:text-slate-600 ml-4">Admin</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg p-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
             <a href="#admin" className="text-sm text-slate-400">Admin Login</a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">HOME DOORS.</h3>
              <p className="text-slate-400 mb-6">Premium aluminium fabrication for residential, commercial, and industrial spaces. Designing the future of facades.</p>
              <div className="flex space-x-4">
                {/* Social Icons Placeholder */}
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">F</div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">T</div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">I</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-amber-500 transition-colors">Products</a></li>
                <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Solutions</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Residential</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Commercial</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Industrial</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Custom Facades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-slate-400">
                <li>123 Aluminium Blvd, Metal City</li>
                <li>contact@homedoors.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Mon - Fri: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Home Doors. All rights reserved.</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};