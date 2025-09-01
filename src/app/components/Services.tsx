// src/app/components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Service } from "../types";

const services: Service[] = [
  {
    id: 1,
    title: "Property Buying",
    description: "We help you find and purchase your dream home with expert guidance through every step of the process.",
    icon: "🏠"
  },
  {
    id: 2,
    title: "Property Selling",
    description: "Maximize your property's value with our marketing expertise and extensive buyer network.",
    icon: "💰"
  },
  {
    id: 3,
    title: "Property Management",
    description: "Comprehensive management services to maintain and enhance your investment property's value.",
    icon: "🔑"
  },
  {
    id: 4,
    title: "Real Estate Consulting",
    description: "Expert advice on market trends, investment opportunities, and property valuation.",
    icon: "📊"
  }
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of real estate services to meet all your property needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}