'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LucideSparkles } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full h-[80vh] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={"/assets/images/bg1.jpg"}
                    fill
                    alt="About Hero"
                    className="z-0 object-cover"
                />
                <div className="z-10 text-center p-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Who We Are
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        A legacy woven into every thread.
                    </motion.p>
                </div>
            </section>

            {/* Section 1 */}
            <section className="px-6 py-12 bg-white text-gray-800">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <LucideSparkles className="mx-auto mb-4 h-10 w-10 text-blue-500" />
                    <h2 className="text-2xl md:text-4xl font-semibold">Our Mission</h2>
                    <p className="mt-4 text-base md:text-lg">
                        To deliver premium-quality textiles with a touch of heritage and innovation.
                    </p>
                </motion.div>
            </section>

            {/* Section 2 */}
            <section className="px-6 py-12 bg-gray-100 text-gray-900">
                <motion.div
                    className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div>
                        <h3 className="text-xl md:text-3xl font-bold">Our Journey</h3>
                        <p className="mt-4 text-base">
                            Started in 1980, we&apos;ve grown from a small loom house to a global textile brand.
                        </p>
                    </div>
                    <div className='relative w-full h-[300px] md:h-[400px]'>
                        <Image
                            src={"/assets/images/journey.jpg"}
                            fill
                            alt="Journey"
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Section 3 */}
            <section className="px-6 py-12 bg-white text-gray-800">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-4xl font-semibold">Why Choose Us?</h2>
                    <p className="mt-4 text-base md:text-lg">
                        Combining quality, sustainability, and affordability in every piece.
                    </p>
                </motion.div>
            </section>

            {/* Section 4 */}
            <section className="px-6 py-12 bg-gray-100 text-gray-900">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-4xl font-semibold">Meet Our Founder</h2>
                    <div className='relative w-[300px] h-[300px] mx-auto mt-4'>
                        <Image
                            src={"/assets/images/founder.jpg"}
                            fill
                            alt="Founder"
                            className="rounded-full mx-auto mt-6 object-cover shadow-lg"
                        />
                    </div>
                    <p className="mt-[50px] font-medium text-xl">
                        Mr. Ragul , with a dream and a loom, started this revolution in fabrics.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;
