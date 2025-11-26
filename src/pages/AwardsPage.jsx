import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';

const AwardsPage = () => {
  const awardCategories = [
    {
      id: 1,
      title: "Business & Entrepreneurship",
      description: "Honoring entrepreneurs and business leaders who drive economic growth and inspire innovation",
      icon: "briefcase",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      recognizes: [
        "Visionary leaders",
        "Innovators",
        "Successful startups",
        "Outstanding business contributions"
      ],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
    },
    {
      id: 2,
      title: "Pharma & Healthcare",
      description: "Celebrating achievements in medical science, compassionate service, and healthcare breakthroughs",
      icon: "medical",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      recognizes: [
        "Medical excellence",
        "Healthcare innovations",
        "Outstanding service",
        "Community health impact"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
    },
    {
      id: 3,
      title: "Film & Entertainment",
      description: "Highlighting creativity and artistic excellence across film and entertainment",
      icon: "film",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      recognizes: [
        "Actors, directors, technicians",
        "Influencers and content creators",
        "Contributions to cinema and media",
        "Artistic achievements"
      ],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800"
    },
    {
      id: 4,
      title: "Other Sectors",
      description: "Appreciating exceptional individuals making a positive impact in society",
      icon: "star",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      recognizes: [
        "Educators",
        "Social workers",
        "Influencers",
        "Change-makers",
        "Corporate leaders"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
    }
  ];

  const ceremonyHighlights = [
    {
      id: 1,
      title: "Grand Award Ceremony",
      description: "Prestigious award ceremonies with star-studded guest lists",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      type: "Event"
    },
    {
      id: 2,
      title: "Celebrity Guests",
      description: "Renowned personalities from various industries grace our events",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800",
      type: "Highlights"
    },
    {
      id: 3,
      title: "Trophy Presentation",
      description: "Beautifully designed trophies presented to deserving achievers",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      type: "Awards"
    },
    {
      id: 4,
      title: "Red Carpet Moments",
      description: "Elegant red carpet events celebrating excellence",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      type: "Event"
    }
  ];

  const whyChooseUs = [
    {
      icon: "sparkles",
      title: "Transparent Selection Process",
      description: "Fair and transparent evaluation by industry experts and jury members"
    },
    {
      icon: "trophy",
      title: "High Recognition Value",
      description: "Prestigious awards recognized and respected across industries"
    },
    {
      icon: "star",
      title: "Prestigious Platform",
      description: "A platform that elevates your achievements and amplifies your impact"
    },
    {
      icon: "strength",
      title: "Encouragement for Achievers",
      description: "Inspiring recognition that motivates continued excellence and innovation"
    },
    {
      icon: "world",
      title: "Industry-Wide Reputation",
      description: "Awards that carry weight and recognition across multiple sectors"
    },
    {
      icon: "target",
      title: "Meaningful Impact",
      description: "Beyond recognition — a movement inspiring excellence and celebrating impact"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header / Title Section - Premium Gold Theme */}
      <section className="relative py-20 bg-gradient-to-br from-green-500 via-green-900 to-green-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        {/* Gold Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block text-6xl md:text-7xl mb-4"
              >
                <Icon name="trophy" className="w-16 h-16 text-yellow-400 mx-auto" />
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anand Awards
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-6">
              Celebrating Excellence Across Sectors
            </p>
            <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed">
              Anand Awards is a prestigious initiative honoring leaders, achievers, and innovators who 
              create meaningful impact in business, healthcare, entertainment, and various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Awards Purpose Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Purpose
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Our mission is to acknowledge outstanding contributions and inspire the next generation of leaders. 
              We believe in recognizing real talent, appreciating excellence, encouraging innovation, and inspiring 
              future achievers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: "target", text: "Recognizing Real Talent" },
                { icon: "star", text: "Appreciating Excellence" },
                { icon: "lightbulb", text: "Encouraging Innovation" },
                { icon: "rocket", text: "Inspiring Future Achievers" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-3 flex justify-center">
                    <Icon name={item.icon} className="w-10 h-10 text-gray-700" />
                  </div>
                  <p className="text-gray-700 font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Award Categories Section */}
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
              Award Categories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We honor excellence across diverse sectors, recognizing those who make a meaningful difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {awardCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`${category.bgColor} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 ${category.borderColor}`}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-48 md:h-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${category.image})` }}>
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent`}></div>
                    <div className="absolute top-4 left-4">
                      <Icon name={category.icon} className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{category.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Recognizes:</p>
                      <ul className="space-y-1">
                        {category.recognizes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className={`text-${category.color.split('-')[1]}-500 mr-2`}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg font-semibold text-sm`}>
                      Learn More →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Award Ceremony Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Award Ceremony Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the grandeur and prestige of our award ceremonies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ceremonyHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-yellow-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {highlight.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{highlight.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Anand Awards? */}
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
              Why Anand Awards?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Anand Awards goes beyond recognition — it is a movement inspiring excellence and celebrating 
              meaningful impact. We provide a platform that truly honors achievement.
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
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-yellow-200"
              >
                <div className="mb-4 flex justify-center">
                  <Icon name={item.icon} className="w-12 h-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Nomination / Participation Section */}
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
              Nominate Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nominations are open to individuals, teams, and organizations across multiple fields. 
              If you know someone who deserves recognition for their outstanding contributions, we invite you to nominate them.
            </p>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-yellow-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nomination Criteria</h3>
              <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">✓</span>
                  <span>Outstanding achievements in respective field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">✓</span>
                  <span>Demonstrated impact and contribution to society</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">✓</span>
                  <span>Innovation and excellence in their work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">✓</span>
                  <span>Positive influence and inspiration to others</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Nominate Now
              </Link>
              <Link
                to="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white border-2 border-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105"
              >
                Apply for Awards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6 flex justify-center">
              <Icon name="trophy" className="w-20 h-20 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Be a Part of the Celebration of Excellence
            </h2>
            <p className="text-xl md:text-2xl text-yellow-100 mb-10 leading-relaxed">
              Join us in honoring those who make a difference. Whether you're nominating someone, 
              applying for recognition, or attending our ceremonies, be part of this prestigious celebration.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Involved →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
