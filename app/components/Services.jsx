'use client'
import { assets, serviceData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = ({ isDarkMode }) => {
    return (
        <motion.section
            id="services"
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
                What I offer
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-slate-900 dark:text-white text-4xl sm:text-5xl font-Ovo mb-14"
            >
                What I Do
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {serviceData.map(({ icon, title, description, link }, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                        key={i}
                        className="group relative border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/50 rounded-2xl px-6 py-8 cursor-pointer hover:border-cyan-400 dark:hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300 overflow-hidden"
                    >
                        {/* Subtle top accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                        <Image src={icon} alt={title} className="w-10 mb-5 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-3">{title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-Ovo leading-relaxed mb-5">{description}</p>
                        <a
                            href={link || '#'}
                            className="flex items-center gap-2 text-sm text-cyan-500 dark:text-cyan-400 font-Ovo group-hover:gap-3 transition-all duration-300"
                        >
                            Read more
                            <Image
                                src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow}
                                alt=""
                                className="w-4"
                            />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Services
