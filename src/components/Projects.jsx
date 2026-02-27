import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import SoulCapsuleImg from '../assets/soul_capsule_card_image.png';
import Photo from '../assets/photo.png'; // Using this as placeholder for others if needed, though they currently use Unsplash
import SoftEdgeImg from '../assets/softedge_card_image.png';
import ProHockeyImg from '../assets/pha_card_image.png';

const projectsData = {
    development: [
        {
            id: 1,
            title: "Partner Integration Portal API Development",
            category: "Development",
            role: "Technology Analyst",
            description: "Developed backend APIs to support a new partner portal, enabling seamless integration between external partner systems and internal enterprise platforms.",
            challenge: "Needed secure, scalable APIs for vendor and partner integration, with reliable synchronization between the partner portal and internal systems at enterprise scale.",
            approach: "Designed and developed REST APIs using Java, Spring Boot, and Hibernate. Implemented business logic and database operations using Oracle and PL/SQL. Reused and optimized existing database procedures. Performed API testing and validation using Postman. Managed version control and deployment processes. Debugged and resolved production issues.",
            impact: "Enabled seamless partner-to-internal system integration, improved automation of partner data synchronization, and enhanced system scalability.",
            tech: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Oracle PL/SQL", "Maven", "SVN", "Postman"],
        },
        {
            id: 2,
            title: "Warehouse Management System Migration",
            category: "Development",
            role: "Technology Analyst",
            description: "Worked on migrating warehouse operations from a legacy system to a modern enterprise warehouse management platform.",
            challenge: "Required reliable batch processing integration between warehouse systems. Needed automation and reliable job scheduling for warehouse operations. Ensured smooth transition without disrupting warehouse workflows.",
            approach: "Developed and modified Java-based backend services. Created and configured batch jobs using enterprise scheduling tools. Integrated backend services with warehouse workflows. Fixed system bugs and optimized batch processing reliability. Supported database operations and service integration.",
            impact: "Enabled successful warehouse platform migration, improved reliability of batch processing operations, and reduced manual operational overhead.",
            tech: ["Java", "Oracle PL/SQL", "Control-M", "IntelliJ IDEA", "WinSCP"],
        },
        {
            id: 3,
            title: "Supply Chain Master Data ManagementSystem",
            category: "Development",
            role: "Senior Systems Engineer",
            description: "Contributed to re-engineering a large retail supply chain system by improving master data management and integrating legacy applications with newer enterprise platforms.",
            challenge: "Legacy desktop applications had tight coupling with supply chain processes, requiring integration across inventory, warehouse, transport, and handheld device systems. Needed improved database structure and API communication",
            approach: "Developed backend features and enhancements in C# .NET, designed and implemented Oracle database tables, stored procedures and business logic. Implemented SOAP-based and RESTful web services for inter-system communication. Prepared technical documentation for maintainability and knowledge transfer.",
            impact: "Improved data integration between critical supply chain systems. Reduced dependency on legacy components. Enhanced overall system stability and maintainability.",
            tech: ["C#", ".NET Framework", "SOAP APIs", "Oracle PL/SQL", "Tortoise SVN"],
        },
        {
            id: 4,
            title: "Retail & Restaurant POS System",
            category: "Development",
            role: "Software Programmer",
            description: "Developed a web-based POS application supporting restaurant ordering, billing, kitchen display systems, and delivery tracking using a .NET backend.",
            challenge: "Needed a reliable, real-time system to manage complex multi-workflow restaurant operations including ordering, billing, kitchen display, and delivery — all communicating through a shared backend.",
            approach: "Built RESTful APIs using .NET to bridge frontend and backend, designed SQL Server tables and stored procedures, and collaborated closely with the team on testing, bug fixing, and feature improvements. Contributed to the development of user interface for POS application, price display and sales summary application  with data visualization and ERP integration.",
            impact: "Delivered a fully functional POS platform supporting end-to-end restaurant operations, improving operational efficiency and order accuracy.",
            tech: [".NET", "RESTful APIs", "SQL Server", "HTML", "CSS", "Angular"],
        },
        {
            id: 5,
            title: "Retail & Restaurant POS System",
            category: "Development",
            role: "Software Programmer",
            description: "Developed a web-based POS application supporting restaurant ordering, billing, kitchen display systems, and delivery tracking using a .NET backend.",
            challenge: "Needed a reliable, real-time system to manage complex multi-workflow restaurant operations including ordering, billing, kitchen display, and delivery — all communicating through a shared backend.",
            approach: "Built RESTful APIs using .NET to bridge frontend and backend, designed SQL Server tables and stored procedures, and collaborated closely with the team on testing, bug fixing, and feature improvements. Contributed to the development of user interface for POS application, price display and sales summary application  with data visualization and ERP integration.",
            impact: "Delivered a fully functional POS platform supporting end-to-end restaurant operations, improving operational efficiency and order accuracy.",
            tech: [".NET", "RESTful APIs", "SQL Server", "HTML", "CSS", "Angular"],
        },
    ],
    ux: [
        {
            id: 6,
            title: "Interactive Strategy - Systems with Soul",
            category: "UX Design",
            role: "UX Design Intern",
            focus: "Brand Strategy, Visual Identity, Website Design",
            tools: "Figma, Miro, Canva, Squarespace, Notion, MS Office",
            description: "Create a brand strategy and visual identity for Soul Capsule - a community platform, and build a draft version of the website.",
            image: SoulCapsuleImg,
            link: "/case-study/systems-with-soul"
        },
        {
            id: 7,
            title: "SoftEdge – Soft Skills Learning Platform",
            category: "UX Design",
            role: "UXR & UX Designer",
            focus: "Interactive Strategy, User Research, UI/UX Design, Usability Testing, Brand Identity",
            tools: "Figma, Miro, Canva, MS Office, Google Forms",
            description: "Design an interactive soft skill simulation platform and implement a working prototype and business model.",
            image: SoftEdgeImg,
            link: "/case-study/softedge"
        },
        {
            id: 8,
            title: "ProHockey Advantage",
            category: "UX Design",
            role: "UX Researcher & Content Strategist",
            focus: "User Research, Competitive Analysis, UX Strategy & Recommendations, Website Design",
            tools: "Figma, Miro, Canva, MS Office",
            description: "Build a digital strategy for a hockey training startup, including content plan and design system for the website.",
            image: ProHockeyImg,
            link: "/case-study/prohockey"
        }//,
        // {
        //     id: 9,
        //     title: "University of Strasbourg CAWEB Masters Program - Interactive Strategy",
        //     category: "UX Design",
        //     role: "UX Researcher & Content Strategist",
        //     focus: "UX Strategy, Visual Identity, Website Design, Brand System",
        //     tools: "User Research, Competitive Analysis, Wireframing, Prototyping, Usability Testing, Figma, Miro, Squarespace, Notion",
        //     description: "Collaborated with a cross-functional student team to build a digital strategy for a hockey training startup, including content and user flows for the website.",
        //     image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        //     link: "/case-study/prohockey"
        // }
    ]
};

const DevProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group p-8 md:p-10"
    >
        {/* Header */}
        <div className="mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">{project.role}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">{project.title}</h3>
        </div>

        {/* Overview */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.description}</p>

        {/* 3-column sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
                    Challenge
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">{project.challenge}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
                    Approach
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">{project.approach}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                    Impact
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">{project.impact}</p>
            </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-blue-50 text-primary text-sm font-medium rounded-full border border-blue-100">
                    {tech}
                </span>
            ))}
        </div>
    </motion.div>
);

const UXProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
    >
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                    <p className="text-lg font-medium text-gray-500 mb-6">{project.role}</p>

                    <div className="space-y-4 mb-4">
                        <p className="text-lg text-gray-600 leading-relaxed italic">
                            {project.description}
                        </p>
                        <div className="pt-4 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-500 mb-1">
                                <span className="font-bold text-gray-900">Focus: </span> {project.focus}
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                <span className="font-bold text-gray-900">Tools: </span> {project.tools}
                            </p>
                        </div>
                    </div>
                </div>

                <RouterLink
                    to={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-900 rounded-xl hover:bg-primary hover:text-white transition-all w-fit font-semibold text-base group-hover:shadow-lg group-hover:shadow-primary/20 mt-4"
                >
                    View Case Study <ArrowUpRight size={18} />
                </RouterLink>
            </div>

            <div className="order-1 md:order-2 h-64 md:h-auto overflow-hidden relative aspect-[4/3] md:aspect-auto">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.tab || 'development');

    useEffect(() => {
        if (location.state?.tab) {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <section id="work" className="py-10 bg-background">
            <div className="w-full px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Featured Projects</h2>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab('development')}
                            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${activeTab === 'development'
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            Development
                        </button>
                        <button
                            onClick={() => setActiveTab('ux')}
                            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${activeTab === 'ux'
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            UX Design
                        </button>
                    </div>

                    <div className="space-y-8">
                        <AnimatePresence mode="wait">
                            {activeTab === 'development'
                                ? projectsData.development.map((project) => (
                                    <DevProjectCard key={project.id} project={project} />
                                ))
                                : projectsData.ux.map((project) => (
                                    <UXProjectCard key={project.id} project={project} />
                                ))
                            }
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
