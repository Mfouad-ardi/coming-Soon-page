"use client";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import logo from "../assets/logo.svg";

const ComingSoonCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] shadow-2xl border border-white/10 p-6 sm:p-8 md:p-16 relative z-10 overflow-hidden"
        >
            {/* Top Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-20 sm:h-24 bg-white/5 rounded-b-2xl sm:rounded-b-[3rem] shadow-sm flex items-center justify-center">
                <div className="flex items-center gap-1.5 sm:gap-2 text-blue-300 font-semibold text-xs sm:text-base">
                    <img src={logo} alt="Elite DEV Solutions" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="hidden xs:inline">Elite DEV Solutions</span>
                    <span className="xs:hidden">Elite DEV Solutions</span>
                </div>
            </div>

            <div className="mt-16 sm:mt-16 text-center max-w-3xl mx-auto px-2 sm:px-0 ">
                {/* Logo Icon */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-4 sm:mb-6"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center p-3 sm:p-4 transform rotate-12">
                        <img src={logo} alt="Logo" className="w-full h-full" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-gray-400 font-medium tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 uppercase">We're Still</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
                        Cooking Our Website.
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed px-4 sm:px-0">
                        We are going to launch our website Very Soon.<br className="hidden sm:inline" />
                        <span className="sm:hidden"> </span>Stay Tune.
                    </p>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 sm:mt-16 flex justify-center gap-3 sm:gap-4"
                >
                    {[
                        // { Icon: Twitter, href: "#" },
                        { Icon: Instagram, href: "https://www.instagram.com/elite.dev.solutions/" },
                        // { Icon: Linkedin, href: "#" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full shadow-sm flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <item.Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ComingSoonCard;
