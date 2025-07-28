import type { Property } from "@shared/schema";

/**
 * Utility functions for working with property data
 */

/**
 * Format price for display
 */
export function formatPrice(price: string | number): string {
  const numPrice = typeof price === "string" ? parseFloat(price) : price;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numPrice);
}

/**
 * Format rating for display
 */
export function formatRating(rating: string | number): string {
  const numRating = typeof rating === "string" ? parseFloat(rating) : rating;
  return numRating.toFixed(1);
}

/**
 * Get property category display name
 */
export function getCategoryDisplayName(category: string): string {
  const categoryMap: Record<string, string> = {
    beachfront: "Beachfront",
    villa: "Villa",
    mansion: "Mansion",
    penthouse: "Penthouse",
    retreat: "Retreat",
  };
  return categoryMap[category] || category;
}

/**
 * Filter properties by search term
 */
export function filterPropertiesBySearch(
  properties: Property[],
  searchTerm: string
): Property[] {
  if (!searchTerm.trim()) return properties;

  const term = searchTerm.toLowerCase();
  return properties.filter(
    (property) =>
      property.name.toLowerCase().includes(term) ||
      property.description.toLowerCase().includes(term) ||
      property.location.toLowerCase().includes(term) ||
      property.amenities.some((amenity) =>
        amenity.toLowerCase().includes(term)
      )
  );
}

/**
 * Filter properties by category
 */
export function filterPropertiesByCategory(
  properties: Property[],
  category: string
): Property[] {
  if (category === "all") return properties;
  return properties.filter((property) => property.category === category);
}

/**
 * Filter properties by price range
 */
export function filterPropertiesByPrice(
  properties: Property[],
  priceRange: string
): Property[] {
  if (priceRange === "all") return properties;

  return properties.filter((property) => {
    const price = parseFloat(property.pricePerNight);
    switch (priceRange) {
      case "0-500":
        return price < 500;
      case "500-1000":
        return price >= 500 && price <= 1000;
      case "1000-1500":
        return price >= 1000 && price <= 1500;
      case "1500+":
        return price > 1500;
      default:
        return true;
    }
  });
}

/**
 * Sort properties by different criteria
 */
export function sortProperties(
  properties: Property[],
  sortBy: "price-asc" | "price-desc" | "rating" | "name"
): Property[] {
  const sorted = [...properties];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort(
        (a, b) => parseFloat(a.pricePerNight) - parseFloat(b.pricePerNight)
      );
    case "price-desc":
      return sorted.sort(
        (a, b) => parseFloat(b.pricePerNight) - parseFloat(a.pricePerNight)
      );
    case "rating":
      return sorted.sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
      );
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

/**
 * Get properties suitable for a number of guests
 */
export function filterPropertiesByGuests(
  properties: Property[],
  guestCount: number
): Property[] {
  return properties.filter((property) => property.maxGuests >= guestCount);
}

/**
 * Get properties with specific amenities
 */
export function filterPropertiesByAmenities(
  properties: Property[],
  requiredAmenities: string[]
): Property[] {
  if (requiredAmenities.length === 0) return properties;

  return properties.filter((property) =>
    requiredAmenities.every((amenity) =>
      property.amenities.some((propAmenity) =>
        propAmenity.toLowerCase().includes(amenity.toLowerCase())
      )
    )
  );
}

/**
 * Get random featured properties
 */
export function getRandomFeaturedProperties(
  properties: Property[],
  count: number = 3
): Property[] {
  const featured = properties.filter((property) => property.featured);
  const shuffled = [...featured].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Calculate average rating for all properties
 */
export function calculateAverageRating(properties: Property[]): number {
  if (properties.length === 0) return 0;

  const total = properties.reduce(
    (sum, property) => sum + parseFloat(property.rating),
    0
  );
  return total / properties.length;
}

/**
 * Get property statistics
 */
export function getPropertyStatistics(properties: Property[]) {
  const totalProperties = properties.length;
  const averageRating = calculateAverageRating(properties);
  const averagePrice =
    properties.reduce(
      (sum, property) => sum + parseFloat(property.pricePerNight),
      0
    ) / totalProperties;

  const priceRange = {
    min: Math.min(
      ...properties.map((property) => parseFloat(property.pricePerNight))
    ),
    max: Math.max(
      ...properties.map((property) => parseFloat(property.pricePerNight))
    ),
  };

  const categoryCounts = properties.reduce((acc, property) => {
    acc[property.category] = (acc[property.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalProperties,
    averageRating,
    averagePrice,
    priceRange,
    categoryCounts,
  };
}

/**
 * Validate property data
 */
export function validateProperty(property: Partial<Property>): string[] {
  const errors: string[] = [];

  if (!property.name || property.name.trim().length === 0) {
    errors.push("Property name is required");
  }

  if (!property.description || property.description.trim().length < 10) {
    errors.push("Property description must be at least 10 characters");
  }

  if (!property.pricePerNight || parseFloat(property.pricePerNight) <= 0) {
    errors.push("Valid price per night is required");
  }

  if (!property.bedrooms || property.bedrooms < 1) {
    errors.push("Number of bedrooms must be at least 1");
  }

  if (!property.bathrooms || property.bathrooms < 1) {
    errors.push("Number of bathrooms must be at least 1");
  }

  if (!property.maxGuests || property.maxGuests < 1) {
    errors.push("Maximum guests must be at least 1");
  }

  if (!property.location || property.location.trim().length === 0) {
    errors.push("Location is required");
  }

  if (!property.images || property.images.length === 0) {
    errors.push("At least one image is required");
  }

  if (!property.amenities || property.amenities.length === 0) {
    errors.push("At least one amenity is required");
  }

  if (!property.category || property.category.trim().length === 0) {
    errors.push("Category is required");
  }

  return errors;
}

/**
 * Generate property URL slug
 */
export function generatePropertySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Calculate nights between dates
 */
export function calculateNights(checkIn: string, checkOut: string): number {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

/**
 * Calculate total cost for a stay
 */
export function calculateTotalCost(
  pricePerNight: string | number,
  checkIn: string,
  checkOut: string,
  serviceFee: number = 0,
  taxRate: number = 0
): {
  nights: number;
  basePrice: number;
  serviceFee: number;
  tax: number;
  total: number;
} {
  const nights = calculateNights(checkIn, checkOut);
  const nightly = typeof pricePerNight === "string" ? parseFloat(pricePerNight) : pricePerNight;
  const basePrice = nightly * nights;
  const tax = basePrice * taxRate;
  const total = basePrice + serviceFee + tax;

  return {
    nights,
    basePrice,
    serviceFee,
    tax,
    total,
  };
}
