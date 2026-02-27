

import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowLeft, Quote, Users, Clock, Pocket as Tool, Target, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SoftEdgeHeroImg from '../assets/softedge_hero_image.png';
import SoftEdgeLogo from '../assets/softedge_logo.png';
import PersonaImg from '../assets/softedge_persona.png';
import UserJourneyImg from '../assets/softedge_user_journey.png';
import AnalyticsImg from '../assets/softedge_analytics_dashboard.png';
import SoftEdgePromoVideo from '../assets/softedge_promovideo.mp4';
import PromoWebsiteImg from '../assets/softedge_promowebsite.png';
import SoftEdgeHighFi from '../assets/softedge_highfi.png';
import SoftEdgeSurvey from '../assets/softedge_survey.png';
import VirtualSpeechLogo from '../assets/virtualspeech_logo.png';
import RehearsalLogo from '../assets/rehearsal_logo.png';
import CommSkillsLogo from '../assets/commskills2025_logo.png';

// ⬇️  Drop your lo-fi and hi-fi images into src/assets/ and update these paths
import SoftEdgeLoFi from '../assets/softedge_lofi.png';        // 5.png → rename & move
import SoftEdgeHiFiProto from '../assets/softedge_highfi.png'; // 4.png → rename & move

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9], delay },
});

/* ─────────────────────────────────────────
   STICKY NOTE DATA
───────────────────────────────────────── */
const STICKIES = [
    { emoji: '🎙️', label: 'Core Feature', text: 'AI-Powered Chat & Voice Scenarios', color: '#ffd166', rotate: '-3deg' },
    { emoji: '🎮', label: 'Engagement', text: 'Gamified Learning with XP & Badges', color: '#ffb3c6', rotate: '2.5deg' },
    { emoji: '🤗', label: 'Feel', text: 'Comfortable, User-friendly & Engaging', color: '#b5ead7', rotate: '-1.5deg' },
    { emoji: '📊', label: 'Feature', text: 'Personalized Dashboard & Progress', color: '#c0d8ff', rotate: '3deg' },
    { emoji: '💬', label: 'Feedback', text: 'Constructive — Strengths & Growth Areas', color: '#d4c5f9', rotate: '-2deg' },
    { emoji: '🎯', label: 'Tone', text: 'Professional & Supportive Voice', color: '#a8eddc', rotate: '1.5deg' },
];


/* ─────────────────────────────────────────
   STICKY NOTE COMPONENT
───────────────────────────────────────── */
function StickyNote({ emoji, label, text, color, rotate, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                rotate: '0deg',
                scale: 1.08,
                y: -8,
                zIndex: 20,
                boxShadow: '6px 12px 32px rgba(0,0,0,0.18)',
                transition: { duration: 0.25 },
            }}
            style={{
                background: color,
                rotate,
                width: 152,
                minHeight: 148,
                padding: '12px 12px 14px',
                borderRadius: 2,
                boxShadow: '3px 4px 12px rgba(0,0,0,0.13), 0 1px 2px rgba(0,0,0,0.07)',
                position: 'relative',
                cursor: 'default',
                flexShrink: 0,
            }}
        >
            {/* Top fold shadow */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 26,
                background: 'rgba(0,0,0,0.06)', borderRadius: '2px 2px 0 0',
            }} />

            <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.08em', color: 'rgba(0,0,0,0.4)',
                display: 'block', marginBottom: 4,
            }}>{label}</span>
            <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13, fontWeight: 400, lineHeight: 1.45, color: '#2a2a2a',
            }}>{text}</p>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   CURVED ARROW SVG
───────────────────────────────────────── */
function CurvedArrow() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, margin: '8px 0 28px' }}>
            <svg width="180" height="64" viewBox="0 0 180 64" fill="none">
                <path
                    d="M20 14 C 60 10, 130 10, 158 48"
                    stroke="#1e4eff" strokeWidth="2.5"
                    strokeDasharray="7 5" strokeLinecap="round"
                />
                <polygon points="150,40 163,52 155,56" fill="#1e4eff" />
            </svg>
            <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 14, color: '#1e4eff', fontWeight: 700, fontStyle: 'italic',
            }}>→ sketched into wireframes</span>
        </div>
    );
}

function ProtoFrame({ src, title, badge, badgeColor, style }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, flex: 1, minWidth: 260, maxWidth: 400, ...style }}
        >
            <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'white', borderRadius: 20, padding: '6px 14px',
                fontSize: 12, fontWeight: 600, color: badgeColor,
                border: `1.5px solid ${badgeColor}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
                {badge}
            </div>
            <motion.img
                src={src}
                alt={title}
                whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,0,0,0.18)' }}
                transition={{ duration: 0.3 }}
                style={{
                    width: '100%', height: 'auto', display: 'block',
                    borderRadius: 16,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.13)',
                }}
            />
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   DESIGN SECTION (the new Execution block)
───────────────────────────────────────── */
function DesignJourneySection() {
    const [resolved, setResolved] = useState(false);
    //const [showConfetti, setShowConfetti] = useState(false);

    const handleResolve = () => {
        if (!resolved) {
            //setShowConfetti(true);
            //setTimeout(() => setShowConfetti(false), 2200);
        }
        setResolved(r => !r);
    };

    return (
        <section className="pt-10 pb-16 bg-white">
            {/* Kalam font import */}
            {/* <style>{`@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');`}</style> */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');`}</style>
            {/* <Confetti active={showConfetti} /> */}

            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* Section header */}
                <motion.div {...fadeUp(0)} className="mb-14">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Execution</span>
                    <h2 className="text-4xl font-bold mb-6">Designing the Solution</h2>
                    <p className="text-lg text-gray-600 max-w-5xl leading-relaxed">
                        From scattered ideas to a structured product — watch the ideation transform into a real interface.
                    </p>
                </motion.div>

                {/* ── CHAOS PHASE (stickies + lofi) ── */}
                <AnimatePresence mode="wait">
                    {!resolved && (
                        <motion.div
                            key="chaos"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.45 }}
                        >
                            {/* Sticky notes */}
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', gap: 18,
                                justifyContent: 'center', paddingBottom: 8,
                            }}>
                                {STICKIES.map((s, i) => (
                                    <StickyNote key={i} {...s} delay={i * 0.07} />
                                ))}
                            </div>

                            {/* Curved arrow */}
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <CurvedArrow />
                            </div>

                            {/* Lo-fi frame */}
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <ProtoFrame
                                    src={SoftEdgeLoFi}
                                    //title="Lo-Fi Wireframes"
                                    //badge="📐  Low-Fidelity Wireframes"
                                    //badgeColor="#666"
                                    style={{ maxWidth: 560 }}
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* ── RESOLVED PHASE (lofi + hifi side by side) ── */}
                    {resolved && (
                        <motion.div
                            key="resolved"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                gap: 24,
                                flexWrap: 'wrap',
                            }}>
                                {/* Hi-fi */}
                                <div className="flex flex-col items-center w-full max-w-[700px]">
                                    <ProtoFrame
                                        src={SoftEdgeHiFiProto}
                                        style={{ maxWidth: '100%' }}
                                    />
                                    <motion.a
                                        href="https://www.figma.com/proto/cmVcUkTkRHRFYbga86bcBl/Senior-Project--SoftEdge?node-id=329-131&t=hNXcNNmZDpgsH8ZI-1&starting-point-node-id=329%3A131"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.02, color: '#1e4eff' }}
                                        className="mt-8 flex items-center gap-2 text-gray-500 font-bold hover:text-primary transition-colors text-sm uppercase tracking-widest group underline underline-offset-4"
                                    >
                                        View Interactive Prototype
                                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── BUTTON ── */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <motion.button
                        onClick={handleResolve}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            background: resolved ? '#f0f2f8' : '#1e4eff',
                            color: resolved ? '#0a192f' : 'white',
                            border: 'none', borderRadius: 50,
                            fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            padding: '14px 32px', cursor: 'pointer',
                            boxShadow: resolved
                                ? '0 4px 16px rgba(0,0,0,0.08)'
                                : '0 8px 28px rgba(30,78,255,0.38)',
                        }}
                    >
                        <span style={{ fontSize: 18 }}>{resolved ? '↺' : '✦'}</span>
                        {resolved ? 'Back to Ideation' : 'Resolve into Hi-Fi'}
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const SoftEdgeCaseStudy = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="pt-32 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-5 md:px-12">
                    <button
                        onClick={() => navigate('/', { state: { tab: 'ux' } })}
                        className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 text-sm font-medium group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </button>

                    <div className="flex flex-col lg:flex-row gap-15 lg:gap-10 items-stretch">
                        <motion.div {...fadeUp(0.2)} className="w-full lg:w-[45%] lg:self-stretch">
                            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden relative group">
                                <img
                                    src={SoftEdgeHeroImg}
                                    alt="SoftEdge"
                                    className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-[65%]">
                            <motion.div {...fadeUp(0)}>
                                <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Interactive Strategy & Product Design</span>
                                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">SoftEdge</h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-tight mb-12">
                                    <span className="font-bold">SoftEdge</span> is a gamified, AI-powered simulation app to help career-preparation students and working professionals to practice and develop workplace soft skills through realistic, chat- and voice-based scenarios.
                                </p>
                                <div className="flex flex-col md:flex-row gap-x-8 lg:gap-x-12 gap-y-8 pt-8 border-t border-gray-100 items-start md:items-center">
                                    {[
                                        { icon: <Users size={18} />, label: 'ROLE', value: 'UX Researcher & Designer' },
                                        { icon: <Clock size={18} />, label: 'DURATION', value: 'May - Aug 2025' },
                                        { icon: <Tool size={18} />, label: 'TOOLS', value: 'Figma, Miro, Canva, Google' },
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

            {/* PROBLEM STATEMENT */}
            <section className="py-10 bg-[#0a192f] text-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div {...fadeUp(0)}>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 block">The Challenge</span>
                        <h2 className="text-4xl font-bold mb-12">Problem Statement</h2>
                        <div className="max-w-4xl">
                            <p className="text-lg md:text-xl font-italic leading-tight text-blue-50 text-center">
                                "How might we create a safe environment for career-prep/graduating students and professionals to practice and develop workplace soft skills — so that they can build confidence and feel better prepared for real-world job scenarios?"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* RESEARCH */}
            <section className="pt-16 pb-4 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div {...fadeUp(0)} className="mb-12">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Research</span>
                        <h2 className="text-4xl font-bold mb-6">Insights Gathering</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp(0.1)}>
                            <div className="border border-gray-200 shadow-xl overflow-hidden bg-white group">
                                <img src={SoftEdgeSurvey} alt="Research Survey Results" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-102" />
                            </div>
                        </motion.div>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 max-w-5xl">
                                To understand the barrier, a <span className="font-bold">Research Survey</span> was developed and shared with target users to identify the core issue.<br />
                                The responses says that most of the students/ graduates feel underprepared for workplace conversations.
                                Many currently 'wing it' with no solid solution or user-friendly platforms.<br />
                                A common frustration is the lack of structured, constructive, real-time feedback and a judgment-free environment for practice.
                                Users think that gamified learning increases retention, motivation and engagement.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-xl text-gray-900 font-bold max-w-4xl leading-relaxed mb-12">COMPETITIVE LANDSCAPE</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-20">
                            {[
                                { logo: VirtualSpeechLogo, name: "VirtualSpeech", feature: "Focused on high-end VR simulations for public speaking, making it hardware-dependent and costly for individuals." },
                                { logo: RehearsalLogo, name: "Rehearsal", feature: "A video-based coaching platform primarily used for corporate sales training and leadership onboarding." },
                                { logo: CommSkillsLogo, name: "Comm Skills 2025", feature: "Enterprise-focused AI roleplay tailored for executive and professional corporate contexts." },
                            ].map((competitor, i) => (
                                <motion.div key={i} {...fadeUp(0.1 + i * 0.1)} className="flex flex-col gap-8">
                                    <div className="h-20 w-auto flex items-center justify-start gap-4">
                                        <img src={competitor.logo} alt={`${competitor.name} Logo`} className="h-full w-auto object-contain" />
                                        {competitor.name === "Comm Skills 2025" && (
                                            <h4 className="text-2xl font-bold text-gray-900 shrink-0">{competitor.name}</h4>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{competitor.feature}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* PERSONA & USER JOURNEY */}
                        <div className="pt-10 border-t border-gray-200">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                                <motion.div {...fadeUp(0)} className="lg:col-span-7 lg:sticky lg:top-32">
                                    <p className="text-xl text-gray-900 font-bold max-w-4xl leading-relaxed mb-12">PERSONA</p>
                                    <div className="space-y-6 text-gray-600">
                                        <p className="text-lg leading-relaxed">
                                            Neha represents the core audience of this product — career-prep students/graduates who feel the weight of professional expectations.
                                        </p>
                                        <br />
                                        <p className="text-lg leading-relaxed">
                                            She is confident in her skills, but worried about securing a job.
                                            By mapping her <span className="font-bold">User Journey</span>, some critical friction points were identified.
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="lg:col-span-5 relative h-[380px] md:h-[450px] lg:h-[420px] w-full max-w-lg lg:ml-auto">
                                    <motion.div {...fadeUp(0.1)} className="absolute top-0 left-0 w-[80%] bg-white p-1.5 border border-gray-200 shadow-xl overflow-hidden z-10 -rotate-2">
                                        <img src={PersonaImg} alt="Neha Persona Profile" className="w-full h-auto" />
                                    </motion.div>
                                    <motion.div {...fadeUp(0.2)} className="absolute top-32 md:top-40 right-0 w-[80%] bg-white p-1.5 border border-gray-200 shadow-2xl overflow-hidden z-20 rotate-1 shadow-primary/5">
                                        <img src={UserJourneyImg} alt="User Journey Map" className="w-full h-auto" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESIGN JOURNEY (NEW EXECUTION SECTION) ── */}
            <DesignJourneySection />

            {/* PRODUCT STRATEGY & LAUNCH */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div {...fadeUp(0)} className="mb-12">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Business Strategy</span>
                        <h2 className="text-4xl font-bold mb-6">Product Positioning & Launch Ideas</h2>
                        <p className="text-lg text-gray-600 max-w-5xl leading-relaxed">
                            SoftEdge was developed not just as a tool, but as a business case for accessible career development.
                            I have defined a business strategy to position the product in the market and worked on KPIs and measurable success metrics.
                            <br /><br />
                            Digital assets were developed to communicate the platform’s value and user experience to stakeholders and potential users.
                            This included a promotional website and product video to support onboarding, stakeholder communication, and future product launch.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                            {/* Analytics Dashboard - Left */}
                            <motion.div {...fadeUp(0.2)} className="w-full">
                                <img
                                    src={AnalyticsImg}
                                    alt="SoftEdge Analytics Dashboard"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Promo Website - Right */}
                            <motion.div {...fadeUp(0.3)} className="w-full lg:pt-14 flex flex-col">
                                <img
                                    src={PromoWebsiteImg}
                                    alt="SoftEdge Promo Website"
                                    className="w-full h-auto shadow-sm"
                                />
                                <motion.a
                                    href="https://www.figma.com/proto/iJU2qlohTBeUVQkWgU4mMJ/IMM-Senior-Project---Promo-Website?node-id=6-2&t=SYBw2zRm0B8HrApP-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 flex items-center gap-2 text-gray-500 font-bold hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em] underline underline-offset-4 group w-fit self-end"
                                >
                                    View Site Prototype
                                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Promo Video - Centered & Sized Below */}
                        <motion.div {...fadeUp(0.4)} className="w-full max-w-2xl mx-auto">
                            <div className="aspect-video bg-black overflow-hidden shadow-2xl border border-gray-100">
                                <video
                                    ref={videoRef}
                                    src={SoftEdgePromoVideo}
                                    loop
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OUTCOMES (FINAL OUTCOME) */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Outcomes</h2>
                        <ul className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed text-left">
                            {[

                                "Evaluation with real users influenced the design of the screens and onboarding processes.",
                                "Recognized the value of iterative design and creating scalable, future-ready solutions.",
                                "Learned how strong research and problem understanding lead to more meaningful and effective design solutions.",
                                "Gained confidence in developing intuitive designs and interactive strategy independently."
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

export default SoftEdgeCaseStudy;