import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-5 border-t border-gray-100">
            <div className="w-full px-6 md:px-12 lg:px-24 text-center">
                <p className="text-gray-500 text-lg">
                    © {new Date().getFullYear()} Sherin Pattukalathil. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
