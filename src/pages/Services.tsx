import { motion } from 'framer-motion'
import { 
  Laptop, 
  Code, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Settings, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: <Laptop className="w-10 h-10" />,
      title: 'Hardware Solutions',
      description: 'Complete hardware procurement, deployment, and maintenance services.',
      features: [
        'Premium laptops and workstations',
        'Enterprise printers and peripherals',
        'IT accessories and supplies',
        'Hardware maintenance & support',
        'Asset management',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business requirements.',
      features: [
        'Web application development',
        'Mobile app development',
        'Enterprise software solutions',
        'API development & integration',
        'Legacy system modernization',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security assessments & audits',
        'Threat detection & response',
        'Network security',
        'Data encryption & protection',
        'Security training & awareness',
      ],
      color: 'from-darkblue-600 to-darkblue-700',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration expertise.',
      features: [
        'Cloud strategy & planning',
        'Cloud migration services',
        'Infrastructure as Code',
        'Multi-cloud management',
        'Cloud optimization',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Database Solutions',
      description: 'Expert database design, optimization, and management.',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Data migration services',
        'Backup & recovery solutions',
        'Database administration',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'Network Infrastructure',
      description: 'Robust network design, implementation, and management.',
      features: [
        'Network design & setup',
        'LAN/WAN configuration',
        'Wireless solutions',
        'Network monitoring',
        'Performance optimization',
      ],
      color: 'from-darkblue-600 to-darkblue-700',
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
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-darkblue-900 mb-6">
              Comprehensive{' '}
              <span className="text-gradient">IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hardware to cloud services, we provide end-to-end technology solutions that drive business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-white to-beige-50 rounded-2xl border border-gray-200 hover:border-primary-300 card-hover"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-darkblue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and challenges' },
              { step: '02', title: 'Strategy', description: 'Crafting tailored solutions' },
              { step: '03', title: 'Implementation', description: 'Executing with precision' },
              { step: '04', title: 'Support', description: 'Ongoing optimization and care' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-gradient mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-darkblue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
