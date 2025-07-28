import { db } from "./db";
import { properties, type InsertProperty } from "@shared/schema";

const sampleProperties: InsertProperty[] = [
  {
    name: "Beautiful 1BR | Burj View from Infinity Pool",
    description: "This stunning 1-bedroom apartment offers comfort and cosy vibes, perfect for couples, families or solo travellers. Enjoy high-speed Wi-Fi (800 Mbps), a fully equipped kitchen, 2 smart TV's with FREE NETFLIX , furnished balcony, queen-sized bed, and a full bathroom. The building features an infinity pool with Burj Khalifa views, a modern gym, a workspace area and a kids' play area, making it an ideal retreat for all in the heart of Downtown, Dubai.\n\nThe space\nLiving Room & Balcony:\nThe spacious, open-plan living area is filled with natural light and features a comfortable sofa bed, a Smart TV with Netflix for entertainment, and a balcony that offers charming views of Dubai's cityscape—perfect for enjoying your morning coffee or unwinding in the evening.\n\nBedroom\nRelax in the cozy bedroom, featuring a queen-size bed, premium linens, and a Smart TV, ideal for enjoying Netflix nights.\n\nFully Equipped Kitchen:\nThe sleek, modern kitchen is fully stocked with stainless steel appliances, including a toaster, tea and coffee station, oven, refrigerator, and washing machine, along with cleaning essentials. Enjoy meals at the dining table for four.",
    pricePerNight: "0.00",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    location: "Downtown Dubai",
    amenities: ["Burj Khalifa Views", "Infinity Pool Access", "High-Speed WiFi (800 Mbps)", "2 Smart TVs with Netflix", "Fully Equipped Kitchen", "Modern Gym", "Kids Play Area", "Workspace Area", "Queen-Sized Bed", "Furnished Balcony"],
    images: [
      "/attached_assets/WhatsApp Image 2025-07-23 at 10.21.20_51cd866c_1753288433584.jpg",
      "/attached_assets/WhatsApp Image 2025-07-23 at 10.21.19_9b8a1867_1753288413659.jpg",
      "/attached_assets/WhatsApp Image 2025-07-23 at 10.21.19_609dd4ba_1753288427064.jpg",
      "/attached_assets/5ced0677-b175-4c12-a40b-a75e5fb291ad_1753572676111.webp",
      "/attached_assets/70dbb49c-e2b1-4b39-9364-c5b161834efa_1753572676111.webp",
      "/attached_assets/404425fc-27ca-45d6-9326-85280c92e5d3_1753572676112.webp",
      "/attached_assets/75cb9dd2-ba6b-4062-8cc3-97989de3b7ad_1753572676112.avif",
      "/attached_assets/5404219d-d53c-42ee-8b8d-b935bdb12534_1753572676113.avif",
      "/attached_assets/8fc46cda-6689-49b8-a534-ab73a40ff9c2_1753572615655.avif",
      "/attached_assets/49930f62-e7c9-4c2c-b77b-ea306926722e (1)_1753572615656.avif",
      "/attached_assets/3a8c7386-66f8-412d-98d5-84ba33eeaf53_1753572645844.jpeg",
      "/attached_assets/3ec3db60-50ec-4593-aeb6-bcd652743030_1753572645845.avif",
      "/attached_assets/8f861891-a090-4858-b6d5-d23d8bf017ca_1753572645845.avif",
      "/attached_assets/17d28968-5de3-4ec6-b99b-fe7c886e1945_1753572645845.avif",
      "/attached_assets/998b37e2-fef4-4056-8948-afe42a484499_1753572645846.avif",
      "/attached_assets/a42cc0b3-1926-43be-8e1e-3e3e1e95b41b_1753572645846.avif",
      "/attached_assets/e37ae9bf-0c46-4184-972e-4a6e43bf0938_1753572693870.avif"
    ],
    rating: "5.0",
    featured: true,
    category: "apartment"
  },
  {
    name: "Stunning 1BR | Burj View from Infinity Pool",
    description: "This stunning 1-bedroom apartment offers comfort and cosy vibes, perfect for couples, families or solo travellers. Enjoy high-speed Wi-Fi (800 Mbps), a fully equipped kitchen, 2 smart TV's with FREE NETFLIX , furnished balcony, queen-sized bed, and a full bathroom. The building features an infinity pool with Burj Khalifa views, a modern gym, a workspace area and a kids' play area, making it an ideal retreat for all in the heart of Downtown, Dubai.\n\nThe space\nLiving Room & Balcony:\nThe spacious, open-plan living area is filled with natural light and features a comfortable sofa bed, a Smart TV with Netflix for entertainment, and a balcony that offers charming views of Dubai's cityscape—perfect for enjoying your morning coffee or unwinding in the evening.\n\nBedroom\nRelax in the cozy bedroom, featuring a queen-size bed, premium linens, and a Smart TV, ideal for enjoying Netflix nights.\n\nFully Equipped Kitchen:\nThe sleek, modern kitchen is fully stocked with stainless steel appliances, including a toaster, tea and coffee station, oven, refrigerator, and washing machine, along with cleaning essentials. Enjoy meals at the dining table for four.",
    pricePerNight: "0.00",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    location: "Downtown Dubai",
    amenities: ["Burj Khalifa Views", "Infinity Pool Access", "High-Speed WiFi (800 Mbps)", "2 Smart TVs with Netflix", "Fully Equipped Kitchen", "Modern Gym", "Kids Play Area", "Workspace Area", "Queen-Sized Bed", "Furnished Balcony"],
    images: [
      "/attached_assets/image_1753570473854.png",
      "/attached_assets/b15a9e0d-6e50-4bd0-8caf-f1a94e16ee48_1753570231692.avif",
      "/attached_assets/e2fc0d0c-a20d-46f7-9e59-00ae08c2e7a8_1753570231693.avif",
      "/attached_assets/e37ae9bf-0c46-4184-972e-4a6e43bf0938_1753570231694.avif",
      "/attached_assets/e24551c4-4cf8-48cd-b71f-9cf1717e07e4_1753570231694.avif",
      "/attached_assets/f13f8594-69bf-4168-becc-6aa09026c3bd_1753570231696.avif",
      "/attached_assets/f605653a-a706-4eb6-9093-662ec01b180d_1753570231696.avif",
      "/attached_assets/ece2bf23-987e-46e2-ba6f-62780c624979_1753570231695.jpeg",
      "/attached_assets/70dbb49c-e2b1-4b39-9364-c5b161834efa_1753570231689.webp",
      "/attached_assets/404425fc-27ca-45d6-9326-85280c92e5d3_1753570231689.webp",
      "/attached_assets/75cb9dd2-ba6b-4062-8cc3-97989de3b7ad_1753570231689.avif",
      "/attached_assets/5404219d-d53c-42ee-8b8d-b935bdb12534_1753570231690.avif",
      "/attached_assets/66469872-72fb-44ad-bac9-53d669f86f35_1753570231690.avif",
      "/attached_assets/80310877-bd3c-495a-ae67-7cbae1a6f99f_1753570231690.avif",
      "/attached_assets/a69e50fe-514f-4f72-8cdf-7f61c1121178_1753570231691.avif",
      "/attached_assets/b3bd2673-8642-4e4c-a0e5-994c520e804a_1753570231692.avif",
      "/attached_assets/cbcccbcc-120e-4d12-8bc9-bbf3c6a8d548 (1)_1753570231693.avif",
      "/attached_assets/f8d36c0c-d73d-4877-ae9b-5c89242fa852_1753570231695.avif",
      "/attached_assets/5ced0677-b175-4c12-a40b-a75e5fb291ad_1753570231688.webp",
      "/attached_assets/6dc502c2-2821-4b33-8782-45b3ba528142_1753570231688.avif",
      "/attached_assets/8e8aedd6-64b3-46b3-98e1-df0ed642dd2b_1753570231688.jpeg"
    ],
    rating: "4.9",
    featured: false,
    category: "apartment"
  }
];

export async function seedDatabase() {
  try {
    // Check if properties already exist
    const existingProperties = await db.select().from(properties);
    
    if (existingProperties.length === 0) {
      console.log("Seeding database with sample properties...");
      await db.insert(properties).values(sampleProperties);
      console.log("Database seeded successfully!");
    } else {
      console.log("Database already contains properties, skipping seed.");
    }
  } catch (error) {
    console.log("Database seeding skipped - using in-memory storage fallback");
    // Fallback gracefully without breaking the app
  }
}