import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';

const EventsPage = () => {
  const filmEvents = [
    {
      id: 1,
      title: "Audio Launches",
      description: "Grand audio launch events featuring live performances, celebrity appearances, and media coverage",
      icon: "music",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      features: ["Live Performances", "Celebrity Appearances", "Media Coverage", "Fan Engagement"]
    },
    {
      id: 2,
      title: "Trailer & Teaser Launches",
      description: "High-energy trailer launch events that create buzz and anticipation for upcoming releases",
      icon: "film",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      features: ["Exclusive Previews", "Press Conferences", "Social Media Integration", "VIP Access"]
    },
    {
      id: 3,
      title: "Pre-release & Post-release Events",
      description: "Comprehensive event management for movie premieres and post-release celebrations",
      icon: "theater",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      features: ["Red Carpet Events", "Premiere Screenings", "After-Parties", "Media Interactions"]
    },
    {
      id: 4,
      title: "Movie Release Shows",
      description: "Spectacular release shows with star-studded casts and engaging fan experiences",
      icon: "circus",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      features: ["Star Cast Appearances", "Interactive Sessions", "Fan Meets", "Entertainment Shows"]
    },
    {
      id: 5,
      title: "Celebrity Appearances",
      description: "Exclusive celebrity events, fan meets, and star-studded gatherings",
      icon: "star",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800",
      features: ["Fan Meets", "Autograph Sessions", "Photo Opportunities", "Exclusive Access"]
    }
  ];

  const specialEvents = [
    {
      id: 1,
      title: "New Year Eve Celebrations",
      description: "Unforgettable New Year celebrations with live entertainment, fireworks, and premium experiences",
      icon: "firework",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      features: ["Live Entertainment", "Fireworks Display", "Premium Venues", "Gourmet Dining"]
    },
    {
      id: 2,
      title: "Celebrity Nights",
      description: "Exclusive celebrity nights featuring performances, interactions, and glamorous experiences",
      icon: "sparkles",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800",
      features: ["Star Performances", "VIP Experiences", "Red Carpet", "Media Coverage"]
    },
    {
      id: 3,
      title: "Cultural Festivals",
      description: "Vibrant cultural festivals celebrating traditions, arts, and community heritage",
      icon: "art",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      features: ["Traditional Performances", "Art Exhibitions", "Cultural Shows", "Community Engagement"]
    },
    {
      id: 4,
      title: "Large Brand Events",
      description: "Premium brand events that create lasting impressions and strengthen brand identity",
      icon: "trophy",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      features: ["Brand Activation", "Product Showcases", "Influencer Partnerships", "Media Amplification"]
    }
  ];

  const corporateEvents = [
    {
      id: 1,
      title: "Product Launches",
      description: "Strategic product launch events that generate excitement and media attention",
      icon: "rocket",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      features: ["Strategic Planning", "Media Coverage", "Demo Sessions", "Networking"]
    },
    {
      id: 2,
      title: "Corporate Shows",
      description: "Professional corporate events including conferences, seminars, and annual gatherings",
      icon: "briefcase",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      features: ["Conference Management", "Speaker Sessions", "Networking Events", "Branding"]
    },
    {
      id: 3,
      title: "Business Promotions",
      description: "Engaging promotional events that drive business growth and customer engagement",
      icon: "chart",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      features: ["Marketing Campaigns", "Customer Engagement", "Brand Awareness", "Lead Generation"]
    },
    {
      id: 4,
      title: "Press Conferences",
      description: "Professional press conferences with comprehensive media management and coverage",
      icon: "newspaper",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      features: ["Media Management", "Press Kits", "Live Streaming", "Q&A Sessions"]
    }
  ];

  const whyChooseUs = [
    {
      icon: "art",
      title: "Professional Creative Team",
      description: "Our experienced team of event planners, designers, and production experts bring your vision to life"
    },
    {
      icon: "handshake",
      title: "Strong Industry Connections",
      description: "Extensive network of celebrities, media partners, and vendors ensures seamless event execution"
    },
    {
      icon: "star",
      title: "High Quality Production",
      description: "State-of-the-art equipment, professional staging, and attention to detail in every event"
    },
    {
      icon: "clipboard",
      title: "End-to-End Event Management",
      description: "From concept to execution, we handle every aspect of your event with precision and care"
    },
    {
      icon: "target",
      title: "Custom Event Planning",
      description: "Tailored event solutions designed to meet your specific objectives and exceed expectations"
    },
    {
      icon: "lightbulb",
      title: "Innovation & Technology",
      description: "Cutting-edge technology integration including live streaming, virtual experiences, and digital engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header / Title Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-900 via-yellow-900 to-yellow-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anand Events
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
              Where Moments Become Milestones
            </p>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We specialize in delivering world-class, professionally curated events across the film, 
              entertainment, corporate, and cultural sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Film & Entertainment Events Section */}
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
              Film & Entertainment Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with top film production teams to create grand, high-energy events that 
              connect movies with fans and media. From audio launches to release shows, we bring 
              cinematic experiences to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filmEvents.map((event, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Icon name={event.icon} className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <ul className="space-y-2">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Special Occasions & Premium Events */}
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
              Special Occasions & Premium Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From festive celebrations to premium cultural nights, we craft unforgettable experiences 
              with glamour and precision. Every event is designed to create lasting memories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {specialEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Icon name={event.icon} className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                  <ul className="space-y-1">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-700">
                        <span className="text-purple-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Corporate & Brand Events */}
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
              Corporate & Brand Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver corporate events that highlight brand vision, engage audiences, and elevate 
              your business identity. Professional execution meets creative excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {corporateEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
                    <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="flex justify-center">
                        <Icon name={event.icon} className="w-12 h-12 text-gray-700" />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    <ul className="space-y-2">
                      {event.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-blue-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Anand Events? */}
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
              Why Choose Anand Events?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We bring creativity, technology, and excellence together to produce events that stand out. 
              Our commitment to quality and attention to detail ensures every event is a success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <Icon name={item.icon} className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Plan Your Event With Us
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Whether you're launching a film, celebrating a milestone, or hosting a corporate gathering, 
              we'll create an unforgettable experience that exceeds your expectations. Let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Contact Us Now
              </Link>
              <Link
                to="/media"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
