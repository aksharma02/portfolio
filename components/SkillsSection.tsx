'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { skills } from '../data/skills';
import { MouseEvent } from 'react';

function SkillCard({ skillGroup, index, styleClass, tagStyle, isDark }: any) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className={`relative p-8 md:p-10 rounded-[2.5rem] ${styleClass} transition-transform duration-500 hover:scale-[1.02] flex flex-col min-h-[360px] overflow-hidden group`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'},
                            transparent 80%
                        )
                    `
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-bold mb-8 tracking-tight">
                    {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {skillGroup.items.map((item: string, i: number) => (
                        <span
                            key={i}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${tagStyle} shadow-sm backdrop-blur-sm`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    // We'll map the skill groups to alternating colors to emulate the bento box design
    const colors = [
        "bg-dev-orange text-white",
        "bg-dev-lime text-dev-black",
        "bg-dev-card text-white",
        "bg-white text-black"
    ];

    return (
        <section id="skills" className="py-32 px-6 bg-dev-black border-none relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
                        Technical<br /><span className="text-dev-orange">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => {
                        const styleClass = colors[index % colors.length];
                        const isDark = styleClass.includes('text-white');
                        const tagStyle = isDark
                            ? "bg-black/20 text-white border-white/10"
                            : "bg-black/10 text-black border-black/10";

                        return (
                            <SkillCard
                                key={index}
                                skillGroup={skillGroup}
                                index={index}
                                styleClass={styleClass}
                                tagStyle={tagStyle}
                                isDark={isDark}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
