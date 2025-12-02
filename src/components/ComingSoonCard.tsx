"use client";
import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/logo.svg";

const ComingSoonCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl bg-black/40 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/10 p-8 md:p-16 relative z-10 overflow-hidden"
        >
            {/* Top Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-white/5 rounded-b-[3rem] shadow-sm flex items-center justify-center">
                <div className="flex items-center gap-2 text-blue-300 font-semibold">
                    <img src={logo} alt="Elite DEV Solutions" className="w-8 h-8" />
                    Elite DEV Solutions
                </div>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
                {/* Logo Icon */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-6"
                >
                    <div className="w-24 h-24 bg-white/10 rounded-2xl shadow-lg flex items-center justify-center p-4 transform rotate-12">
                        <img src={logo} alt="Logo" className="w-full h-full" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-gray-400 font-medium tracking-widest text-sm mb-4 uppercase">We're Still</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Cooking Our Website.
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                        We are going to launch our website Very Soon.<br />
                        Stay Tune.
                    </p>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex justify-center gap-4"
                >
                    {[
                        { Icon: Twitter, href: "#" },
                        { Icon: Instagram, href: "#" },
                        { Icon: Linkedin, href: "#" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="w-10 h-10 bg-white/10 rounded-full shadow-sm flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <item.Icon className="w-4 h-4" />
                        </a>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ComingSoonCard;
