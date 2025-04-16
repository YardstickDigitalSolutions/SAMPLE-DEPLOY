import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-lg font-bold">inspace</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#home" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;