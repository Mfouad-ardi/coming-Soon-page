"use client";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";

const BackgroundElements = () => {
    return (
        <>
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-20 blur-sm"
            />
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-[10%] w-24 h-24 transform rotate-45 bg-gradient-to-br from-yellow-300 to-orange-300 opacity-20 blur-sm rounded-xl"
            />
            <motion.div
                animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-[5%] w-12 h-12 rounded-full border-4 border-green-300/20"
            />
            <motion.div
                animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 left-[5%] w-20 h-20 rounded-full border-8 border-blue-300/20"
            />

            {/* Background Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
            >
                <img src={logo} alt="" className="w-full h-full object-contain" />
            </motion.div>
        </>
    );
};

export default BackgroundElements;
