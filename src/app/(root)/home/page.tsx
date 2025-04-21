'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center">
            {/* Hero Section with Next.js Image Component as background */}
            <section className="w-full h-screen relative flex items-center justify-center text-white px-4">
                <div className="absolute inset-0 z-0">
                    <div className='relative w-full h-dvh'>
                        <Image
                            src={"/assets/images/homebg.jpg"}  // Make sure the image is in the public folder
                            alt="Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </div>
                <motion.div
                    className="z-10 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Welcome to Textile</h1>
                    <p className="mt-4 text-lg md:text-xl drop-shadow-md">
                        Elevating textile experiences with technology & elegance.
                    </p>
                </motion.div>
            </section>

            {/* Section 1 */}
            <section className="px-6 py-12 bg-white text-gray-800 w-full">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold">Premium Quality</h2>
                    <p className="mt-4 text-base md:text-lg">
                        We source the best materials to ensure top-notch fabrics.
                    </p>
                </motion.div>
            </section>

            {/* Section 2 */}
            <section className="px-6 py-12 bg-gray-100 text-gray-900 w-full">
                <motion.div
                    className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='relative w-full h-64 md:h-96'>
                        <Image
                            src={"/assets/images/about2.jpg"} // Ensure this image is in the public folder
                            alt="Fabric"
                            fill
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Sustainable Innovation</h2>
                        <p className="mt-4 text-base md:text-lg">
                            We blend eco-friendly practices with innovative design.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Section 3 */}
            <section className="px-6 py-12 bg-white text-gray-800 w-full">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold">Global Reach</h2>
                    <p className="mt-4 text-base md:text-lg">
                        Delivering textiles to over 30 countries worldwide.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
