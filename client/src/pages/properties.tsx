import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import PropertyCard from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, MapPin, CheckCircle } from "lucide-react";
import type { Property } from "@shared/schema";

const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  // Check for URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const checkIn = urlParams.get('checkIn');
    const checkOut = urlParams.get('checkOut');
    
    // Validate dates are not in the past and check-out is after check-in
    const today = new Date().toISOString().split('T')[0];
    
    if (checkIn && checkIn >= today) {
      setCheckInDate(checkIn);
    }
    if (checkOut && checkOut >= today && checkIn && checkOut > checkIn) {
      setCheckOutDate(checkOut);
    }
  }, []);

  // Build query with date filtering if dates are present
  const queryParams = new URLSearchParams();
  if (checkInDate) queryParams.append('checkIn', checkInDate);
  if (checkOutDate) queryParams.append('checkOut', checkOutDate);
  const queryString = queryParams.toString();

  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties", queryString],
    queryFn: async () => {
      const url = `/api/properties${queryString ? `?${queryString}` : ''}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch properties');
      return response.json();
    },
  });

  const categories = [
    { value: "all", label: "All Properties" },
    { value: "apartment", label: "Apartment" },
  ];



  const filteredProperties = properties?.filter((property) => {
    const matchesCategory = selectedCategory === "all" || property.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-gold-500">Properties</span>
            </h1>
            {checkInDate && checkOutDate ? (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Available {new Date(checkInDate).toLocaleDateString('en-GB')} - {new Date(checkOutDate).toLocaleDateString('en-GB')}
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                  Showing properties available for your selected dates
                </p>
                
                {/* Date Selection for changing dates */}
                <div className="bg-white rounded-xl shadow-lg p-4 max-w-2xl mx-auto">
                  <p className="text-sm font-medium text-gray-700 mb-3 text-center">Change your dates</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                      <input 
                        type="date" 
                        value={checkInDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => {
                          const newCheckIn = e.target.value;
                          setCheckInDate(newCheckIn);
                          
                          // If check-out is before or equal to new check-in, clear it
                          if (checkOutDate && checkOutDate <= newCheckIn) {
                            setCheckOutDate("");
                          }
                          
                          // Update URL params
                          const newUrl = new URL(window.location.href);
                          newUrl.searchParams.set('checkIn', newCheckIn);
                          if (checkOutDate && checkOutDate > newCheckIn) {
                            newUrl.searchParams.set('checkOut', checkOutDate);
                          } else {
                            newUrl.searchParams.delete('checkOut');
                          }
                          window.history.replaceState({}, '', newUrl.toString());
                        }}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                      <input 
                        type="date" 
                        value={checkOutDate}
                        min={checkInDate ? new Date(new Date(checkInDate).getTime() + 24*60*60*1000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                        onChange={(e) => {
                          setCheckOutDate(e.target.value);
                          // Update URL params
                          const newUrl = new URL(window.location.href);
                          if (checkInDate) newUrl.searchParams.set('checkIn', checkInDate);
                          newUrl.searchParams.set('checkOut', e.target.value);
                          window.history.replaceState({}, '', newUrl.toString());
                        }}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <Button 
                      onClick={() => {
                        // Clear dates and remove from URL
                        setCheckInDate("");
                        setCheckOutDate("");
                        const newUrl = new URL(window.location.href);
                        newUrl.searchParams.delete('checkIn');
                        newUrl.searchParams.delete('checkOut');
                        window.history.replaceState({}, '', newUrl.toString());
                      }}
                      variant="outline"
                      className="text-sm"
                    >
                      Clear Dates
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover our complete collection of luxury holiday homes
                </p>
                
                {/* Date Selection for initial search */}
                <div className="bg-white rounded-xl shadow-lg p-4 max-w-2xl mx-auto">
                  <p className="text-sm font-medium text-gray-700 mb-3 text-center">Select dates to check availability</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                      <input 
                        type="date" 
                        value={checkInDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => {
                          const newCheckIn = e.target.value;
                          setCheckInDate(newCheckIn);
                          
                          // If check-out is before or equal to new check-in, clear it
                          if (checkOutDate && checkOutDate <= newCheckIn) {
                            setCheckOutDate("");
                          }
                        }}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                      <input 
                        type="date" 
                        value={checkOutDate}
                        min={checkInDate ? new Date(new Date(checkInDate).getTime() + 24*60*60*1000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                        onChange={(e) => {
                          setCheckOutDate(e.target.value);
                          
                          // Auto-trigger availability search when both dates are selected
                          if (checkInDate && e.target.value) {
                            const newUrl = new URL(window.location.href);
                            newUrl.searchParams.set('checkIn', checkInDate);
                            newUrl.searchParams.set('checkOut', e.target.value);
                            window.history.replaceState({}, '', newUrl.toString());
                          }
                        }}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>

                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 items-center"
          >
            <div className="flex gap-4 items-center justify-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg h-96 animate-pulse">
                  <div className="bg-gray-300 h-64 rounded-t-2xl"></div>
                  <div className="p-6 space-y-3">
                    <div className="bg-gray-300 h-4 rounded"></div>
                    <div className="bg-gray-300 h-3 rounded w-3/4"></div>
                    <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProperties && filteredProperties.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4"
              >
                <p className="text-gray-600">
                  Showing {filteredProperties.length} of {properties?.length || 0} properties
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    index={index}
                    showAvailability={checkInDate && checkOutDate ? true : false}
                    isAvailable={true} // For now, assume available if dates are selected - can be enhanced with real availability data
                  />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Card className="max-w-md mx-auto p-8">
                <CardContent className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Properties Found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or browse all properties.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all");
                    }}
                    className="bg-gold-500 text-white hover:bg-gold-600"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
