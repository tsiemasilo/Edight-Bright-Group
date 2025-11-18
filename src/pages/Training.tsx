import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Code, 
  Shield, 
  Cloud, 
  Database, 
  CheckCircle,
  Clock,
  Award,
  Users,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Training = () => {
  const courses = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web Development Bootcamp',
      description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js',
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      topics: [
        'HTML5 & CSS3 fundamentals',
        'JavaScript ES6+',
        'React.js & modern frameworks',
        'Node.js & Express',
        'Database integration',
        'Deployment & DevOps',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Cybersecurity Essentials',
      description: 'Learn to protect systems and data from cyber threats and attacks',
      duration: '8 weeks',
      level: 'Intermediate',
      topics: [
        'Security fundamentals',
        'Network security',
        'Threat detection & response',
        'Ethical hacking basics',
        'Security best practices',
        'Compliance & regulations',
      ],
      color: 'from-darkblue-600 to-darkblue-700',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Computing & AWS',
      description: 'Build and deploy scalable applications on cloud platforms',
      duration: '10 weeks',
      level: 'Intermediate to Advanced',
      topics: [
        'Cloud architecture fundamentals',
        'AWS core services',
        'Infrastructure as Code',
        'Containerization with Docker',
        'Kubernetes orchestration',
        'Cloud security & optimization',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Database Management',
      description: 'Master SQL and NoSQL databases for modern applications',
      duration: '6 weeks',
      level: 'Beginner to Intermediate',
      topics: [
        'SQL fundamentals',
        'Database design & modeling',
        'Query optimization',
        'NoSQL databases (MongoDB)',
        'Data migration strategies',
        'Backup & recovery',
      ],
      color: 'from-primary-500 to-primary-600',
    },
  ]

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Certification',
      description: 'Receive recognized certificates upon course completion',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Schedule',
      description: 'Study at your own pace with online and in-person options',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Hands-on Projects',
      description: 'Build real projects to showcase in your portfolio',
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
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-orange-100 text-darkblue-800 rounded-full text-sm font-semibold mb-4">
              Training Programs
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-darkblue-900 mb-6">
              Upskill Your{' '}
              <span className="text-gradient">Tech Career</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional training programs designed to equip you with in-demand skills for the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive, industry-aligned training that prepares you for success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-white to-beige-50 rounded-2xl border border-gray-200 hover:border-primary-300 card-hover"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-darkblue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
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
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses designed by industry experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary-300 card-hover"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${course.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-darkblue-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center space-x-4 mb-6 text-sm">
                  <span className="flex items-center space-x-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="px-3 py-1 bg-beige-100 text-darkblue-800 rounded-full text-xs font-semibold">
                    {course.level}
                  </span>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-darkblue-900">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group/link"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-darkblue-900 via-darkblue-800 to-darkblue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join our training programs and take your tech skills to the next level
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Training
