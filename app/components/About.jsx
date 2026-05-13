'use client'
import { assets, infoList, toolsData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = ({ isDarkMode }) => {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-6 sm:px-[8%] py-24"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-cyan-500 dark:text-cyan-400 font-Ovo mb-2 text-sm font-semibold tracking-widest uppercase"
            >
                Introduction
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-slate-900 dark:text-white text-4xl sm:text-5xl font-Ovo mb-14"
            >
                About me
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative flex-shrink-0 mx-auto lg:mx-0"
                >
                    {/* Decorative border */}
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400 to-indigo-500 opacity-40 blur-sm" />
                    <div className="relative w-64 sm:w-80 rounded-3xl overflow-hidden border border-cyan-400/20">
                        <Image src={assets.user_image} alt="about" className="w-full rounded-3xl" />
                    </div>
                </motion.div>

                {/* Right: Content */}
                <div className="flex-1">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 font-Ovo max-w-2xl text-base leading-relaxed mb-10"
                    >
                        Full-Stack Web Developer with a freshly completed Bachelor of Computer Applications (BCA). I specialise in building production-ready web applications with <strong className="text-slate-900 dark:text-white">React</strong> and <strong className="text-slate-900 dark:text-white">Next.js</strong> on the frontend, and <strong className="text-slate-900 dark:text-white">PHP / Python (FastAPI)</strong> on the backend. My projects span secure digital election systems, AI-powered farming assistants, and environmental waste-management platforms — all built with clean architecture and real-world deployment in mind. I have hands-on experience implementing backend security patterns including <strong className="text-slate-900 dark:text-white">HMAC-SHA-512 hashing</strong> and <strong className="text-slate-900 dark:text-white">TOTP-based authentication</strong>, and I actively research emerging areas like <strong className="text-slate-900 dark:text-white">Edge AI</strong> and <strong className="text-slate-900 dark:text-white">VR Haptics</strong>.
                    </motion.p>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                        {infoList.map(({ icon, iconDark, title, description }, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                key={i}
                                className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/50 p-6 cursor-pointer hover:border-cyan-400 dark:hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-slate-900 dark:text-white font-semibold mt-4 mb-2 text-sm">{title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-Ovo">{description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tools */}
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-slate-700 dark:text-slate-300 font-Ovo mb-4 text-sm font-semibold uppercase tracking-widest"
                    >
                        Tools I use
                    </motion.h4>
                    <div className="flex gap-3 flex-wrap">
                        {toolsData.map((tool, i) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                                key={i}
                                className="w-12 h-12 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl flex items-center justify-center hover:border-cyan-400 dark:hover:border-cyan-400/60 hover:shadow-md hover:shadow-cyan-400/15 transition-all duration-300 hover:-translate-y-1 p-2"
                            >
                                <Image src={tool} alt="tool" className="w-8 h-8 object-contain" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About
