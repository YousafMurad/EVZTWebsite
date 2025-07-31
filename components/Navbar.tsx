"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
  ];

  // Use white text on homepage, about page, portfolio page, contact page, and privacy page when not scrolled (for dark background), black text otherwise
  const useWhiteText = (pathname === '/' || pathname === '/about' || pathname === '/portfolio' || pathname === '/contact' || pathname === '/privacy') && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              useWhiteText ? 'text-white' : 'text-gray-800'
            }`}>EVZONE TECH</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  !useWhiteText
                    ? (pathname === item.href ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600')
                    : (pathname === item.href ? 'text-teal-200' : 'text-white hover:text-teal-200')
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      !useWhiteText ? 'bg-teal-600' : 'bg-teal-200'
                    }`}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`
                group inline-flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg border-2
                ${scrolled 
                  ? "bg-[#0D9488] text-white hover:bg-[#0B7A72] border-transparent" 
                  : "bg-white text-[#0D9488] border-[#0D9488] hover:bg-[#0D9488] hover:text-white"}
              `}
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-inherit transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-200 ${
              !useWhiteText
                ? 'text-gray-700 hover:text-teal-600'
                : 'text-white hover:text-teal-200'
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal-600 hover:bg-teal-50 ${
                      pathname === item.href ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center justify-center space-x-2 block mx-4 mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-center"
                >
                  <span>Contact Us</span>
                  <FaArrowRight className="text-inherit transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
