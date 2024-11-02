import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';













const CreateClientForm = ({ addClient }) => {
  const [logo,setLogo] = useState("");
  
  const [client, setClient] = useState({
    domain: '',
    logo: '',
    heading: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("add")
    addClient(client,e);
    // Reset form after submission
    setClient({
      domain: '',
      logo: '',
      heading: '',
      email: '',
      username: '',
      password: ''
    });

    
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={(e)=>handleSubmit(e)}
      className=" bg-gray-800 shadow-md p-8 rounded-lg space-y-6 text-white"
    >
      {/* Domain Name */}
      <div>
        <label htmlFor="domain" className="block text-sm font-medium text-white">Domain Name</label>
        <input
          type="text"
          id="domain"
          name="domain"
          value={client.domain}
          onChange={handleChange}
          placeholder="Enter domain name"
          className="bg-gray-800 text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Logo */}
      <div>
        <label htmlFor="logo" className="block text-sm font-medium text-white">Logo URL</label>
        <input
          type="text"
          id="logo"
          name="logo"
          value={client.logo}
          onChange={handleChange}
          placeholder="Enter logo URL"
          className="bg-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      

      {/* Heading */}
      <div>
        <label htmlFor="heading" className="block text-sm font-medium text-white">Heading</label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={client.heading}
          onChange={handleChange}
          placeholder="Enter form heading"
          className="bg-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email for Responses</label>
        <input
          type="email"
          id="email"
          name="email"
          value={client.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className="bg-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Username */}
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={client.username}
          onChange={handleChange}
          placeholder="Enter client username"
          className="bg-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={client.password}
          onChange={handleChange}
          placeholder="Enter client password"
          className="bg-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Submit Button with animation */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Client
        </button>
      </motion.div>
    </motion.form>
  );
};

export default CreateClientForm;
