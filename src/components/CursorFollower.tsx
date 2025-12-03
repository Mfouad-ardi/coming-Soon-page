"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const CursorFollower = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            className="hidden md:block fixed top-0 left-0 w-8 h-8 bg-blue-500/30 rounded-full pointer-events-none z-50 backdrop-blur-sm border border-blue-400/50"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
        </motion.div>
    );
};

export default CursorFollower;
