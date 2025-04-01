import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Electrical Services",
      description: "Professional solutions for all your electrical needs, from repairs to installations.",
      icon: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      items: [
        "Wiring & Rewiring",
        "Electrical Panel Upgrades",
        "Lighting Installation",
        "Emergency Electrical Repairs",
        "Electrical Safety Inspections"
      ],
      buttonText: "Book an Electrician",
      path: "/electrician",
      color: "secondary"
    },
    {
      id: 2,
      title: "Plumbing Services",
      description: "Expert plumbing solutions for your home or business with upfront pricing and guaranteed satisfaction.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      items: [
        "Leak Detection & Repair",
        "Drain Cleaning & Unclogging",
        "Water Heater Services",
        "Bathroom & Kitchen Plumbing",
        "Emergency Plumbing Repairs"
      ],
      buttonText: "Book a Plumber",
      path: "/plumber",
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Professional plumbing and electrical services for your home or business. Our licensed experts are ready to help with any repair or installation.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`rounded-lg shadow-lg overflow-hidden border-t-4 ${service.color === 'primary' ? 'border-primary' : 'border-secondary'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="bg-white p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <svg 
                        className={`w-5 h-5 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'} mr-2`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-3 px-6 rounded-full font-medium text-white ${service.color === 'primary' ? 'bg-black hover:bg-primary-600' : 'bg-gray-900 hover:bg-secondary-600'} shadow-md`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate(service.path)}
                >
                  {service.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
