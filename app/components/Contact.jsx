'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = ({ isDarkMode }) => {
    const EMAIL = 'nitharamanoj@gmail.com'
    const [copied, setCopied] = React.useState(false)

    const copyEmail = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const contactLinks = [
        { label: 'EMAIL', href: `mailto:${EMAIL}`, onCopy: copyEmail },
        { label: 'GITHUB', href: 'https://github.com/nitharamanoj', onCopy: null },
        { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/nithara-manoj-097606385', onCopy: null }
    ]

    return (
        <motion.section
            id="contact"
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
                Connect with me
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-slate-900 dark:text-white text-4xl sm:text-5xl font-Ovo mb-14"
            >
                Get in touch
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="max-w-4xl mx-auto w-full rounded-2xl border border-slate-200 dark:border-slate-700/60 overflow-hidden bg-white dark:bg-slate-800/40 backdrop-blur-sm flex flex-col sm:flex-row shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
                {contactLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        onClick={link.onCopy || undefined}
                        target={link.onCopy ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-between items-center px-8 py-7 group hover:bg-cyan-50 dark:hover:bg-slate-700/40 transition-colors border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-slate-700/60 last:border-0"
                    >
                        <span className="text-sm font-semibold tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 font-mono transition-colors">
                            {link.label === 'EMAIL' && copied ? '✓ COPIED!' : link.label}
                        </span>
                        {link.onCopy ? (
                            <svg className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        ) : (
                            <svg className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </a>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Contact
