import { motion } from 'framer-motion'
import { Target, Eye, Users, Globe, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly exploring new technologies to provide cutting-edge solutions.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working closely with clients to understand and meet their unique needs.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Impact',
      description: 'Creating solutions that make a meaningful difference in Africa\'s digital landscape.',
    },
  ]

  const team = [
    {
      name: 'Mantsie Senyane Bright',
      role: 'Co-Founder & Technology Director',
      image: '👨‍💻',
    },
    {
      name: 'Edgar Tshwarelo Moloantoa',
      role: 'Co-Founder & Strategy Director',
      image: '👨‍💼',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-beige-50 via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-orange-100 text-darkblue-800 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-darkblue-900 mb-6">
              Building Tomorrow's{' '}
              <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EDIGHT (PTY), part of EDGAR BRIGHT GROUP, is dedicated to transforming businesses through innovative technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold text-darkblue-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in Pretoria, Gauteng, EDIGHT (PTY) emerged from a vision to bridge the technology gap in Africa. As part of the EDGAR BRIGHT GROUP, we combine technical expertise with business acumen to deliver comprehensive IT solutions.
                </p>
                <p>
                  Our journey began with a simple belief: that African businesses deserve world-class technology solutions tailored to their unique challenges and opportunities.
                </p>
                <p>
                  Today, we serve clients across various industries, helping them navigate digital transformation, strengthen their security posture, and empower their teams with cutting-edge skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
                <Eye className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-darkblue-900 mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  To be Africa's leading IT solutions provider, driving digital transformation across the continent.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl mt-8">
                <Target className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-darkblue-900 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  Empower businesses with innovative, secure, and scalable technology solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary-300 card-hover"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-darkblue-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionaries behind EDGAR BRIGHT GROUP
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-gradient-to-br from-beige-50 to-white rounded-2xl border border-gray-200 hover:border-primary-300 card-hover"
              >
                <div className="text-7xl mb-6">{member.image}</div>
                <h3 className="text-2xl font-bold text-darkblue-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
