import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BookingCalendar from "@/components/booking-calendar";
import { 
  Users, 
  Bed, 
  Bath, 
  MapPin, 
  Wifi, 
  Car, 
  Utensils,
  ArrowLeft,
  Calendar,
  CheckCircle
} from "lucide-react";
import type { Property } from "@shared/schema";

const PropertyDetail = () => {
  const { id } = useParams();
  const propertyId = parseInt(id || "0");

  const { data: property, isLoading, error } = useQuery<Property>({
    queryKey: [`/api/properties/${propertyId}`],
    enabled: !!propertyId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="bg-gray-300 h-96 rounded-2xl mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-gray-300 h-8 rounded w-1/2"></div>
                <div className="bg-gray-300 h-4 rounded"></div>
                <div className="bg-gray-300 h-4 rounded w-3/4"></div>
              </div>
              <div className="bg-gray-300 h-64 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-6">
              The property you're looking for doesn't exist or may have been removed.
            </p>
            <Link href="/properties">
              <Button className="bg-gold-500 text-white hover:bg-gold-600">
                Browse Properties
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/properties">
          <Button variant="ghost" className="mb-4 hover:text-gold-500">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-luxury-cream/10">
                    <img
                      src={image}
                      alt={`${property.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                      style={{
                        filter: "contrast(1.05) saturate(1.1) brightness(1.02)"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>
      </section>

      {/* Property Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {property.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" />
                {property.bedrooms} Bedrooms
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2" />
                {property.bathrooms} Bathrooms
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Up to {property.maxGuests} Guests
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-luxury-brown mb-6">About This Property</h2>
              <div className="space-y-6">
                {/* Overview */}
                <div className="bg-luxury-cream/30 p-6 rounded-xl border border-luxury-gold/20">
                  <p className="text-luxury-brown leading-relaxed text-lg">
                    This stunning 1-bedroom apartment offers comfort and cosy vibes, perfect for couples, families or solo travellers. Enjoy high-speed Wi-Fi (800 Mbps), a fully equipped kitchen, 2 smart TV's with FREE NETFLIX, furnished balcony, queen-sized bed, and a full bathroom.
                  </p>
                </div>

                {/* Building Features */}
                <div>
                  <h3 className="text-xl font-semibold text-luxury-brown mb-3">Building Amenities</h3>
                  <p className="text-luxury-light-brown leading-relaxed">
                    The building features an infinity pool with Burj Khalifa views, a modern gym, a workspace area and a kids' play area, making it an ideal retreat for all in the heart of Downtown, Dubai.
                  </p>
                </div>

                {/* Living Spaces */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-luxury-brown">Living Room & Balcony</h3>
                    <p className="text-luxury-light-brown leading-relaxed">
                      The spacious, open-plan living area is filled with natural light and features a comfortable sofa bed, a Smart TV with Netflix for entertainment, and a balcony that offers charming views of Dubai's cityscape—perfect for enjoying your morning coffee or unwinding in the evening.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-luxury-brown">Bedroom</h3>
                    <p className="text-luxury-light-brown leading-relaxed">
                      Relax in the cozy bedroom, featuring a queen-size bed, premium linens, and a Smart TV, ideal for enjoying Netflix nights.
                    </p>
                  </div>
                </div>

                {/* Kitchen */}
                <div>
                  <h3 className="text-xl font-semibold text-luxury-brown mb-3">Fully Equipped Kitchen</h3>
                  <p className="text-luxury-light-brown leading-relaxed">
                    The sleek, modern kitchen is fully stocked with stainless steel appliances, including a toaster, tea and coffee station, oven, refrigerator, and washing machine, along with cleaning essentials. Enjoy meals at the dining table for four.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gold-500 mr-3" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Booking Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <BookingCalendar 
              propertyId={property.id} 
              maxGuests={property.maxGuests}
              propertyName={property.name}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
