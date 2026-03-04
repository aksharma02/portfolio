'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const XIcon = ({ size = 24 }: any) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const DiscordIcon = ({ size = 24 }: any) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the massive background text
    const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dev-black pt-20 pb-32" id="home">

            {/* Massive Parallax Background Text */}
            <div className="absolute top-[40%] md:top-1/2 left-0 -translate-y-1/2 w-full flex overflow-hidden pointer-events-none z-0">
                <motion.div
                    style={{ x: textX }}
                    className="flex whitespace-nowrap"
                >
                    <h1 className="text-[12rem] md:text-[20rem] font-bold text-outline uppercase tracking-tighter leading-none select-none opacity-80">
                        FULL STACK ENGINEER • FULL STACK ENGINEER • FULL STACK ENGINEER •
                    </h1>
                </motion.div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl w-full flex flex-col items-center">



                {/* Name - Typewriter Effect */}
                <div className="flex justify-center items-center mb-6 min-h-[48px] md:min-h-[72px]">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white flex items-center">
                        {"Amit Kumar".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ display: "none" }}
                                animate={{ display: "inline-block" }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="inline-block w-[4px] h-[40px] md:h-[60px] bg-dev-orange ml-2 md:ml-3"
                        />
                    </h1>
                </div>

                {/* Subtitle - Word Reveal Effect */}
                <div className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed mb-10 flex justify-center flex-wrap">
                    {"A Full Stack Engineer who has built scalable AI-driven platforms and civic tech solutions"
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1.4 + index * 0.08 }}
                                className="mr-[0.25em] mb-[0.25em]"
                            >
                                {word}
                            </motion.span>
                        ))}
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex gap-4 md:gap-6 justify-center items-center"
                >
                    {[
                        { Icon: DiscordIcon, href: 'https://discord.com/users/amitkumar' },
                        { Icon: XIcon, href: 'https://x.com/AK_Sharma02' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/amit-kumar-at2' },
                        { Icon: Github, href: 'https://github.com/aksharma02' },
                        { Icon: Mail, href: 'mailto:amitkumar.projects@gmail.com' }
                    ].map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(234, 88, 12, 0.1)', borderColor: '#EA580C', color: '#EA580C' }}
                            className="text-dev-orange transition-all duration-300 w-12 h-12 flex items-center justify-center rounded-full border border-dev-orange/20"
                        >
                            <item.Icon size={20} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden md:flex"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[2px] h-12 bg-gradient-to-b from-dev-orange to-transparent"
                />
            </motion.div>
        </section>
    );
}
