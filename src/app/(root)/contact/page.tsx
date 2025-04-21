"use client";
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-4 px-6 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-lg w-full"
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
                    Contact Us
                </h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactPage;
