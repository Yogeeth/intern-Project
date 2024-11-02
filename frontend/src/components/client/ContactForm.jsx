import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from "axios";
import ShootingStars from '../adminpanel/shootingStars';

export default function ContactForm({handleForm}) {
  const [imageUrl, setImageUrl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/clientapi/client/${id}`);
        handleForm(response.data.data.domain.split('.')[0])
        console.log(response.data.data.domain.split('.'))
        setImageUrl(response.data.data.logo);
        console.log("images=",(typeof(imageUrl)))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    code:id,
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/formapi/form', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data); // Log the response data if needed
    } catch (error) {
      console.error('Error submitting form data:', error);
    } 
    setSubmitted(true);
    console.log(formData)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-background min-h-screen flex justify-center items-center p-4">
      {imageUrl?(
        <motion.div
        className="bg-container w-full max-w-lg p-8 rounded-2xl shadow-lg space-y-6 relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex justify-center mb-6">
          <motion.img
            src={imageUrl}
            alt="Logo"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.3 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-3xl font-semibold text-center text-textPrimary">Contact Us</h1>

            {/* Name Input */}
            <div>
              <label className="block text-textPrimary font-medium">Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-inputBg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
                whileFocus={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-textPrimary font-medium">Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-inputBg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
                whileFocus={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}
              />
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-textPrimary font-medium">Subject</label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-inputBg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
                whileFocus={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-textPrimary font-medium">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="4"
                className="w-full px-4 py-3 bg-inputBg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
                whileFocus={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              whileTap={{ scale: 0.95 }}
              whileHover={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}
            >
              Send Message
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600">Thank you!</h2>
            <p className="text-gray-500 mt-2">We have received your message.</p>
            <motion.button
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              onClick={resetForm}
              whileTap={{ scale: 0.95 }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        )}
      </motion.div>
      ):(
        <motion.p
      className="text-center text-xl font-semibold text-gray-400 py-8 sm:text-2xl md:text-3xl lg:text-4xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      No form Found
    </motion.p>
        
      )
      }:
    </div>
  );
}
