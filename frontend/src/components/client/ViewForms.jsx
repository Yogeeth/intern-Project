// FormComponent.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from "axios"; 

const ViewForms = () => {
    const { id } = useParams();
    const [forms, setForms] = useState([]);
    const [domain, setDomain] = useState("");
    console.log(forms)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/formapi/form/${id}`);
                const response1 = await axios.get(`http://localhost:3000/clientapi/client/${id}`);
                console.log(response1.data.data.domain.split('.')[0])
                setForms(response.data.forms);
                setDomain(response1.data.data.domain.split('.')[0])
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="bg-gray-900 min-h-screen py-12 px-8">
            <h1 className="text-white text-4xl font-extrabold text-center mb-8 uppercase">{domain}</h1>
            {forms.length ? (
                forms.map((form, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-6 md:p-8 rounded-lg mb-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <h2 className="text-white text-2xl font-semibold mb-3">Form {index + 1}</h2>
                        <div className="text-gray-300 space-y-3">
                            <p><span className="text-gray-400 font-medium">Name:</span> {form.name}</p>
                            <p><span className="text-gray-400 font-medium">Email:</span> {form.email}</p>
                            <p><span className="text-gray-400 font-medium">Subject:</span> {form.subject}</p>
                            <p><span className="text-gray-400 font-medium">Message:</span> {form.message}</p>
                            <p><span className="text-gray-400 font-medium">Date</span> {form.submissionDate}</p>
                        </div>
                    </motion.div>
                ))
            ) : (
                <motion.div
                    className="text-gray-400 text-lg text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    No Forms Available
                </motion.div>
            )}
        </div>
    );
};

export default ViewForms;
