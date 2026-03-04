'use client';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award } from 'lucide-react';

export default function CertificationsBar() {
    // Duplicate array for seamless infinite scrolling
    const duplicatedItems = [...certifications, ...certifications, ...certifications];

    return (
        <section className="py-12 bg-dev-black border-y border-white/5 overflow-hidden">
            <div className="flex relative w-full group">
                <motion.div
                    animate={{ x: ['0%', '-33.33%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30, // slower
                        ease: 'linear',
                    }}
                    className="flex gap-6 whitespace-nowrap px-3 group-hover:[animation-play-state:paused]"
                >
                    {duplicatedItems.map((cert, index) => (
                        <div
                            key={index}
                            className="px-6 py-4 bg-dev-card border border-white/5 rounded-full flex items-center gap-3 shrink-0 hover:bg-dev-card-hover transition-colors"
                        >
                            <Award className="text-dev-orange" size={24} />
                            <span className="text-white font-bold text-lg">{cert.title}</span>
                            <span className="text-gray-500 text-sm mx-2">|</span>
                            <span className="text-gray-400 font-medium">{cert.issuer}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
