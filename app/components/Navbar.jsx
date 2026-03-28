'use client'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Background element spanning absolute top */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll
                ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
                : ''
                }`}>
                {/* Logo */}
                <a href="#top" className="flex items-center">
                    <span className="text-2xl font-bold font-Ovo text-gray-900 dark:text-white tracking-tight">
                        Nithara<span className="text-[#E84393]">.</span>
                    </span>
                </a>


                {/* Desktop Nav Links */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll
                    ? ''
                    : 'bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'
                    }`}>
                    {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((name, i) => {
                        const hrefs = ['#top', '#about', '#services', '#work', '#contact']
                        return (
                            <li key={i}>
                                <a
                                    href={hrefs[i]}
                                    className="font-Ovo text-gray-800 dark:text-white hover:opacity-70 transition-colors"
                                >
                                    {name}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* Dark Mode Toggle */}
                    <button onClick={() => setIsDarkMode(prev => !prev)} className="w-6">
                        <Image
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                            alt="theme toggle"
                        />
                    </button>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white rounded-full text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-[#11001F] transition-all duration-300 font-Ovo"
                    >
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
                    </a>

                    {/* Hamburger */}
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image
                            src={isDarkMode ? assets.menu_black : assets.menu_white}
                            alt="menu"
                            className="w-6"
                        />
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 bottom-0 w-64 z-50 bg-rose-50 dark:bg-darkHover transition-transform duration-500 translate-x-64"
                >
                    <div className="absolute top-6 right-6" onClick={closeMenu}>
                        <Image
                            src={isDarkMode ? assets.close_white : assets.close_black}
                            alt="close"
                            className="w-5 cursor-pointer"
                        />
                    </div>
                    {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((name, i) => {
                        const hrefs = ['#top', '#about', '#services', '#work', '#contact']
                        return (
                            <li key={i}>
                                <a onClick={closeMenu} href={hrefs[i]} className="font-Ovo text-gray-800 dark:text-white">
                                    {name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar