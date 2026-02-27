import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Layout, Server, Database, GitBranch, Terminal, Globe, Smartphone, UserCheck, Figma } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-primary/10 rounded-xl text-primary">
                <Icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    //className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg text-lg font-medium border border-gray-100"
                    className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium border border-gray-200"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const devSkills = [
        ".NET", "C#", "ASP.NET MVC", "VB.NET", "Java", "Springboot", "Hibernate", "RESTful API", "SOAP API",
        "JavaScript", "HTML", "CSS", "SQL Server", "Oracle PL/SQL", "Tortoise SVN", "GitHub"
    ];

    const uxSkills = [
        "User Research", "Wireframing", "Prototyping",
        "Usability Testing", "Figma"
    ];

    return (
        <section id="skills" className="py-10 bg-background">
            <div className="w-full px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SkillCategory
                            title="Development"
                            skills={devSkills}
                            icon={Code}
                        />
                        <SkillCategory
                            title="UX Design"
                            skills={uxSkills}
                            icon={PenTool}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
