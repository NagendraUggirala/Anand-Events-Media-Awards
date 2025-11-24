import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon, getIconName } from '../components/Icons';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const eventCategories = [
    {
      id: 1,
      title: "Film Events",
      description: "Premier film festivals, award ceremonies, and industry gatherings that celebrate cinematic excellence",
      icon: "film",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      link: "/events"
    },
    {
      id: 2,
      title: "Special Occasions",
      description: "Memorable celebrations, cultural events, and milestone gatherings crafted with precision and elegance",
      icon: "celebration",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      link: "/events"
    },
    {
      id: 3,
      title: "Corporate Shows",
      description: "Professional conferences, product launches, and corporate events that make lasting impressions",
      icon: "briefcase",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      link: "/events"
    },
    {
      id: 4,
      title: "Award Ceremonies",
      description: "Prestigious recognition events honoring excellence across industries and achievements",
      icon: "trophy",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      link: "/awards"
    }
  ];

  const mediaContent = [
    {
      id: 1,
      title: "Satellite Channel Programs",
      description: "Engaging television content that reaches millions of viewers",
      thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800",
      type: "TV Show",
      category: "Entertainment"
    },
    {
      id: 2,
      title: "Inspirational Podcasts",
      description: "Thought-provoking conversations with industry leaders and visionaries",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
      type: "Podcast",
      category: "Inspiration"
    },
    {
      id: 3,
      title: "Documentary Series",
      description: "In-depth storytelling that captures real stories and impactful narratives",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
      type: "Documentary",
      category: "Education"
    },
    {
      id: 4,
      title: "Live Event Coverage",
      description: "Comprehensive coverage of major events and ceremonies",
      thumbnail: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800",
      type: "Live Stream",
      category: "Events"
    }
  ];

  const awardCategories = [
    {
      id: 1,
      title: "Business & Entrepreneurship",
      description: "Recognizing innovative leaders and successful business ventures",
      icon: "briefcase",
      count: "50+ Awards"
    },
    {
      id: 2,
      title: "Healthcare Excellence",
      description: "Honoring medical professionals and healthcare innovations",
      icon: "medical",
      count: "30+ Awards"
    },
    {
      id: 3,
      title: "Film & Entertainment",
      description: "Celebrating outstanding achievements in cinema and entertainment",
      icon: "film",
      count: "40+ Awards"
    },
    {
      id: 4,
      title: "Social Impact",
      description: "Acknowledging contributions to society and community development",
      icon: "globe",
      count: "25+ Awards"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Film Director",
      quote: "Anand Events created an unforgettable experience for our film premiere. Their attention to detail and professionalism is unmatched.",
      initial: "RK"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      role: "Healthcare Award Recipient",
      quote: "Receiving recognition at Anand Awards was a career-defining moment. The ceremony was elegant and truly honored our achievements.",
      initial: "PS"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Corporate CEO",
      quote: "Their media coverage of our product launch reached millions. The quality of production and storytelling exceeded our expectations.",
      initial: "AP"
    }
  ];

  const achievements = [
    { number: "500+", label: "Events Organized" },
    { number: "1000+", label: "Awards Presented" },
    { number: "50M+", label: "Media Reach" },
    { number: "200+", label: "Celebrity Partners" }
  ];

  const featuredEvents = [
    {
      id: 1,
      title: "Annual Excellence Awards 2024",
      date: "March 20, 2024",
      location: "Hyderabad",
      description: "Join us for the most prestigious award ceremony of the year, honoring excellence across industries",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      category: "Awards",
      featured: true
    },
    {
      id: 2,
      title: "Film Festival Gala Night",
      date: "April 15, 2024",
      location: "Mumbai",
      description: "Celebrating cinematic excellence with red carpet premieres and star-studded performances",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      category: "Film",
      featured: true
    },
    {
      id: 3,
      title: "Healthcare Innovation Summit",
      date: "May 10, 2024",
      location: "Bangalore",
      description: "Recognizing medical breakthroughs and healthcare innovations that transform lives",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
      category: "Healthcare",
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: "Anand Awards 2024 Nominations Open",
      date: "February 15, 2024",
      excerpt: "We're excited to announce that nominations for Anand Awards 2024 are now open. Submit your nominations across all categories.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      category: "Awards"
    },
    {
      id: 2,
      title: "New Podcast Series Launches",
      date: "February 10, 2024",
      excerpt: "Our new inspirational podcast series featuring conversations with industry leaders is now streaming on all major platforms.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
      category: "Media"
    },
    {
      id: 3,
      title: "Record-Breaking Event Attendance",
      date: "January 28, 2024",
      excerpt: "Our latest corporate event saw record attendance with over 5,000 participants, setting new industry benchmarks.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      category: "Events"
    }
  ];

  const howWeWork = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We begin with understanding your vision, objectives, and requirements through detailed consultations",
      icon: "handshake"
    },
    {
      step: "02",
      title: "Creative Design & Strategy",
      description: "Our creative team develops comprehensive event strategies and media content plans tailored to your needs",
      icon: "lightbulb"
    },
    {
      step: "03",
      title: "Execution & Production",
      description: "With meticulous attention to detail, we execute your event or produce your media content with professional excellence",
      icon: "rocket"
    },
    {
      step: "04",
      title: "Delivery & Follow-up",
      description: "We ensure seamless delivery and provide post-event support to maximize your success and satisfaction",
      icon: "trophy"
    }
  ];

  const partners = [
    {
      name: "Major Film Studios",
      logo: "https://via.placeholder.com/150x80/4A90E2/FFFFFF?text=Film+Studio",
      category: "Entertainment"
    },
    {
      name: "Healthcare Organizations",
      logo: "https://via.placeholder.com/150x80/50C878/FFFFFF?text=Healthcare",
      category: "Healthcare"
    },
    {
      name: "Corporate Brands",
      logo: "https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Corporate",
      category: "Business"
    },
    {
      name: "Media Networks",
      logo: "https://via.placeholder.com/150x80/9B59B6/FFFFFF?text=Media",
      category: "Media"
    }
  ];

  const services = [
    {
      title: "Event Management",
      description: "End-to-end event planning and execution",
      features: ["Venue Selection", "Catering", "Entertainment", "Logistics"],
      icon: "celebration"
    },
    {
      title: "Media Production",
      description: "High-quality content creation and distribution",
      features: ["Video Production", "Live Streaming", "Post-Production", "Distribution"],
      icon: "film"
    },
    {
      title: "Award Management",
      description: "Complete award ceremony planning and execution",
      features: ["Nomination Process", "Jury Management", "Ceremony Planning", "Trophy Design"],
      icon: "trophy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center  overflow-hidden"
      >
        {/* Background Video/Image */}
        {/* 
          TO USE YOUR OWN VIDEO/IMAGE:
          1. Replace the video source URL with your video file path (e.g., "/videos/hero-video.mp4")
          2. Replace the poster and fallback image URLs with your image path (e.g., "/images/hero-bg.jpg")
          3. For image-only background, comment out the <video> tag and use only the fallback <div>
        */}
        <div className="absolute inset-0 w-full h-full">
          {/* Video Background - Replace src with your video URL */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
          >
            <source
              src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback Image if video doesn't load */}
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
              alt="Event background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
          
          {/* Fallback Image (shown if video fails or for image-only option) */}
          {/* Uncomment below and comment out video tag above to use image-only background */}
          {/* <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80')`
            }}
          /> */}
          
          {/* Overlay for better text readability - adjust opacity (0.7-0.9) as needed */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Crafting Experiences.
              <br />
              <span className="text-yellow-400">Creating Influence.</span>
              <br />
              Celebrating Excellence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-1xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              A premier platform delivering world-class events, impactful media content, and prestigious award recognition to inspire excellence across industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/events"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Events
              </Link>
              <Link
                to="/media"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Watch Media
              </Link>
              <Link
                to="/awards"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                View Awards
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. About Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Anand Events, Media & Awards is a premier platform dedicated to creating transformative experiences, 
              producing impactful media content, and recognizing excellence across diverse industries.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              With a legacy of organizing 500+ events, presenting 1000+ awards, and reaching 50+ million viewers, 
              we have established ourselves as a trusted name in event management, media production, and award recognition.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-blue-50 rounded-xl">
                <div className="mb-4 flex justify-center">
                  <Icon name="target" className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">To inspire excellence and celebrate achievements through world-class events and media</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <div className="mb-4 flex justify-center">
                  <Icon name="star" className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the leading platform for events, media, and awards recognition globally</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <div className="mb-4 flex justify-center">
                  <Icon name="handshake" className="w-12 h-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                <p className="text-gray-600">Excellence, integrity, innovation, and commitment to creating lasting impact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Events Highlights Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Event Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From film festivals to corporate galas, we create unforgettable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {eventCategories.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Icon name={event.icon} className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <Link
                    to={event.link}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 inline-flex items-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Media Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Media Content
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engaging content that reaches millions and creates lasting impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {mediaContent.map((media, index) => (
              <motion.div
                key={media.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={media.thumbnail}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {media.type}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">{media.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{media.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{media.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/media"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Watch More Media Content →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. Awards Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Award Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognizing excellence across diverse industries and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {awardCategories.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border-2 border-yellow-300 rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <Icon name={award.icon} className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{award.description}</p>
                <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-sm inline-block">
                  {award.count}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/awards"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore All Awards →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Featured Events Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss these exciting events coming soon
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    <div className="flex items-center text-sm text-white/90">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="mr-4">{event.date}</span>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <Link
                    to="/events"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Work Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures exceptional results every time
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howWeWork.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <Icon name={step.icon} className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < howWeWork.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Recent News & Updates */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest announcements and updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recentNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">{news.date}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{news.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Our Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for successful events, media, and awards under one roof
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="mb-4 flex justify-center">
                  <Icon name={service.icon} className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon name="star" className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    

      {/* 11. Testimonials & Achievements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Achievements Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-gray-700 font-semibold">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              What People Say About Us
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  {testimonials[currentTestimonial].initial}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="font-bold text-lg text-gray-900">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
              </motion.div>

              {/* Testimonial Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    
    
      {/* 13. Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-400 via-pink-600 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Plan Your Next Event With Us
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Whether it's a film premiere, corporate gathering, award ceremony, or special occasion, 
              we'll create an unforgettable experience that exceeds your expectations.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get In Touch →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
