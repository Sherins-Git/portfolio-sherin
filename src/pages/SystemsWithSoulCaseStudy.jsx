import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Clock, Pocket as Tool, Sparkles, Layout, Palette, Code, Eye, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SoulCapsuleImg from '../assets/soul_capsule_card_image.png';
import LowFi1Img from '../assets/soul_capsule_lowfi_1.png';
import LowFi2Img from '../assets/soul_capsule_lowfi_2.png';
import MoodboardImg from '../assets/soul_capsule_moodboard.png';
import WebsiteRefImg from '../assets/soul_capsule_website_ideas.png';
import ContentAuditImg from '../assets/soul_capsule_content_audit.png';
import LinkedInBannerImg from '../assets/soul_capsule_linkedIn_banner.png';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9], delay },
});

const SystemsWithSoulCaseStudy = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">

            {/* HERO SECTION - SIDE BY SIDE */}
            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-5 md:px-12">
                    <button
                        onClick={() => navigate('/', { state: { tab: 'ux' } })}
                        className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 text-sm font-medium group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </button>

                    <div className="flex flex-col lg:flex-row gap-15 lg:gap-10 items-stretch">
                        {/* Image Left */}
                        <motion.div {...fadeUp(0.2)} className="w-full lg:w-[35%] lg:self-stretch">
                            <div className="h-full min-h-[400px] bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative group">
                                <img
                                    src={SoulCapsuleImg}
                                    alt="Systems with Soul"
                                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        {/* Text Right */}
                        <div className="w-full lg:w-[65%]">
                            <motion.div {...fadeUp(0)}>
                                <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Interactive Strategy</span>
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Systems with Soul</h1>
                                <br />
                                <p className="text-lg md:text-xl text-gray-600 leading-tight mb-8 font-medium">
                                    <span className="text-gray-900 italic">Task 1:</span> Designing a brand identity and digital home for <span className="text-gray-900 italic">Soul Capsule</span> — a community built on the principles of systemic design.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-tight mb-8 font-medium">
                                    <span className="text-gray-900 italic">Task 2:</span> Create a more consistent visual identity for client's online presence across social media platforms and finalize the personal website.
                                </p>

                                {/* Meta strip */}
                                <div className="flex flex-col md:flex-row gap-x-8 lg:gap-x-12 gap-y-8 pt-8 border-t border-gray-100 items-start md:items-center">
                                    {[
                                        { icon: <Users size={18} />, label: 'ROLE', value: 'UX Design Intern' },
                                        { icon: <Clock size={18} />, label: 'DURATION', value: '4 Months' },
                                        { icon: <Tool size={18} />, label: 'TOOLS', value: 'Figma, Miro, Squarespace, Canva, Google Docs' },
                                    ].map(({ icon, label, value }) => (
                                        <div key={label} className="flex gap-4 items-start shrink-0">
                                            <div className="text-primary mt-1">{icon}</div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                                                <p className="text-sm font-semibold text-gray-800">{value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: THE DISCOVERY PHASE */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeUp(0)}>
                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Discovery</span>
                            <h2 className="text-4xl font-bold mb-6">Knowing the Concept</h2>
                            <p className="text-xl text-gray-600 leading-relaxed space-y-4">
                                The project began with a deep dive into the core philosophy — <span className="text-gray-900 font-semibold">Systemic Design</span>.
                                <br /><br />
                                Understanding how the <span className="text-primary font-medium italic">Soul Capsule</span> community functions, the interconnectedness of human systems and the vision for a regenerative future shaped every design decision that followed.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp(0.2)} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <Sparkles className="text-primary mb-6" size={32} />
                            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Translating the vision of the community network and the design thinking philosophy into a digital space that actually feels like it.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: UNDERSTANDING THE CLIENT */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div {...fadeUp(0)} className="mb-12">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Collaboration</span>
                        <h2 className="text-4xl font-bold mb-6">Listening to the Soul</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Needs & Interests',
                                icon: <Target className="text-blue-500" />,
                                desc: 'Sessions spent aligning on project intent and community values — before any design decisions were made.'
                            },
                            {
                                title: 'Visual Identity',
                                icon: <Palette className="text-purple-500" />,
                                desc: 'A palette that balanced systemic design philosophy with client\'s personal values.'
                            },
                            {
                                title: 'Design Preferences',
                                icon: <Eye className="text-green-500" />,
                                desc: "Minimalism with meaning — clean layouts, considered typography, nothing generic or off-the-shelf."
                            }
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.1)} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="mb-6 p-3 bg-white w-fit rounded-xl shadow-sm">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: IDEATION (MOODBOARDS) */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    {/* Centered Heading */}
                    <motion.div {...fadeUp(0)} className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Ideation</span>
                        <h2 className="text-4xl font-bold mb-6">From Concepts to Moodboards</h2>
                    </motion.div>

                    {/* Row 1: Image Left, Text Right */}
                    <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                        <motion.div {...fadeUp(0.1)} className="w-full md:w-1/2">
                            <div className="bg-white overflow-hidden border border-gray-100 shadow-sm relative group">
                                <img
                                    src={MoodboardImg}
                                    alt="Soul Capsule Moodboard"
                                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp(0.2)} className="w-full md:w-1/2">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                <span className="italic font-medium text-gray-900">Brainstorming sessions</span> helped map the nature of systemic design practice and the Soul Capsule community's vision.
                                <br />
                                <span className="italic font-medium text-gray-900">Iterative Moodboards</span> combining ideas, color, imagery, and organic structures to build a visual and brand identity that balances systemic theory with soulful warmth.
                            </p>
                        </motion.div>
                    </div>

                    {/* Row 2: Text Left, Image Right */}
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <motion.div {...fadeUp(0.3)} className="w-full md:w-1/2 order-2 md:order-1">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Studied similar community and systemic design platforms to guide visual identity and user experience decisions — understanding what works and what to move away from.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp(0.4)} className="w-full md:w-1/2 order-1 md:order-2">
                            <div className="bg-white overflow-hidden border border-gray-100 shadow-sm relative group">
                                <img
                                    src={WebsiteRefImg}
                                    alt="Soul Capsule Early Concepts"
                                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: DESIGN & IMPLEMENTATION */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div {...fadeUp(0)} className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Design & Implementation</span>
                        <h2 className="text-4xl font-bold mb-6">Drafting and Building the Vision</h2>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* 2x2 Image Grid Left */}
                        <motion.div {...fadeUp(0.2)} className="w-full lg:w-1/2 grid grid-cols-2 gap-8">
                            <div className="aspect-[4/3] bg-gray-50 overflow-hidden border border-gray-100 shadow-sm relative group">
                                <img
                                    src={LowFi1Img}
                                    alt="Soul Capsule Low-Fidelity 1"
                                    className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="aspect-[4/3] bg-gray-50 overflow-hidden border border-gray-100 shadow-sm relative group">
                                <img
                                    src={LowFi2Img}
                                    alt="Soul Capsule Low-Fidelity 2"
                                    className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="aspect-[4/3] bg-gray-50 overflow-hidden border border-gray-100 shadow-sm relative group">
                                <img
                                    src={ContentAuditImg}
                                    alt="Soul Capsule Content Audit"
                                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="aspect-[4/3] bg-gray-50 overflow-hidden border border-gray-100 shadow-sm relative group">
                                <img
                                    src={LinkedInBannerImg}
                                    alt="Soul Capsule LinkedIn Banner"
                                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp(0.3)} className="w-full lg:w-1/2 space-y-10 lg:pt-20">
                            <div>
                                <p className="text-primary text-lg font-bold">Soul Capsule Website</p>
                                <br />
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Low-fidelity wireframes built in Figma, focused on a seamless journey for community members. Every screen was shaped around the client's visual sensibility.
                                    Figma designs were translated into Squarespace. Where the platform fell short, custom CSS filled the gap — refined typography, spacing, visual hierarchy, and layout adjustments that felt considered.
                                </p>
                                <br />
                                <p className="text-primary text-lg font-bold">Personal Website</p>
                                <br />
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    For Personal website, existing branding materials have been reviewed and a content audit was created to assess the content quality, visual identity, alignment with the UX design guidelines.
                                </p>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* SECTION: FINAL OUTCOME */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Outcomes</h2>
                        <ul className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed text-left">
                            {[
                                "Listening matters more than designing. Understanding the client's vision deeply meant fewer revisions and stronger outcomes.",
                                "Working alongside another intern taught the value of clear communication.",
                                "Platform limitations (Squarespace) forced creative problem-solving. Custom CSS became the helper."
                            ].map((outcome, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="text-white/40">•</span>
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SystemsWithSoulCaseStudy;
