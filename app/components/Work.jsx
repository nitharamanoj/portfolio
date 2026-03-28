'use client'
import { assets, workData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = ({ isDarkMode }) => {
    return (
        <motion.section
            id="work"
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
                My portfolio
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-gray-800 dark:text-white text-4xl sm:text-5xl font-Ovo mb-12"
            >
                My latest work
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10"
            >
                {workData.map((project, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        key={i}
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        className="relative aspect-video bg-cover bg-top rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                        {/* Card info */}
                        <div className="absolute bottom-5 left-5 right-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-white font-semibold">{project.title}</h3>
                                    <p className="text-white/70 text-sm font-Ovo">{project.description}</p>
                                </div>
                                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                    <Image src={assets.send_icon} alt="view" className="w-5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center mt-8"
            >
                <a
                    href="#"
                    className="inline-flex items-center gap-3 px-8 py-3 border border-gray-400 text-gray-800 dark:border-white/30 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-[#11001F] transition-all duration-300 font-Ovo"
                >
                    Show more
                    <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="" className="w-4" />
                </a>
            </motion.div>
        </motion.section>
    )
}

export default Work
