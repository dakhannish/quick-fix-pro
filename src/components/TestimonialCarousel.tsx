import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer Lee",
      role: "Homeowner",
      content: "I had a leaking pipe that needed urgent fixing. QuickFix Pro responded within 30 minutes and solved the problem efficiently. Their plumber was professional and courteous. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Business Owner",
      content: "We needed electrical work done in our office and QuickFix Pro delivered exceptional service. They were on time, knowledgeable, and completed the job within budget. Our go-to service from now on!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Apartment Resident",
      content: "Had an electrical emergency late at night and their 24/7 service was a lifesaver! The electrician arrived quickly, diagnosed and fixed the issue professionally. Fair pricing and excellent work!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop"
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. See what our customers have to say about our reliable plumbing and electrical services.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
