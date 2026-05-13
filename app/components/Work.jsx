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
            className="w-full px-6 sm:px-[8%] py-24"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-cyan-500 dark:text-cyan-400 font-Ovo mb-2 text-sm font-semibold tracking-widest uppercase"
            >
                My portfolio
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-slate-900 dark:text-white text-4xl sm:text-5xl font-Ovo mb-14"
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
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        key={i}
                        onClick={() => window.open(project.link, '_blank')}
                        style={{ backgroundImage: `url(${project.bgImage})`, backgroundColor: '#0f172a' }}
                        className="relative aspect-video bg-contain bg-center bg-no-repeat rounded-2xl overflow-hidden group cursor-pointer shadow-lg border border-slate-200 dark:border-slate-700/40 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500"
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-all duration-300" />

                        {/* Cyan top accent on hover */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                        {/* Card info */}
                        <div className="absolute bottom-5 left-5 right-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-white font-semibold">{project.title}</h3>
                                    <p className="text-cyan-400/90 text-xs font-Ovo mt-0.5">{project.description}</p>
                                </div>
                                <div className="w-9 h-9 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/30">
                                    <Image src={assets.send_icon} alt="view" className="w-4 invert" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Work
