import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/formify.png'; 
import axios from "axios";
import ShootingStars from './adminpanel/shootingStars';
export default function HomePage() {
    const [email, setEmail] = useState(false);
    const [email1, setEmail1] = useState(false);
    const [soon, setSoon] = useState(false);
    const [response, setResponse] = useState("");


    const handleEmail = () => {
        setEmail((prev) => !prev);
    };
    
    const handleSoon = () => {
        setSoon((prev) => !prev);
        setEmail(false); 
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post("http://localhost:3000/formifyapi/formify", {
            email: email1,
          });
          setResponse(res.data.response);
        } catch (error) {
          console.error("Error posting data:", error);
        }
        handleSoon()
        console.log(response)
      };
    return (
        
            

            
            <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-4">
            
            {/* Header Section */}
            <header className="w-full max-w-7xl text-center py-10">
                <motion.img
                    src={Logo}
                    alt="Formify Logo"
                    className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-wide mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Formify
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl font-medium text-gray-400 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    "Why Build One When You Can Steal One? We Won't Tell."
                </motion.p>
            </header>

            {/* Call to Action Section */}
            <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <p className="text-lg md:text-xl font-semibold text-gray-300 mb-6">
                    Quick, Customizable, and Ready to Go!
                </p>
                <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-bold mb-6 shadow transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmail}
                >
                    Steal a Form Now!
                </motion.button>
                {(email && !soon ) &&  (
                    <div className='flex gap-2 mb-4'>
                        <input 
                            className='bg-gray-800 border-2 border-blue-900 p-2 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200'
                            placeholder='Enter Your Email'
                            type='email' 
                            onChange={(e)=>setEmail1(e.target.value)}
                        />
                        <button 
                            className='p-2 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-200' 
                            onClick={handleSubmit}
                        >
                            FORMIFY
                        </button>
                    </div>
                )}
                {soon && (
                    <div className="text-lg font-semibold text-gray-300">
                        😊 We will contact you SOON
                    </div>
                )}
            </motion.div>

            {/* Humor Section */}
            <motion.div
                className="w-full max-w-4xl mt-16 text-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <p className="text-xl md:text-2xl font-semibold text-gray-300">
                    Don't waste hours coding your own contact form.
                </p>
                <motion.p
                    className="text-lg md:text-xl text-gray-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    Just <span className="text-blue-600">*copy*</span> and pretend you did all the work!
                </motion.p>
                <p className="text-lg md:text-xl font-semibold text-gray-300">
                    We even made it look <span className="text-blue-600">expensive</span>.
                </p>
            </motion.div>

            {/* Features Section */}
            <motion.div
                className="w-full max-w-4xl mt-12 space-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Why Choose Formify?
                </h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-bold mb-3">Instant Setup</h3>
                        <p className="text-gray-400">
                            Get a fully functional contact form in seconds.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-bold mb-3">Highly Customizable</h3>
                        <p className="text-gray-400">
                            Make it your own without writing a line of code.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-bold mb-3">Totally Free*</h3>
                        <p className="text-gray-400">
                            *But we do accept coffee donations.
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Footer Section */}
            <footer className="mt-16 text-gray-500 text-center">
                <p>© 2024 Formify. All rights reserved. We won't tell.</p>
            </footer>
        </div>
       
    );
}
