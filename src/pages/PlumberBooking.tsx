import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ContactOptionSection } from '../components/ContactOptionSection';

const issueTypes = [
  'Pipe Leakage',
  'Bathroom Fittings',
  'Water Heater Repair',
  'Drain Cleaning',
  'Sewer Line Issues',
  'Emergency Plumbing',
  'Leak Detection',
  'Faucet Installation',
  'Toilet Repair',
  'Water Softener Installation'
];

const PlumberBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    issueType: '',
    urgency: 'medium',
    location: '',
    contactName: '',
    phone: '',
    email: '',
    description: ''
  });

  const navigate = useNavigate(); 

  useEffect(() => {
    let basePrice = 100;
    const urgencyMultiplier = {
      low: 1,
      medium: 1.5,
      high: 2
    };

    if (formData.issueType) {
      const complexityFactor = issueTypes.indexOf(formData.issueType) * 10;
      basePrice += complexityFactor;
    }

  }, [formData.issueType, formData.urgency]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('https://formspree.io/f/mkgjqnzp', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        alert('Your quote request has been submitted successfully!');
        // Reset form
        setFormData({
            issueType: '',
            urgency: 'medium',
            location: '',
            contactName: '',
            phone: '',
            email: '',
            description: ''
        });
    } else {
        alert('There was an error submitting your request. Please try again later.');
    }
};

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 p-4 rounded-md">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l6-6m-6 6l6 6" />
            </svg>
            Back
          </button>
          <button
            onClick={() => navigate('/electrician')}
            className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-600 transition-all duration-300"
          >
           Book Electrician
          </button>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Plumber Service Booking
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Get an instant quote and book your plumbing service
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div 
            className="bg-white shadow rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Get a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                  Issue Type
                </label>
                <select
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleInputChange}
                  className="p-3  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select an issue type</option>
                  {issueTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">
                  Urgency Level
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="p-3  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="low">Low (Within 24 hours)</option>
                  <option value="medium">Medium (Within 12 hours)</option>
                  <option value="high">High (Within 4 hours)</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Additional Details
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Describe your issue in detail"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-full font-medium shadow-lg hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Quote Request
              </motion.button>
            </form>
          </motion.div>

         {/* Contact Options Section */}
         <ContactOptionSection />
        </div>
      </div>
    </div>
  );
};

export default PlumberBooking;