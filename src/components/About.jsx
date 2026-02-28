

import React from 'react';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <section id="about" className="py-10 bg-white">
            {/* Centered Heading */}
            <div className="text-center mb-10 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
                >
                    Get to know me
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                    About Me
                </motion.h2>

            </div>

            <div className="max-w-3xl mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-center"
                >
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        I'm a <span className="font-semibold text-primary">Full-Stack Developer</span> with a strong interest in{' '}
                        <span className="font-semibold text-primary">UX Research & Design</span>. I enjoy creating applications that are not only functional, but also intuitive and meaningful to use.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        With a background in interactive media, I approach development through both technical precision and human-centered thinking.
                        I believe the best products are built at the intersection of robust engineering and empathetic design.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        After completing a UX program and working as a <span className="font-medium text-gray-800">UX Design Intern</span>,
                        I learned to conduct user research, design wireframes, and build prototypes — seamlessly connecting product design with development execution.
                    </p>

                </motion.div>

            </div>
        </section>
    );
};

export default About;
