import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Home, 
  Star, 
  Shield, 
  Heart,
  CheckCircle,
  Target,
  Eye
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Home, value: "500+", label: "Premium Properties" },
    { icon: Users, value: "50K+", label: "Happy Guests" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "10+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We ensure the highest standards of safety and security for all our properties and guests."
    },
    {
      icon: Heart,
      title: "Exceptional Service",
      description: "Our dedicated team goes above and beyond to create unforgettable experiences for every guest."
    },
    {
      icon: Star,
      title: "Quality Excellence",
      description: "Every property in our collection is carefully curated to meet our stringent quality standards."
    },
    {
      icon: Users,
      title: "Guest-Centric",
      description: "Your satisfaction is our priority. We listen to your needs and exceed your expectations."
    }
  ];

  const team = [
    {
      name: "Sarah Al-Rashid",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "With over 15 years in luxury hospitality, Sarah founded Arabian Coast to redefine vacation rentals."
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Michael ensures seamless operations and maintains our high standards across all properties."
    },
    {
      name: "Fatima Hassan",
      position: "Guest Experience Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Fatima leads our guest services team, ensuring every stay exceeds expectations."
    }
  ];

  return (
    <div className="min-h-screen pt-16 flex flex-col">
      {/* Hero Section */}
      <section className="luxury-bg py-20 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >

            <p className="text-xl md:text-2xl luxury-text leading-relaxed luxury-serif font-light max-w-4xl mx-auto">
              We're your gateway to a perfect Dubai escape, blending luxury and comfort. Whether you're here for the skyline, the beaches, or the desert adventures, we've got you covered with stunning stays that feel just like home—but better.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
