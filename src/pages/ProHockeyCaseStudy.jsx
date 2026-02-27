import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Clock, Pocket as Tool, Target, Image, Award, TrendingUp, Tag, MessageSquare, Calendar, CheckCircle2, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PHAHeroImg from '../assets/pha_hero_image.png';
import PHAGTLogo from '../assets/pha_gt_logo.png';
import PHASpringfieldLogo from '../assets/pha_springfield_logo.png';
import PHAEHPCLogo from '../assets/pha_ehpc_logo.png';
import PHASWOT from '../assets/pha_swot.png';
import PHAPersona from '../assets/pha_persona.png';
import PHAPromoVideo from '../assets/pha_promo_video.mp4';
import PHACardImg from '../assets/pha_card_image.png';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9], delay },
});

const ProHockeyCaseStudy = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="pt-32 pb-24 bg-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[60%] h-full bg-[#0a192f] -z-10 translate-x-20 rotate-3 origin-top-right select-none pointer-events-none hidden lg:flex items-center justify-center">
                    <span className="text-[25vw] font-black text-white/[0.02] tracking-tighter">STRATEGY</span>
                </div>

                <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
                    <button
                        onClick={() => navigate('/', { state: { tab: 'ux' } })}
                        className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 text-sm font-medium group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </button>

                    <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                        {/* Left — replace div with your hero image */}
                        <motion.div {...fadeUp(0.2)} className="w-full lg:w-[45%] lg:self-stretch">
                            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden bg-gray-100 relative group flex items-center justify-center">
                                <img src={PHAHeroImg} alt="ProHockey Advantage" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* Right — text */}
                        <div className="w-full lg:w-[55%]">
                            <motion.div {...fadeUp(0)}>
                                <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Digital Strategy & UX Design · Group Project</span>
                                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">ProHockey<br />Advantage</h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-tight mb-12">
                                    <span className="font-bold">ProHockey Advantage (PHA)</span> is a new hockey training business founded by Cole Pruden in the Eastman Region of Manitoba. With no existing digital presence, our team developed a comprehensive digital strategy — from competitive analysis to content architecture and a validated website prototype.
                                </p>

                                <div className="flex flex-col md:flex-row gap-x-8 lg:gap-x-12 gap-y-8 pt-8 border-t border-gray-100 items-start md:items-center">
                                    {[
                                        { icon: <Users size={18} />, label: 'ROLE', value: 'UX Researcher & Content Strategist' },
                                        { icon: <Clock size={18} />, label: 'DURATION', value: 'Jan – Apr 2025' },
                                        { icon: <Tool size={18} />, label: 'TOOLS', value: 'Figma, Canva, Miro, Adobe Illustrator, Adobe Premier Pro' },
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

            <section className="pt-10 pb-5 bg-blue-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 md:px-12 text-center">
                    <motion.div {...fadeUp(0)}>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Target — Rep Hockey Parents & Associations &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Downhill Skating System — Cole's proprietary method</span>


                    </motion.div>
                </div>
            </section>

            {/* ── PROBLEM STATEMENT ── */}
            <section className="py-10 bg-[#0a192f] text-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div {...fadeUp(0)}>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 block">The Challenge</span>
                        <h2 className="text-4xl font-bold mb-12">Problem Statement</h2>
                        <div className="max-w-4xl">
                            <p className="text-lg md:text-xl leading-tight text-blue-50 text-center">
                                "How might we develop a digital presence that would create interest in Cole and Prohockey for both representative hockey associations (including coaches) and parents of rep hockey players, informing them of the exceptional and unique hockey training offered by Cole and allowing them to register online to work with him?"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── RESEARCH ── */}
            <section className="pt-16 pb-12 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div {...fadeUp(0)} className="mb-12">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Research & Planning</span>
                        <h2 className="text-4xl font-bold mb-6">Understanding the Landscape</h2>

                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            <div className="w-full lg:w-2/3">
                                {/* <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    We started by mapping the competitive field and getting into the heads of our two target groups.
                                </p> */}
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    A <span className="font-bold">Competitive Analysis</span> benchmarked three local hockey training businesses across accessibility, pricing, training methods, and digital presence.


                                </p>
                                <div className="mt-8 mb-8">
                                    <p className="text-lg text-gray-600 leading-relaxed mb-4 italic">
                                        The competitive landscape for ProHockey Advantage is summarized in the matrix below:
                                    </p>
                                    <img src={PHASWOT} alt="SWOT Analysis" className="w-full h-auto rounded-none shadow-sm shadow-blue-900/10" />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 flex flex-col gap-10 p-4">
                                {[
                                    { src: PHAGTLogo, alt: 'GT Logo', name: 'GT\nPERFORMANCE\nHOCKEY', pos: 'right' },
                                    { src: PHASpringfieldLogo, alt: 'Springfield Logo', name: '', pos: 'below' },
                                    { src: PHAEHPCLogo, alt: 'EHPC Logo', name: 'EHPC (ASTMAN HIGH-PERFORMANCE CENTRE INC. ( FITNESS CENTER)', pos: 'right' }
                                ].map((logo, idx) => (
                                    <div key={idx} className={`flex ${logo.pos === 'below' ? 'flex-col items-center' : 'flex-row items-center'} gap-4 transition-all duration-300`}>
                                        <div className="flex items-center justify-center h-20 lg:h-24 w-auto shrink-0">
                                            <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain rounded-none" />
                                        </div>
                                        {logo.name && (
                                            <span className={`text-sm font-bold text-gray-700 leading-tight whitespace-pre-line ${logo.pos === 'below' ? 'text-center' : 'text-left'}`}>
                                                {logo.name}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Persona */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div {...fadeUp(0)} className="space-y-5 text-gray-600">
                            <br />
                            <br />
                            <p className="text-lg leading-relaxed">
                                Developing <span className="font-bold">Personas</span> for the two target groups and mapping their <span className="font-bold">User Journeys</span> helped us understand their needs, pain points and flow through the process.
                            </p>
                        </motion.div>

                        <motion.div {...fadeUp(0.15)}>
                            <img src={PHAPersona} alt="Persona" className="w-full h-auto rounded-none shadow-sm shadow-blue-900/10" />
                        </motion.div>
                    </div>

                </div>
            </section>


            {/* ── WHAT WE DELIVERED ── */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-10 block">Execution</span>
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            What We Delivered
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
                            Concrete deliverables handed off to the client — ready to build from.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Left: Deliverables */}
                        <motion.div {...fadeUp(0.15)} className="lg:col-span-2">
                            <ul className="space-y-3">
                                {[
                                    { text: "Clear digital identity with a brand strategy and content hierarchy.", icon: <Target className="text-teal-600" size={22} /> },
                                    { text: "Validated user flows tested through client feedback and usability reviews", icon: <CheckCircle2 className="text-blue-600" size={22} /> },
                                    { text: "Competitive Edge – Downhill Skating System positioning", icon: <TrendingUp className="text-indigo-600" size={22} /> },
                                    { text: "Marketing assets , including a promo video and website.", icon: <Video className="text-purple-600" size={22} /> }
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        {...fadeUp(0.2 + i * 0.1)}
                                        className="flex items-start gap-5 text-gray-700 text-lg group"
                                    >
                                        <div className="mt-1 shrink-0 bg-blue-50 p-2 rounded-lg transition-transform group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                        <span className="leading-relaxed py-1">{item.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right: Recommendations to Cole */}
                        <motion.div {...fadeUp(0.3)} className="lg:col-span-3 bg-[#0a192f] p-8 text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-blue-400">Recommendations to Cole</h3>
                            <ul className="space-y-4">
                                {[
                                    "Captivating Visuals and Videos for Social Media & website",
                                    "Promoting Expertise in Hockey and Teaching",
                                    "Market Leadership Through Exceptional and Reliable Service",
                                    "Clearer Pricing Display on the Website",
                                    "Online Parent Testimonials",
                                    "Advertise Off-Season Training"
                                ].map((rec, i) => (
                                    <li key={i} className="flex gap-3 items-start text-base text-blue-100/70">
                                        <span className="text-blue-400 mt-1.5">•</span>
                                        <span>{rec}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Promo Video & Website Refined */}
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                        {/* Video Column */}
                        <motion.div {...fadeUp(0.5)} className="relative group">
                            <div className="overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-video rounded-xl">
                                <video
                                    src={PHAPromoVideo}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                                <Video size={14} className="text-blue-400" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Promotion Video</span>
                            </div>
                        </motion.div>

                        {/* Image/Figma Column */}
                        <motion.div {...fadeUp(0.6)} className="relative group">
                            <a
                                href="https://www.figma.com/proto/MCR2Laoad7rFkRc8gT7SNq/PHA_Coach?page-id=0%3A1&node-id=1-27&p=f&viewport=-377%2C-54%2C0.51&t=1sxjKuF6qx2QXHLA-1&scaling=min-zoom&content-scaling=fixed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative"
                            >
                                <div className="overflow-hidden shadow-2xl border border-gray-200 bg-white rounded-xl aspect-video relative group">
                                    <img
                                        src={PHACardImg}
                                        alt="PHA Website Prototype"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <Target size={18} />
                                            View Prototype
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 bg-teal-500/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 z-10">
                                    <Image size={14} className="text-white" />
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Prototype</span>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section >


            {/* SECTION: FINAL OUTCOME */}
            < section className="py-24 bg-primary text-white" >
                <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Outcomes</h2>
                        <ul className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed text-left ">
                            {[
                                "Listening matters more than designing. Understanding the client's vision deeply meant fewer revisions and stronger outcomes.",
                                "Strengthened my understanding that effective teamwork drives better ideas, smoother execution, and stronger overall outcomes.",
                                "Developed a digital identity as a team to balance coaching authority with trust.",
                                "Created Persona and User Journey that simplify the path from discovery to training enrollment."
                            ].map((outcome, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="text-white/40">•</span>
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section >

        </div >
    );
};

export default ProHockeyCaseStudy;
