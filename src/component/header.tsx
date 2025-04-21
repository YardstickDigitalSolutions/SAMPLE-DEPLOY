'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full  bg-blue-600 bg-opacity-70 backdrop-blur-md text-white shadow-md z-50">
            <div className="container mx-auto max-w-7xl px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-extrabold tracking-wider">Textile</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 items-center text-base">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-blue-700 bg-opacity-95 text-white shadow-lg transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col space-y-4 px-6 py-6 text-lg font-medium">
                        <li>
                            <Link href="/" onClick={closeMenu} className="block hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={closeMenu} className="block hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={closeMenu} className="block hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
