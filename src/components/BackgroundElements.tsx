"use client";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";

const BackgroundElements = () => {
    return (
        <>
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 sm:top-20 left-[5%] sm:left-[10%] w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-20 blur-sm"
            />
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 sm:bottom-20 right-[5%] sm:right-[10%] w-16 h-16 sm:w-24 sm:h-24 transform rotate-45 bg-gradient-to-br from-yellow-300 to-orange-300 opacity-20 blur-sm rounded-xl"
            />
            <motion.div
                animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-[3%] sm:right-[5%] w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-green-300/20"
            />
            <motion.div
                animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 left-[3%] sm:left-[5%] w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 sm:border-8 border-blue-300/20"
            />

            {/* Background Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] pointer-events-none z-0"
            >
                <img src={logo} alt="" className="w-full h-full object-contain" />
            </motion.div>
        </>
    );
};

export default BackgroundElements;
