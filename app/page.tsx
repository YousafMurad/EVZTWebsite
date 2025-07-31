'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaChevronDown, FaChevronRight, FaCheckSquare, FaRobot, FaExchangeAlt, FaEye, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const HomePage = () => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(-1);

  const testimonials = [
    {
      text: "With Evzone's QA testing, our app performance improved by 40%, and user complaints dropped to nearly zero. Their automated testing saved us countless hours, and their attention to detail is unmatched. I highly recommend them for any serious development project.",
      name: "Sarah Johnson",
      position: "CTO, InnovateTech"
    },
    {
      text: "Evzone's team delivered exceptional quality assurance services. Their thorough testing approach helped us identify critical issues before launch, saving us time and money. Highly professional and reliable.",
      name: "Michael Chen",
      position: "Product Manager, TechFlow"
    },
    {
      text: "Outstanding QA services! Their automated testing framework reduced our testing time by 60% while improving coverage. The team is knowledgeable, responsive, and delivers on time.",
      name: "Emily Rodriguez",
      position: "Engineering Lead, DataSync"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const technologies = [
    { name: 'JavaScript', color: 'text-yellow-500' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'React', color: 'text-cyan-500' },
    { name: 'Next.js', color: 'text-gray-800' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'MongoDB', color: 'text-green-600' },
    { name: 'Firebase', color: 'text-orange-500' },
    { name: 'TailwindCSS', color: 'text-teal-500' },
    { name: 'Figma', color: 'text-purple-500' },
    { name: 'Git', color: 'text-red-500' },
  ];

  const portfolioProjects = [
    {
      title: 'Fiskl',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      tags: ['React', 'Next.js', 'TypeScript', 'MongoDB'],
      image: '/portfolio-1.jpg'
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/portfolio-2.jpg'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management platform with real-time updates and team collaboration.',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      image: '/portfolio-3.jpg'
    }
  ];

  const features = [
    {
      title: "Attention to Details",
      description: "Our QA professionals meticulously examine every aspect of your software to identify even the smallest issues before they impact users.",
      icon: "🔍"
    },
    {
      title: "A Plan for Success",
      description: "You want results. We have found that the best way to get them is with up front research — of your company, competitors, target market and customer psychographics. Only after we fully understand you and your customers, do we recommend a plan of attack.",
      icon: "📈"
    },
    {
      title: "Experts Only",
      description: "Our team consists exclusively of senior-level QA engineers with a minimum of 5 years of experience across various industries and technologies.",
      icon: "👩‍💻"
    },
    {
      title: "Meeting Deadlines",
      description: "We understand the importance of time-to-market and consistently deliver high-quality results within agreed timeframes.",
      icon: "⏱️"
    },
    {
      title: "Award-Winning",
      description: "Our testing methodologies and automation frameworks have received industry recognition for their innovation and effectiveness.",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Navbar Spacer */}
        <div className="absolute top-0 w-full h-20 sm:h-24 md:h-28 z-20 bg-gradient-to-b from-black/30 to-transparent"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* QA Badge Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-teal-400"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-teal-400"></div>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-teal-200 bg-clip-text text-transparent">
                Quality
              </span>{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Assurance
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 font-light">
                Ensure your software meets the <span className="text-teal-400 font-semibold">highest standards</span> with our comprehensive QA testing services. 
                We deliver <span className="text-blue-400 font-semibold">reliable, scalable solutions</span> that exceed expectations.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#services"
                    className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <span>Explore Services</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group border-2 border-white/30 hover:border-teal-400 hover:bg-teal-400/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Get Started</span>
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Services Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              OUR <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">QA SERVICES</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing solutions to ensure your software delivers exceptional performance and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 - Functional Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-teal-600 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:bg-opacity-20">
                <FaCheckSquare className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">Functional Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Ensure your software functions correctly across all features and requirements with comprehensive functional testing.
              </p>
            </motion.div>

            {/* Service Card 2 - Test Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-teal-600 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:bg-opacity-20">
                <FaRobot className="w-6 h-6 text-green-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">Test Automation</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Streamline your testing process with automated testing solutions that save time and improve accuracy.
              </p>
            </motion.div>

            {/* Service Card 3 - API Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-teal-600 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:bg-opacity-20">
                <FaExchangeAlt className="w-6 h-6 text-purple-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">API Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Validate your APIs with thorough testing to ensure reliable data exchange and system integration.
              </p>
            </motion.div>

            {/* Service Card 4 - Visual Regression Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-teal-600 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:bg-opacity-20">
                <FaEye className="w-6 h-6 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">Visual Regression Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Detect visual changes and UI inconsistencies across different browsers and devices.
              </p>
            </motion.div>

            {/* Service Card 5 - Mobile App Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-teal-600 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:bg-opacity-20">
                <FaMobileAlt className="w-6 h-6 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">Mobile App Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Comprehensive testing for mobile applications across different devices and operating systems.
              </p>
            </motion.div>

            {/* Service Card 6 - Security Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-teal-600 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:bg-opacity-20">
                <FaShieldAlt className="w-6 h-6 text-indigo-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">Security Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Identify vulnerabilities and ensure your applications are secure against potential threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* End-to-End Development Services - Professional Design with Image */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              End-to-End <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Development Journey</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We navigate the entire software lifecycle with precision, from initial concept through delivery and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/development-process.jpg"
                  alt="End-to-end development process"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Service Process Flow with Numbers */}
              <div className="relative">
                {/* Process Step 1 */}
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                  className="flex items-start space-x-4 bg-white border border-gray-100 p-5 rounded-xl shadow-sm mb-6 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-lg font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
                    <p className="text-gray-600">We thoroughly analyze requirements and design comprehensive test strategies tailored to your specific project needs.</p>
                  </div>
                </motion.div>
                
                {/* Process Step 2 */}
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                  className="flex items-start space-x-4 bg-white border border-gray-100 p-5 rounded-xl shadow-sm mb-6 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-lg font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Test Automation</h3>
                    <p className="text-gray-600">Our custom automation frameworks streamline testing processes and significantly improve efficiency.</p>
                  </div>
                </motion.div>
                
                {/* Process Step 3 */}
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                  className="flex items-start space-x-4 bg-white border border-gray-100 p-5 rounded-xl shadow-sm mb-6 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-lg font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                    <p className="text-gray-600">Comprehensive load and stress testing ensures your applications perform optimally under all conditions.</p>
                  </div>
                </motion.div>
                
                {/* Process Step 4 */}
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                  className="flex items-start space-x-4 bg-white border border-gray-100 p-5 rounded-xl shadow-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-lg font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Quality</h3>
                    <p className="text-gray-600">Our ongoing monitoring and testing processes ensure your software maintains the highest quality standards.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Design with Better SVGs */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Why <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team is passionate about delivering exceptional testing and QA services to help your business succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Feature Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`border rounded-xl overflow-hidden ${openAccordion === index ? 'shadow-lg' : 'shadow-sm'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                    className={`w-full flex items-center justify-between p-4 text-left ${
                      openAccordion === index 
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white' 
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <span className="font-medium text-lg">{feature.title}</span>
                    </div>
                    <span>
                      {openAccordion === index ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />}
                    </span>
                  </button>
                  
                  {openAccordion === index && (
                    <motion.div 
                      className="p-4 bg-white"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Results Dashboard with SVGs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-600 to-green-600 p-6 text-center">
                  <h3 className="text-white text-2xl font-bold">Results That Matter</h3>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 p-8">
                  {/* Stat 1 - Bug Detection Rate */}
                  <motion.div 
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-28 h-28 mx-auto mb-3">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="#0d9488" 
                          strokeWidth="8" 
                          strokeDasharray="283" 
                          strokeDashoffset="3" 
                          transform="rotate(-90 50 50)" 
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-teal-600">99%</div>
                    </div>
                    <p className="font-medium text-gray-800">Bug Detection Rate</p>
                  </motion.div>
                  
                  {/* Stat 2 - Faster Time to Market */}
                  <motion.div 
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-28 h-28 mx-auto mb-3">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="#2563eb" 
                          strokeWidth="8" 
                          strokeDasharray="283" 
                          strokeDashoffset="113" 
                          transform="rotate(-90 50 50)" 
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-blue-600">60%</div>
                    </div>
                    <p className="font-medium text-gray-800">Faster Time to Market</p>
                  </motion.div>
                  
                  {/* Stat 3 - Projects Delivered */}
                  <motion.div 
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-purple-50 rounded-xl p-3 w-28 h-28 mx-auto mb-3 flex items-center justify-center">
                      <div>
                        <div className="text-3xl font-bold text-purple-600">200+</div>
                        <div className="text-xs text-purple-400">PROJECTS</div>
                      </div>
                    </div>
                    <p className="font-medium text-gray-800">Projects Delivered</p>
                  </motion.div>
                  
                  {/* Stat 4 - Support & Monitoring */}
                  <motion.div 
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-pink-50 rounded-xl p-3 w-28 h-28 mx-auto mb-3 flex items-center justify-center">
                      <div>
                        <div className="text-3xl font-bold text-pink-600">24/7</div>
                        <div className="text-xs text-pink-400">SUPPORT</div>
                      </div>
                    </div>
                    <p className="font-medium text-gray-800">Support & Monitoring</p>
                  </motion.div>
                </div>
                
                {/* Bottom Banner */}
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4">
                  <p className="text-center text-gray-700 font-medium">
                    Join our growing community of satisfied clients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              WHAT OUR <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">CLIENTS SAY</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Here what our clients are like about our collaboration and how we met their goals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Previous Button */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonial Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
              {/* Star Rating */}
              <div className="flex justify-center items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-14 h-14 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Don't Let Bugs Hold You Back - <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Test Smarter Today!</span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We help startups and enterprises ensure flawless performance through end-to-end QA testing and automation.
            </p>
            <Link
              href="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
