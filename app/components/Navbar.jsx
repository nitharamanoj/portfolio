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
            {/* Light mode background gradient blob */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="" className="w-full opacity-40" />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll
                ? 'bg-white/70 backdrop-blur-xl shadow-lg dark:bg-slate-900/80 dark:backdrop-blur-xl dark:shadow-cyan-500/5 dark:border-b dark:border-white/5'
                : ''
                }`}>
                {/* Logo */}
                <a href="#top" className="flex items-center">
                    <span className="text-2xl font-bold font-Ovo text-slate-900 dark:text-white tracking-tight">
                        Nithara<span className="text-cyan-400">.</span>
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${isScroll
                    ? ''
                    : 'bg-white/60 shadow-sm dark:bg-slate-800/50 dark:border dark:border-white/10 backdrop-blur-sm'
                    }`}>
                    {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((name, i) => {
                        const hrefs = ['#top', '#about', '#services', '#work', '#contact']
                        return (
                            <li key={i}>
                                <a
                                    href={hrefs[i]}
                                    className="font-Ovo text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
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
                    <button onClick={() => setIsDarkMode(prev => !prev)} className="w-6 opacity-70 hover:opacity-100 transition-opacity">
                        <Image
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                            alt="theme toggle"
                        />
                    </button>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 transition-all duration-300 font-Ovo text-sm font-medium"
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
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 bottom-0 w-64 z-50 bg-slate-100 dark:bg-slate-900 border-l border-slate-200 dark:border-white/10 transition-transform duration-500 translate-x-64"
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
                                <a onClick={closeMenu} href={hrefs[i]} className="font-Ovo text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
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