'use client';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-32 px-6 bg-dev-black">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* Left Side: Massive Stats / Title */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/3 flex flex-col gap-12 lg:sticky lg:top-32 h-fit"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none text-white">
                        My<br /><span className="text-gray-500">Experience</span>
                    </h2>

                    <div className="flex flex-col gap-8 overflow-hidden pt-4">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        >
                            <h3 className="text-7xl font-bold text-dev-lime mb-2">+1</h3>
                            <p className="text-xl text-gray-400 font-medium uppercase tracking-wider">Years of<br />Experience</p>
                        </motion.div>
                        <div className="w-full h-[1px] bg-white/10" />
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                        >
                            <h3 className="text-7xl font-bold text-dev-orange mb-2">+10</h3>
                            <p className="text-xl text-gray-400 font-medium uppercase tracking-wider">Projects<br />Completed</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: Timeline Cards */}
                <div className="lg:w-2/3 flex flex-col gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group p-8 md:p-12 rounded-[2.5rem] bg-dev-card border border-white/5 hover:bg-dev-card-hover transition-colors duration-500 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{exp.company}</h3>
                                    <h4 className="text-xl text-dev-lime font-medium">{exp.role}</h4>
                                </div>
                                <span className="inline-block px-5 py-2 rounded-full border border-white/10 text-gray-400 text-sm font-semibold whitespace-nowrap bg-black/30">
                                    {exp.date}
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-gray-400 text-lg flex items-start gap-4">
                                        <span className="text-dev-orange mt-1">✦</span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
