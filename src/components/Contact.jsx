import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="w-full px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100 overflow-hidden relative"
                >
                    <div className="grid md:grid-cols-2 gap-16 relative z-10">

                        {/* Left Side: Form */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                            <p className="text-gray-600 mb-10 text-xl md:text-2xl leading-relaxed">Interested in working together? Let's connect!</p>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-gray-50 text-xl"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-gray-50 text-xl"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-gray-50 resize-none text-xl"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-primary text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/30 flex justify-center items-center gap-2"
                                >
                                    Email me <Send size={20} />
                                </button>
                            </form>
                        </div>

                        {/* Right Side: Contact Info */}
                        <div className="bg-primary rounded-2xl p-10 text-white flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 space-y-10 mt-10">
                                <a href="mailto:sherin.pattukalathil@gmail.com" className="flex items-center gap-6 hover:bg-white/10 p-4 rounded-2xl transition-all">
                                    <div className="p-4 bg-white/20 rounded-xl">
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-base mb-1">Email me</p>
                                        <p className="text-xl font-medium">sherin.pattukalathil@gmail.com</p>
                                    </div>
                                </a>

                                <a href="http://www.linkedin.com/in/sherin-pattukalathil-1a35b2b2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 hover:bg-white/10 p-4 rounded-2xl transition-all">
                                    <div className="p-4 bg-white/20 rounded-xl">
                                        <Linkedin size={32} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-base mb-1">Connect on LinkedIn</p>
                                        {/* <p className="text-xl font-medium">linkedin.com/in/sherin</p> */}
                                    </div>
                                </a>

                                <a href="https://github.com/sherinpattuskal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 hover:bg-white/10 p-4 rounded-2xl transition-all">
                                    <div className="p-4 bg-white/20 rounded-xl">
                                        <Github size={32} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-base mb-1">Check my code</p>
                                        {/* <p className="text-xl font-medium">github.com/sherinpattuskal</p> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
