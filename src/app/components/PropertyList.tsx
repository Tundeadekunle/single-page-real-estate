// src/app/components/PropertyList.tsx
"use client";

import { motion } from "framer-motion";
import { Property } from "../types";

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Villa in Beverly Hills",
    price: "₦300,200,000",
    address: "123 Victoria Island, Lagos State, Nigeria",
    beds: 5,
    baths: 4,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Condo with Ocean View",
    price: "₦201,850,000",
    address: "456 Ibara GRA, Abeokuta, Ogun State, Nigeria",
    beds: 3,
    baths: 3,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Classic Townhouse in Manhattan",
    price: "₦112,750,000",
    address: "789 Peak Island, Abeokuta, Ogun State, Nigeria",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80"
  },
  {
    id: 4,
    title: "Mountain Retreat in Aspen",
    price: "₦104,500,000",
    address: "124 Victoria Estate, Abeokuta, Ogun State, Nigeria",
    beds: 6,
    baths: 5,
    sqft: 5500,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  }
];

export default function PropertyList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that offer the perfect blend of luxury, comfort, and location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                {property.featured && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {property.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {property.address}
                </p>
                <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
}