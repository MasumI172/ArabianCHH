import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ConciergeBell, 
  Car, 
  Utensils, 
  Ship, 
  Bath, 
  Shield,
  Clock,
  Plane,
  Camera,
  MapPin,
  Users,
  Wine
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: ConciergeBell,
      title: "24/7 ConciergeBell Service",
      description: "Our dedicated concierge team is available around the clock to assist with any request, from restaurant reservations to activity bookings and special arrangements.",
      features: [
        "Restaurant reservations at top venues",
        "Activity and excursion bookings",
        "Special event planning",
        "Personal shopping assistance",
        "Local recommendations and guides"
      ]
    },
    {
      icon: Car,
      title: "Luxury Transportation",
      description: "Travel in style with our premium transportation services, including airport transfers, luxury car rentals, and private chauffeur services.",
      features: [
        "Airport transfers in luxury vehicles",
        "Private chauffeur services",
        "Luxury car rentals",
        "Helicopter transfers",
        "Private yacht charters"
      ]
    },
    {
      icon: Utensils,
      title: "Private Chef Services",
      description: "Enjoy world-class cuisine prepared by our professional chefs in the comfort of your villa, featuring local and international specialties.",
      features: [
        "Personal chef for all meals",
        "Custom menu planning",
        "Special dietary accommodations",
        "Wine pairing services",
        "Cooking classes available"
      ]
    },
    {
      icon: Ship,
      title: "Yacht & Water Sports",
      description: "Explore the pristine Arabian waters with our exclusive yacht charters and comprehensive water sports activities.",
      features: [
        "Private yacht charters",
        "Deep sea fishing trips",
        "Snorkeling and diving excursions",
        "Jet ski rentals",
        "Sunset cruise experiences"
      ]
    },
    {
      icon: Bath,
      title: "Wellness & Bath",
      description: "Rejuvenate your mind, body, and soul with our in-villa spa services and wellness programs designed for ultimate relaxation.",
      features: [
        "In-villa massage treatments",
        "Yoga and meditation sessions",
        "Personal trainer services",
        "Beauty and grooming services",
        "Wellness consultation"
      ]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enjoy complete peace of mind with our discreet security services and privacy protection measures for high-profile guests.",
      features: [
        "24/7 security personnel",
        "Privacy protection protocols",
        "Secure transportation",
        "Background-checked staff",
        "Confidentiality agreements"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Plane,
      title: "Private Jet Services",
      description: "Seamless travel arrangements with private jet charters and helicopter transfers."
    },
    {
      icon: Camera,
      title: "Photography Services",
      description: "Professional photographers to capture your special moments and vacation memories."
    },
    {
      icon: MapPin,
      title: "Local Experiences",
      description: "Curated cultural experiences and exclusive access to local attractions and events."
    },
    {
      icon: Users,
      title: "Event Planning",
      description: "Full-service event planning for celebrations, corporate retreats, and special occasions."
    },
    {
      icon: Wine,
      title: "Sommelier Services",
      description: "Expert wine selection and tasting experiences with certified sommeliers."
    },
    {
      icon: Clock,
      title: "Personal Assistant",
      description: "Dedicated personal assistant services for business travelers and extended stays."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gold-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive luxury services to ensure your vacation is
              seamless, extraordinary, and tailored to your every need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium <span className="text-gold-500">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our flagship services designed to elevate your vacation experience
              to unparalleled levels of luxury and comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="bg-gold-100 p-4 rounded-lg">
                          <IconComponent className="w-8 h-8 text-gold-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional <span className="text-gold-500">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services to enhance your stay and create truly
              memorable experiences tailored to your preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-0">
                      <div className="bg-gold-100 p-4 rounded-lg inline-block mb-4">
                        <IconComponent className="w-6 h-6 text-gold-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-gold-500">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our seamless service process ensures every detail is perfectly
              orchestrated for your comfort and satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your preferences and requirements to customize your experience."
              },
              {
                step: "2",
                title: "Planning",
                description: "Our team creates a detailed plan tailored to your needs and desires."
              },
              {
                step: "3",
                title: "Coordination",
                description: "We handle all arrangements and coordinate with service providers."
              },
              {
                step: "4",
                title: "Execution",
                description: "Enjoy flawless service delivery throughout your entire stay."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gold-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience <span className="text-gold-500">Luxury</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us create an extraordinary vacation experience tailored specifically
              to your preferences and desires. Contact us today to begin planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-4 text-lg font-semibold"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/properties">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300 rounded-full px-8 py-4 text-lg font-semibold"
                >
                  Browse Properties
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
