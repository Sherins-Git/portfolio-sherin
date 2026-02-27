import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Resume = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                {/* Download Button - Top Right Outside */}
                <div className="flex justify-end w-full mb-4">
                    <a
                        href="/Sherin_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md group w-full md:w-auto"
                    >
                        <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                        Download Resume
                    </a>
                </div>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">Sherin Pattukalathil</h1>
                                <p className="text-xl text-primary font-medium">Software Developer / UX Designer</p>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <a href="http://www.linkedin.com/in/sherin-pattukalathil-1a35b2b2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 md:items-end w-full md:w-auto">
                            <div className="flex flex-col gap-3 text-gray-600 text-sm bg-gray-50 p-5 rounded-xl border border-gray-100 w-full md:w-auto">
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-primary" />
                                    <a href="mailto:sherin.pattukalathil@gmail.com" className="hover:text-primary transition-colors font-medium">sherin.pattukalathil@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-primary" />
                                    <span className="font-medium">+1(647) 881-2114</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={16} className="text-primary" />
                                    <span className="font-medium">Scarborough, Ontario, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Summary Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Professional Summary</h2>
                    <p className="text-gray-700 leading-relaxed">

                        Software Developer with seven years of experience building enterprise-scale applications using Java, ASP.NET, Web APIs, SQL Server, and Oracle PL/SQL.
                        Experienced in Agile and Waterfall methodologies and collaborating with cross-functional teams.
                        Combines strong backend expertise with UX-driven thinking to translate business requirements into intuitive, user-centered interfaces and scalable, maintainable solutions.
                    </p>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Technical Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {['Java', 'Springboot', 'Hibernate', 'C#', 'ASP.NET MVC', 'VB.NET', 'RESTful/ SOAP WebAPI', 'Postman Client', 'Windows Forms', 'SQL Server', 'Oracle PL/SQL', 'HTML', 'CSS', 'Javascript', 'Tortoise SVN', 'GitHub', 'UX/UI Design', 'User Research', 'Usability Testing', 'Design Thinking', 'User Journey Mapping', 'Personas', 'Wireframing', 'Prototyping', 'Agile Methodology', 'Figma', 'Canva', 'Squarespace'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Professional Experience</h2>

                    <div className="space-y-8">
                        {/* Claire Buré Consulting */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xl font-semibold text-gray-900">UX Design Intern</h3>
                                <span className="text-sm text-gray-500 font-medium">Oct 2025 - Dec 2025</span>
                            </div>
                            <div className="text-primary font-medium mb-3">Claire Buré Consulting & Systems with Soul Community | Toronto, ON</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Designed website interfaces and digital experiences using Figma, Canva and Squarespace.</li>
                                <li>Conducted usability evaluations and suggested improvements for user experience and accessibility.</li>
                                <li>Supported styling using CSS, applying layout, spacing, and visual improvements aligned with UX designs.</li>
                            </ul>
                        </div>

                        {/* Infosys - Tech Lead */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xl font-semibold text-gray-900">Technology Lead</h3>
                                <span className="text-sm text-gray-500 font-medium">Mar 2024 - Aug 2024</span>
                            </div>
                            <div className="text-primary font-medium mb-3">Infosys Limited | India</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Contributed to a cloud migration initiative from on-premise infrastructure to Azure Stack HCI, supporting modernization of enterprise systems.</li>
                                <li>Collaborated with cross-functional teams including infrastructure engineers, product owners, and clients to coordinate deployment of Microsoft and SQL Server environments.</li>
                            </ul>
                        </div>

                        {/* Infosys - Tech Analyst */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xl font-semibold text-gray-900">Technology Analyst</h3>
                                <span className="text-sm text-gray-500 font-medium">Feb 2022 - Feb 2024</span>
                            </div>
                            <div className="text-primary font-medium mb-3">Infosys Limited | India</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Contributed to the migration and reengineering projects in the retail domain.</li>
                                <li>Developed and tested RESTful APIs using Java with Springboot and Hibernate frameworks, validating functionality with Postman and supporting system integration.</li>
                                <li>Designed and maintained Oracle PL/SQL procedures to support backend data processing and reporting workflows.</li>
                                <li>Supported automation of batch jobs using Control-M, improving reliability of scheduled processes.</li>
                                <li>Performed bug fixing, root-cause analysis, and regression testing to improve system stability.</li>
                                <li>Collaborated with cross-functional teams to ensure smooth releases.</li>
                                <li>Used version control (TortoiseSVN) to manage code and support structured development workflows.</li>
                            </ul>
                        </div>

                        {/* Infosys - Senior Systems Engineer */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xl font-semibold text-gray-900">Senior Systems Engineer</h3>
                                <span className="text-sm text-gray-500 font-medium">Mar 2019 - Jan 2022</span>
                            </div>
                            <div className="text-primary font-medium mb-3">Infosys Limited | India</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Worked in a C# .NET environment, implementing functional enhancements based on business requirements.</li>
                                <li>Developed and modified Oracle database objects (tables, procedures, queries) to support backend logic.</li>
                                <li>Produced technical documentation to support system clarity and long-term maintainability.</li>
                                <li>Actively contributed to defect resolution, testing, and performance improvements.</li>
                                <li>Strengthened understanding of software development principles, structured coding, and enterprise delivery practices.</li>
                            </ul>
                        </div>

                        {/* iPOSTECH Solutions */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xl font-semibold text-gray-900">Software Programmer</h3>
                                <span className="text-sm text-gray-500 font-medium">Apr 2018 - Feb 2019</span>
                            </div>
                            <div className="text-primary font-medium mb-3">iPOSTECH Solutions Pvt Ltd | India</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Developed a web-based POS application supporting restaurant ordering, billing, kitchen order display system, and delivery tracking.</li>
                                <li>Developed RESTful APIs using .NET to support communication between frontend and backend systems.</li>
                                <li>Designed and implemented SQL tables and stored procedures to support application functionality.</li>
                                <li>Worked closely with team members to test features, fix bugs, and improve overall application stability.</li>
                            </ul>
                        </div>

                        {/* Bluegen Solutions */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                                <span className="text-sm text-gray-500 font-medium">Oct 2016 - Apr 2018</span>
                            </div>
                            <div className="text-primary font-medium mb-3">Bluegen Solutions | India</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Developed a C# .NET Windows Forms application to manage billing and sales operations for a retail business.</li>
                                <li>Designed and implemented SQL Server databases, including tables, relationships, and queries to support efficient data storage and retrieval.</li>
                                <li>Built dynamic reports using Crystal Reports (daily, monthly, yearly) and client-specific reports to support business decision-making.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Key Projects</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Interactive Strategy Project – SoftEdge</h3>
                            <div className="text-sm text-gray-500 font-medium mb-2">May 2025 - Aug 2025 | Program: Interactive Media Management | Individual Project</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Designed and prototyped a gamified mobile platform for learning soft-skills simulations.</li>
                                <li>Conducted user research and usability testing to validate design decisions.</li>
                                <li>Built interactive user flows and branching logic for scenario-based experiences.</li>
                                <li>Created functional prototypes using Figma and interactive logic tools.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Interactive Strategy Project – ProHockey Advantage</h3>
                            <div className="text-sm text-gray-500 font-medium mb-2">Jan 2025 - Apr 2025 | Program: Interactive Media Management | Group Project</div>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                                <li>Collaborated with a cross-functional student team to develop a digital strategy for a real client starting a new hockey training business.</li>
                                <li>Conducted competitive analysis and user research to inform content and engagement strategy.</li>
                                <li>Contributed to development of structured content and user flows for the website experience.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Education</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Postgraduate Certificate in Interactive Media Management</h3>
                            <p className="text-gray-600">Centennial College, ON, CA, 2025</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Master of Computer Applications</h3>
                            <p className="text-gray-600">University of Calicut, Kerala, India 2015</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Science</h3>
                            <p className="text-gray-600">University of Calicut, Kerala, India 2012</p>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default Resume;
