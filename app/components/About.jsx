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
            className="w-full px-6 sm:px-[8%] py-20"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-gray-600 dark:text-white/60 font-Ovo mb-2 text-lg"
            >
                Introduction
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-gray-800 dark:text-white text-4xl sm:text-5xl font-Ovo mb-12"
            >
                About me
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-64 sm:w-80 rounded-3xl overflow-hidden flex-shrink-0 mx-auto lg:mx-0"
                >
                    <Image src={assets.user_image} alt="about" className="w-full rounded-3xl" />
                </motion.div>

                {/* Right: Content */}
                <div className="flex-1">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 dark:text-white/70 font-Ovo max-w-2xl text-base leading-relaxed mb-8"
                    >
                        I am a final-year BCA student with a strong passion for web development. 
I have a good understanding of HTML, CSS, JavaScript, and basic backend technologies. 
I enjoy building responsive and user-friendly web applications and continuously improving my skills through real-world projects.
                    </motion.p>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                        {infoList.map(({ icon, iconDark, title, description }, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                key={i}
                                className="rounded-xl border border-gray-400 dark:border-white/20 bg-white dark:bg-white/5 p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none"
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                                <h3 className="text-gray-800 dark:text-white font-semibold mt-4 mb-2">{title}</h3>
                                <p className="text-gray-600 dark:text-white/60 text-sm font-Ovo">{description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tools */}
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-gray-800 dark:text-white font-Ovo mb-4"
                    >
                        Tools I use
                    </motion.h4>
                    <div className="flex gap-4 flex-wrap">
                        {toolsData.map((tool, i) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                                key={i}
                                className="w-12 h-12 bg-white dark:bg-white/5 border border-gray-400 dark:border-white/20 rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 p-2"
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
