'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

function HoverCard({ children, className = "", style = {} }: any) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            whileHover={style.whileHover}
            className={`relative overflow-hidden group ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0 rounded-[inherit]"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.06),
                            transparent 80%
                        )
                    `
                }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
}

export default function AboutSection() {
    return (
        <section id="about" className="py-32 px-6 max-w-6xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-16 items-stretch"
            >
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-stretch justify-start md:pt-[104px]">
                    <div className="relative w-64 h-80 md:w-full md:flex-1 rounded-3xl p-1 overflow-hidden block">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-dev-orange to-dev-lime opacity-50"
                        />
                        <div className="absolute inset-[2px] bg-dev-black rounded-[1.4rem] overflow-hidden z-20 p-2">
                            <img src="/profile/amit.jpg" alt="Amit Kumar" className="w-full h-full object-cover rounded-xl"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/3">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight uppercase">
                        About <span className="text-dev-lime">Me</span>
                    </h2>

                    <HoverCard className="p-8 md:p-10 rounded-[2.5rem] bg-dev-card border border-white/5 mb-10 transition-colors hover:border-white/10">
                        <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-6">
                            I'm Amit Kumar, a Full stack Engineer. As an Engineer and Operations Manager at Hacker's Unity, I specialize in building scalable AI-Driven solutions and managing large-scale developer communities.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                            My expertise spans across AI-driven platforms, cybersecurity, and full-stack development, always aiming to craft premium, high-performance web experiences.
                        </p>
                    </HoverCard>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { label: 'Projects Completed', value: '10+' },
                            { label: 'Partner Companies', value: '11+' },
                            { label: 'Years Experience', value: '1+' },
                        ].map((stat, i) => (
                            <HoverCard
                                key={i}
                                style={{ whileHover: { y: -5 } }}
                                className="p-6 rounded-[2rem] bg-dev-card border border-white/5 text-center transition-all hover:border-dev-orange/30"
                            >
                                <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-dev-orange transition-colors">{stat.value}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</p>
                            </HoverCard>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
