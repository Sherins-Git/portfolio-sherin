import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Work', to: 'work' },
        { name: 'Resume', to: '/resume', type: 'route' },
        { name: 'Contact', to: 'contact' },
    ];

    const handleNavClick = (to, type) => {
        if (type === 'route') {
            navigate(to);
        } else {
            if (!isHome) {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(to);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white shadow-md py-4'
                : 'bg-white py-6'
                }`}
        >
            <div className="w-full px-8 md:px-24 lg:px-48 flex justify-between items-center">
                <div className="font-bold text-4xl tracking-tighter cursor-pointer transition-colors duration-300 text-gray-900 drop-shadow-sm">
                    <RouterLink to="/" onClick={() => window.scrollTo(0, 0)}>
                        <span className="text-primary">Sherin</span>Pattukalathil<span className="text-primary">.</span>
                    </RouterLink>
                </div>

                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => {
                        if (link.type === 'route') {
                            return (
                                <RouterLink
                                    key={link.name}
                                    to={link.to}
                                    className={`hover:text-primary transition-colors font-semibold text-xl cursor-pointer drop-shadow-sm ${location.pathname === link.to ? 'text-primary' : 'text-gray-800'}`}
                                >
                                    {link.name}
                                </RouterLink>
                            );
                        }

                        return isHome ? (
                            <ScrollLink
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-gray-800 hover:text-primary transition-colors font-semibold text-xl cursor-pointer drop-shadow-sm"
                            >
                                {link.name}
                            </ScrollLink>
                        ) : (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.to, 'scroll')}
                                className="text-gray-800 hover:text-primary transition-colors font-semibold text-xl cursor-pointer bg-transparent border-none p-0 drop-shadow-sm"
                            >
                                {link.name}
                            </button>
                        );
                    })}
                </div>

                {/* Mobile Menu Button - Todo: Implement mobile menu */}
                <div className="md:hidden">
                    <button className="text-gray-600 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
