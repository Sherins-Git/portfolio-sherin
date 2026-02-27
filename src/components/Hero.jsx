import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Photo from '../assets/photo.png';

/* ============================================================
   BACKUP — original Hero (commented out for reference)
   ============================================================

import { ArrowRight, Mail } from 'lucide-react';

const HeroBackup = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight">Sherin</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Full-Stack Developer & UX Designer.</h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">I design and build thoughtful digital experiences that balance usability and performance. My passion lies in bridging the gap between design and engineering.</p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link to="work" smooth={true} offset={-70} className="px-8 py-4 bg-primary text-white text-base font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 cursor-pointer">
                            View My Work <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="contact" smooth={true} offset={-70} className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 text-base font-bold rounded-xl hover:border-gray-300 hover:bg-gray-50 hover:shadow-md transition-all flex items-center gap-2 cursor-pointer">
                            Get In Touch <Mail className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center lg:justify-end">
                    <div className="relative z-10 w-[340px] h-[350px] md:w-[420px] md:h-[430px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                        <img src={Photo} alt="Sherin" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute top-8 right-8 w-full h-full border-4 border-primary/10 rounded-[2rem] -z-10 transform -rotate-6 scale-105"></div>
                    <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <Link to="about" smooth={true} offset={-70} className="cursor-pointer flex flex-col items-center gap-1 group">
                    <span className="text-xs font-medium text-gray-400 group-hover:text-gray-700 tracking-widest uppercase transition-colors duration-300">Scroll</span>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-700 transition-colors duration-300" />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
};

   ============================================================
   END BACKUP
   ============================================================ */




// ── Dev skill rows — 2-3 words per row, no collision ──
const devRows = [
    [
        { label: '.NET', size: 'text-4xl', opacity: 'opacity-90', weight: 'font-black' },
        { label: 'React', size: 'text-3xl', opacity: 'opacity-70', weight: 'font-black' },
    ],
    [
        { label: 'C#', size: 'text-3xl', opacity: 'opacity-75', weight: 'font-bold' },
        { label: 'Java', size: 'text-xl', opacity: 'opacity-45', weight: 'font-semibold' },
    ],
    [
        { label: 'TypeScript', size: 'text-2xl', opacity: 'opacity-55', weight: 'font-semibold' },
        { label: 'SQL', size: 'text-lg', opacity: 'opacity-40', weight: 'font-medium' },
    ],
    [
        { label: 'Oracle', size: 'text-base', opacity: 'opacity-30', weight: 'font-medium' },
        { label: 'REST API', size: 'text-lg', opacity: 'opacity-35', weight: 'font-medium' },
    ],
];

// ── UX skill rows — 2-3 words per row ──
const uxRows = [
    [
        { label: 'Figma', size: 'text-4xl', opacity: 'opacity-90', weight: 'font-black' },
        { label: 'Prototyping', size: 'text-2xl', opacity: 'opacity-65', weight: 'font-bold' },
    ],
    [
        { label: 'User Research', size: 'text-2xl', opacity: 'opacity-70', weight: 'font-bold' },
        { label: 'Usability', size: 'text-base', opacity: 'opacity-35', weight: 'font-medium' },
    ],
    [
        { label: 'Wireframing', size: 'text-xl', opacity: 'opacity-55', weight: 'font-semibold' },
        { label: 'Design Systems', size: 'text-lg', opacity: 'opacity-40', weight: 'font-medium' },
    ],
    [
        { label: 'Accessibility', size: 'text-base', opacity: 'opacity-30', weight: 'font-medium' },
        { label: 'Journey Mapping', size: 'text-sm', opacity: 'opacity-25', weight: 'font-medium' },
    ],
];

const Hero = () => {
    const [hovered, setHovered] = useState(null);

    const dimLeft = hovered === 'right';
    const dimRight = hovered === 'left';

    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section
                id="home"
                className="relative w-full min-h-screen flex flex-row overflow-hidden"
            >
                {/* ── LEFT PANEL — Developer ────────────────────────── */}
                <motion.div
                    className="relative flex-1 flex overflow-hidden"
                    style={{
                        background: '#0F172A',
                        clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)',
                        transition: 'opacity 0.5s ease, filter 0.5s ease',
                        opacity: dimLeft ? 0.6 : 1,
                        filter: dimLeft ? 'brightness(0.7)' : 'brightness(1)',
                        zIndex: 10,
                    }}
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHovered('left')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Content pushed to the RIGHT edge of panel (close to image) */}
                    <div className="relative z-10 w-full flex flex-col justify-between py-24 pl-12 pr-[24%]">

                        {/* Top — Role heading aligned right */}
                        <motion.div
                            className="mt-8 text-right"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            <p className="text-white/30 text-s font-mono tracking-widest uppercase mb-2">{'< code />'}</p>
                            <h1 className="text-7xl xl:text-8xl font-black text-white leading-none tracking-tight">
                                Developer
                            </h1>
                        </motion.div>

                        {/* Bottom — Word cloud aligned right near image */}
                        <div className="flex flex-col gap-2 mb-8 items-end text-right">
                            {devRows.map((row, rowIdx) => (
                                <motion.div
                                    key={rowIdx}
                                    className="flex flex-row items-baseline gap-4 flex-wrap justify-end"
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + rowIdx * 0.1, duration: 0.5 }}
                                >
                                    {row.map(skill => (
                                        <span
                                            key={skill.label}
                                            className={`text-white select-none leading-tight ${skill.size} ${skill.opacity} ${skill.weight}`}
                                        >
                                            {skill.label}
                                        </span>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT PANEL — UX Designer ─────────────────────── */}
                <motion.div
                    className="relative flex-1 flex overflow-hidden"
                    style={{
                        background: '#F0F4FF',
                        clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)',
                        marginLeft: '-6%',
                        transition: 'opacity 0.5s ease, filter 0.5s ease',
                        opacity: dimRight ? 0.6 : 1,
                        filter: dimRight ? 'brightness(0.9)' : 'brightness(1)',
                        zIndex: 10,
                    }}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHovered('right')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Content pushed to the LEFT edge of panel (close to image) */}
                    <div className="relative z-10 w-full flex flex-col justify-between py-24 pl-[20%] pr-10">

                        {/* Top — Role heading */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            <p className="text-primary/40 text-s font-mono tracking-widest uppercase mb-2">✦ design</p>
                            <h1 className="text-7xl xl:text-8xl font-black leading-none tracking-tight text-primary">
                                UX Designer
                            </h1>
                        </motion.div>

                        {/* Bottom — Word cloud near image bottom */}
                        <div className="flex flex-col gap-2 mb-8">
                            {uxRows.map((row, rowIdx) => (
                                <motion.div
                                    key={rowIdx}
                                    className="flex flex-row items-baseline gap-4 flex-wrap"
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + rowIdx * 0.1, duration: 0.5 }}
                                >
                                    {row.map(skill => (
                                        <span
                                            key={skill.label}
                                            className={`text-primary select-none leading-tight ${skill.size} ${skill.opacity} ${skill.weight}`}
                                        >
                                            {skill.label}
                                        </span>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── CENTRE PHOTO ──────────────────────────────────── */}
                <motion.div
                    className="absolute inset-0 z-30 pointer-events-none flex justify-center items-end"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img
                        src={Photo}
                        alt="Sherin"
                        className="h-[75vh] w-auto object-contain object-bottom"
                        style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))' }}
                    />
                </motion.div>

                {/* ── SCROLL INDICATOR ──────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1"
                >
                    <Link
                        to="about"
                        smooth={true}
                        offset={-70}
                        className="cursor-pointer flex flex-col items-center gap-1 group"
                    >
                        <span className="text-xs font-medium text-white/50 tracking-widest uppercase group-hover:text-white/80 transition-colors duration-300">
                            Scroll
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                        </motion.div>
                    </Link>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;