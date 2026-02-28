import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Photo from '../assets/photo.png';

// ── Dev skill rows — 2-3 words per row, no collision ──
const devRows = [
    [
        { label: 'ASP.NET', size: 'text-4xl', opacity: 'opacity-75', weight: 'font-black' },
        { label: 'C#', size: 'text-3xl', opacity: 'opacity-70', weight: 'font-black' },
        { label: 'VB.NET', size: 'text-2xl', opacity: 'opacity-500', weight: 'font-semibold' },
    ],
    [
        { label: 'Springboot', size: 'text-2xl', opacity: 'opacity-50', weight: 'font-bold' },
        { label: 'Java', size: 'text-4xl', opacity: 'opacity-90', weight: 'font-black' },
        { label: 'Hibernate', size: 'text-xl', opacity: 'opacity-45', weight: 'font-semibold' },
    ],
    [
        { label: 'Restful API', size: 'text-2xl', opacity: 'opacity-55', weight: 'font-semibold' },
        { label: 'HTML/CSS', size: 'text-lg', opacity: 'opacity-40', weight: 'font-medium' },
    ],
    [
        { label: 'SQL', size: 'text-2xl', opacity: 'opacity-50', weight: 'font-semibold' },
        { label: 'Oracle PL/SQL', size: 'text-lg', opacity: 'opacity-35', weight: 'font-medium' },
        { label: 'Javascript', size: 'text-2xl', opacity: 'opacity-70', weight: 'font-medium' },
    ],
];

// ── UX skill rows — 2-3 words per row ──
const uxRows = [
    [
        { label: 'Figma', size: 'text-4xl', opacity: 'opacity-90', weight: 'font-black' },
        { label: 'Canva', size: 'text-2xl', opacity: 'opacity-65', weight: 'font-bold' },
    ],
    [
        { label: 'User Research', size: 'text-2xl', opacity: 'opacity-70', weight: 'font-bold' },
        { label: 'Usability', size: 'text-base', opacity: 'opacity-35', weight: 'font-medium' },
    ],
    [
        { label: 'Wireframing', size: 'text-xl', opacity: 'opacity-55', weight: 'font-semibold' },
        { label: 'Prototyping', size: 'text-lg', opacity: 'opacity-40', weight: 'font-medium' },
    ],
    [
        { label: 'Accessibility', size: 'text-base', opacity: 'opacity-30', weight: 'font-medium' },
        { label: 'Journey Mapping', size: 'text-2xl', opacity: 'opacity-50', weight: 'font-semibold' },
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
                        <div className="flex flex-col gap-1 mb-8 md:items-end text-center md:text-right">
                            {devRows.map((row, rowIdx) => (
                                <motion.div
                                    key={rowIdx}
                                    className="flex flex-row items-baseline gap-3 flex-wrap justify-center md:justify-end"
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + rowIdx * 0.1, duration: 0.5 }}
                                >
                                    {row.map(skill => (
                                        <span
                                            key={skill.label}
                                            className={`text-white select-none leading-none font-mono ${skill.size} ${skill.opacity} ${skill.weight}`}
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
                        <div className="flex flex-col gap-1 mb-8 text-center md:text-left">
                            {uxRows.map((row, rowIdx) => (
                                <motion.div
                                    key={rowIdx}
                                    className="flex flex-row items-baseline gap-3 flex-wrap justify-center md:justify-start"
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + rowIdx * 0.1, duration: 0.5 }}
                                >
                                    {row.map(skill => (
                                        <span
                                            key={skill.label}
                                            className={`text-primary select-none leading-none font-mono ${skill.size} ${skill.opacity} ${skill.weight}`}
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
                {/* <motion.div
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
                </motion.div> */}
                <motion.div
                    className="absolute inset-0 z-30 pointer-events-none flex justify-center items-end"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >

                    <img
                        src={Photo}
                        alt="Sherin"
                        className="h-[55vh] md:h-[75vh] w-auto object-contain object-bottom"
                        style={{
                            filter: 'drop-shadow(-12px 0px 40px rgba(0,0,0,0.55)) drop-shadow(0 20px 60px rgba(0,0,0,0.3))',
                            display: 'block',
                        }}
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