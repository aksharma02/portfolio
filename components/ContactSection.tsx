'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.08)_0,transparent_100%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-bold mb-6">
                    Let's Build <span className="text-dev-orange">Something</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Currently available for internships, freelance opportunities, and collaborations.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-dev-card p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl shadow-[0_0_40px_-15px_rgba(234,88,12,0.2)] relative z-10"
            >
                <form className="space-y-6" action="https://formspree.io/f/xeelypye" method="POST">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium px-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-dev-orange focus:ring-1 focus:ring-dev-orange transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium px-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-dev-orange focus:ring-1 focus:ring-dev-orange transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium px-1">Message</label>
                        <textarea
                            rows={5}
                            name="message"
                            required
                            placeholder="How can I help you?"
                            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-dev-orange focus:ring-1 focus:ring-dev-orange transition-all resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-dev-orange to-dev-lime hover:opacity-90 text-dev-black font-extrabold tracking-wide py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-lg"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 flex justify-center gap-8"
            >
                {[
                    { icon: Github, href: 'https://github.com/AmitKumar' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/AmitKumar' },
                    { icon: Twitter, href: '#' },
                    { icon: Mail, href: 'mailto:contact@amitkumar.com' },
                ].map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full bg-dev-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-dev-orange hover:border-dev-orange/50 hover:bg-dev-orange/10 transition-all hover:scale-110"
                    >
                        <social.icon size={20} />
                    </a>
                ))}
            </motion.div>
        </section>
    );
}
