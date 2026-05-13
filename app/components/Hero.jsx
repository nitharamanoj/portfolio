'use client'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ isDarkMode }) => {
    return (
        <div
            id="top"
            className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 relative overflow-hidden"
        >
            {/* Background glow blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/10 dark:bg-cyan-400/8 blur-[120px]" />
                <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/10 blur-[90px]" />
            </div>

            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className="relative mb-8"
            >
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-cyan-400 p-[3px] animate-spin" style={{ animationDuration: '8s' }}>
                    <div className="w-full h-full rounded-full bg-slate-100 dark:bg-[#0a0f1e]" />
                </div>
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-[3px] border-white/20 shadow-2xl">
                    <Image
                        src={assets.profile_img}
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2 text-base font-Ovo mb-4 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20"
            >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-700 dark:text-cyan-300 text-sm font-medium">Hi! I&apos;m Nithara Manoj</span>
                <Image src={assets.hand_icon} alt="wave" className="w-5 inline" />
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-5xl lg:text-[52px] font-Ovo text-slate-900 dark:text-white leading-tight max-w-3xl mb-6"
            >
                Full-Stack Web Developer<br />
                <span className="gradient-text">based in Kerala.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-slate-500 dark:text-slate-400 font-Ovo max-w-xl mx-auto text-base leading-relaxed mb-10"
            >
                Recently graduated with a Bachelor of Computer Applications (BCA). I build production-ready web applications using React, Next.js, PHP &amp; Python — turning real-world problems into clean, scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
            >
                <a
                    href="#contact"
                    className="flex items-center gap-3 px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 font-Ovo shadow-lg shadow-cyan-400/25"
                >
                    Contact me
                    <Image src={assets.right_arrow_white} alt="" className="w-4 invert" />
                </a>
                <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-3 px-8 py-3 bg-transparent text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-full hover:border-cyan-400 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 font-Ovo"
                >
                    My Resume
                    <Image src={assets.download_icon} alt="" className="w-4 opacity-60" />
                </a>
            </motion.div>
        </div>
    )
}

export default Hero
