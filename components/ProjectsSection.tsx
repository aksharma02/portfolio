'use client';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowRight, Github } from 'lucide-react';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-32 px-6 bg-dev-black border-none relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
                        Recent<br /><span className="text-dev-lime">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-sm text-lg hidden md:block border-l-2 border-dev-lime pl-4">
                        A selection of my recent work, showcasing scalable architecture and intuitive design.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover="hover"
                            className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-12 rounded-[2.5rem] bg-dev-card border border-white/5 hover:bg-dev-card-hover transition-colors duration-500 overflow-hidden"
                        >
                            <div className="relative z-10 flex-grow max-w-2xl">
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 group-hover:text-dev-lime transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-5 py-2 rounded-full border border-white/10 text-gray-300 text-sm font-medium bg-black/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-row md:flex-col gap-4 mt-8 md:mt-0 items-center md:items-end w-full md:w-auto justify-end">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                                    title="View Source Code"
                                >
                                    <Github size={24} strokeWidth={1.5} />
                                </a>
                                {project.live !== '#' && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center w-16 h-16 rounded-full bg-dev-lime text-black hover:bg-white transition-colors group-hover:scale-110 duration-300"
                                        title="View Live Site"
                                    >
                                        <ArrowRight size={28} strokeWidth={2} className="group-hover:-rotate-45 transition-transform duration-300" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
