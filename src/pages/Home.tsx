import { motion } from 'framer-motion'
import { ArrowRight, Laptop, Code, Shield, Cloud, GraduationCap, Zap, Users, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Hardware Solutions',
      description: 'Premium laptops, printers, and IT accessories with expert maintenance and support services.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, from web apps to enterprise systems.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
      color: 'from-darkblue-600 to-darkblue-700',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'IT Training',
      description: 'Professional training programs to upskill your team and stay ahead of the curve.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Strategic consulting to modernize your business processes and technology stack.',
      color: 'from-darkblue-600 to-darkblue-700',
    },
  ]

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-50 via-white to-primary-50 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-beige-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-orange-100 text-darkblue-800 rounded-full text-sm font-semibold mb-4">
              EDGAR BRIGHT GROUP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-darkblue-900 mb-6"
          >
            Empowering Africa's{' '}
            <span className="text-gradient">Digital Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            We are a visionary IT solutions company based in Pretoria, Gauteng. Specializing in cutting-edge technology, secure systems, and transformative digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/services"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-darkblue-900 border-2 border-darkblue-200 rounded-xl font-semibold hover:bg-beige-50 hover:border-primary-400 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-gray-500">
            <span className="text-sm font-medium">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-beige-100 text-darkblue-800 rounded-full text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From hardware to software, security to training—we deliver excellence across every facet of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-white to-beige-50 rounded-2xl border border-gray-200 hover:border-primary-300 card-hover"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-darkblue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-darkblue-900 via-darkblue-800 to-darkblue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
