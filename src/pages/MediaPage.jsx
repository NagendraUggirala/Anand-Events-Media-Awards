import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';

const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const satellitePrograms = [
    {
      id: 1,
      title: "Cultural Heritage Show",
      description: "Exploring rich cultural traditions, festivals, and heritage that define our society",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      type: "Infotainment",
      features: ["Cultural Stories", "Traditional Values", "Heritage Preservation", "Community Engagement"]
    },
    {
      id: 2,
      title: "Inspiration Talks",
      description: "Powerful conversations with achievers, leaders, and visionaries sharing their journeys",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
      type: "Talk Show",
      features: ["Success Stories", "Leadership Insights", "Life Lessons", "Motivational Content"]
    },
    {
      id: 3,
      title: "Real Life Journeys",
      description: "Heartwarming stories of ordinary people achieving extraordinary things",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
      type: "Documentary",
      features: ["Human Interest", "Real Stories", "Social Impact", "Emotional Narratives"]
    },
    {
      id: 4,
      title: "Entertainment Spotlight",
      description: "Cinematic entertainment content with purpose, featuring films, music, and arts",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      type: "Entertainment",
      features: ["Film Features", "Music Programs", "Arts & Culture", "Celebrity Interviews"]
    },
    {
      id: 5,
      title: "Social Impact Stories",
      description: "Stories of change-makers and initiatives making a positive difference in society",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      type: "Documentary",
      features: ["Social Change", "Community Impact", "NGO Features", "Volunteer Stories"]
    },
    {
      id: 6,
      title: "Youth Empowerment",
      description: "Content focused on inspiring and empowering the next generation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      type: "Educational",
      features: ["Career Guidance", "Skill Development", "Mentorship", "Life Skills"]
    }
  ];

  const podcastSeries = [
    {
      id: 1,
      title: "Conversations with Achievers",
      episode: "Episode 24",
      guest: "Dr. Priya Sharma",
      guestRole: "Healthcare Innovator",
      topic: "Building a Healthcare Revolution",
      thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
      description: "An inspiring conversation about innovation in healthcare and making medical services accessible"
    },
    {
      id: 2,
      title: "Unsung Heroes",
      episode: "Episode 23",
      guest: "Rajesh Kumar",
      guestRole: "Social Worker",
      topic: "Transforming Lives Through Education",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      description: "Discovering the journey of a social worker who transformed thousands of lives"
    },
    {
      id: 3,
      title: "Success Stories",
      episode: "Episode 22",
      guest: "Amit Patel",
      guestRole: "Entrepreneur",
      topic: "From Startup to Success",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      description: "Lessons learned from building a successful business from the ground up"
    },
    {
      id: 4,
      title: "Mind & Motivation",
      episode: "Episode 21",
      guest: "Dr. Sunita Reddy",
      guestRole: "Life Coach",
      topic: "Mental Strength & Personal Growth",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
      description: "Exploring mental resilience, overcoming challenges, and achieving personal growth"
    },
    {
      id: 5,
      title: "Life Struggles & Growth",
      episode: "Episode 20",
      guest: "Vikram Singh",
      guestRole: "Author & Motivational Speaker",
      topic: "Turning Adversity into Advantage",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
      description: "How to transform life's challenges into opportunities for growth and success"
    },
    {
      id: 6,
      title: "Youth Voices",
      episode: "Episode 19",
      guest: "Neha Gupta",
      guestRole: "Young Entrepreneur",
      topic: "Breaking Barriers at 25",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
      description: "A young entrepreneur shares her journey of breaking stereotypes and achieving success"
    }
  ];

  const motivationalContent = [
    {
      id: 1,
      title: "Daily Motivation",
      description: "Short, powerful messages to start your day with positivity and purpose",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      category: "Motivation",
      duration: "2-5 min"
    },
    {
      id: 2,
      title: "Success Mindset",
      description: "Content focused on developing a success-oriented mindset",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      category: "Personal Development",
      duration: "10-15 min"
    },
    {
      id: 3,
      title: "Social Awareness",
      description: "Content that raises awareness about important social issues and solutions",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      category: "Social Impact",
      duration: "15-20 min"
    },
    {
      id: 4,
      title: "Positive Lifestyle",
      description: "Tips and insights for living a balanced, healthy, and positive life",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
      category: "Lifestyle",
      duration: "5-10 min"
    },
    {
      id: 5,
      title: "Career Growth",
      description: "Content designed to help professionals advance in their careers",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      category: "Professional Development",
      duration: "10-15 min"
    },
    {
      id: 6,
      title: "Youth Inspiration",
      description: "Specially curated content to inspire and guide the younger generation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      category: "Youth",
      duration: "8-12 min"
    }
  ];

  const whyChooseUs = [
    {
      icon: "film",
      title: "Creative Media Professionals",
      description: "Our team of experienced producers, directors, and content creators bring stories to life"
    },
    {
      icon: "star",
      title: "High-Quality Production",
      description: "State-of-the-art equipment and professional standards in every piece of content"
    },
    {
      icon: "lightbulb",
      title: "Positive & Meaningful Storytelling",
      description: "Every story we tell is designed to inspire, educate, and create positive impact"
    },
    {
      icon: "globe",
      title: "Content That Inspires Society",
      description: "Our media content influences society in meaningful and responsible ways"
    },
    {
      icon: "book",
      title: "Authentic Real-Life Stories",
      description: "We focus on genuine, relatable stories that connect with audiences on a deeper level"
    },
    {
      icon: "target",
      title: "Purpose-Driven Content",
      description: "Every program, podcast, and video is created with a clear purpose and positive message"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'satellite', label: 'Satellite Channel' },
    { id: 'podcast', label: 'Podcasts' },
    { id: 'motivational', label: 'Motivational' }
  ];

  const allMediaItems = [
    ...satellitePrograms.map(item => ({ ...item, mediaType: 'satellite' })),
    ...podcastSeries.map(item => ({ ...item, mediaType: 'podcast' })),
    ...motivationalContent.map(item => ({ ...item, mediaType: 'motivational' }))
  ];

  const filteredMedia = activeCategory === 'all' 
    ? allMediaItems 
    : allMediaItems.filter(item => item.mediaType === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header / Title Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
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
              Anand Media
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
              Inspiring Minds. Influencing Tomorrow.
            </p>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Anand Media focuses on storytelling that educates, inspires, and uplifts society 
              through high-quality programs, podcasts, and digital content.
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* 2. Satellite Channel Section */}
      {(activeCategory === 'all' || activeCategory === 'satellite') && (
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
                Satellite Channel Programs
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our satellite channel showcases inspiring real stories, cultural values, and entertainment 
                content with a purpose. From infotainment shows to cultural programs, we deliver meaningful 
                television experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {satellitePrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.type}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-blue-500 mr-2">✓</span>
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
      )}

     {/* 3. Podcast Series Section */}
{(activeCategory === 'all' || activeCategory === 'podcast') && (
  <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Podcast Series – Voices That Matter
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
          Our podcast series brings together well-known achievers, bold visionaries, and everyday heroes whose stories inspire change. 
          Through honest conversations and meaningful life lessons, we shine a spotlight on those shaping the world in their own unique ways.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
          Each episode dives deep into the journeys of dreamers and doers — exploring their successes, failures, mindset shifts, and defining moments. 
          Whether you're seeking motivation, practical insights, or a dose of positive energy, these voices will help you see what’s possible.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Tune in to discover stories that challenge conventions, celebrate resilience, and remind us all to dream bigger and live better.
        </p>
      </motion.div>

      {/* Optional: Add a CTA or episode preview buttons */}
      <div className="text-center mt-10">
        <a
          href="#episodes"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
        >
          Explore Episodes
        </a>
      </div>
    </div>
  </section>
)}


      {/* 4. Motivational & Social Impact Content */}
      {(activeCategory === 'all' || activeCategory === 'motivational') && (
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
                Motivational & Social Impact Content
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We create media that promotes positivity, personal growth, and healthy thinking, especially 
                for youth and working professionals. Our content is designed to inspire action and create 
                positive change.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {motivationalContent.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {content.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {content.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{content.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{content.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Why Anand Media? */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Anand Media?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our media content is designed to influence society in a meaningful and responsible way. 
              We combine creativity, purpose, and quality to deliver content that makes a difference.
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

      {/* 6. Call to Action Section */}
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
              Experience Our Content
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Watch our programs, listen to our podcasts, and join a community that values meaningful 
              content and positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Watch Our Content
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105">
                Join Our Podcast
              </button>
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center"
              >
                Collaborate With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
