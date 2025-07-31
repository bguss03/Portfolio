import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Beranda", href: "#" },
        { name: "Projek", href: "#" },
        { name: "Kontak", href: "#" },
    ];

    return (
        <div className="Navbar">
            <div className="navbar relative py-7 flex items-center justify-between">
                <div className="logo text-3xl font-bold text-white p-1 md:bg-transparent md:dark:text-white
                px-10 hover:underline transition-all duration-300">
                    <a href="#" className="hover:text-[#113F67] transition-colors duration-300 italic">Bguss</a>
                </div>
                <ul className="hidden md:flex items-center gap-10 px-10">
                    {menuItems.map((item) => (
                        <li key={item.name} className="text-lg font-semibold italic">
                            <a
                                href={item.href}
                                className="text-gray-800 dark:text-white hover:text-[#113F67] hover:underline
                                transition-all duration-300">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                
                {/* Dropdown */}
                <div className="md:hidden">
                    <AnimatedHamburgerButton
                        active={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>

                <ul className={`
                    absolute top-full left-0 w-full bg-zinc-900 text-white md:hidden rounded-4xl
                    overflow-hidden transition-all duration-800 
                    ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                    {menuItems.map((item) =>
                        <li key={item.name} className="border-b border-b-white/20">
                            <a href={item.href} className="block p-4 hover:bg-white/10">{item.name}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

type AnimatedProps = {
    active: boolean;
    onClick: () => void;
};
const AnimatedHamburgerButton = ({ active, onClick }: AnimatedProps) => {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={onClick}
                className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-1 w-10 bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-1 w-10 bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-1 w-5 bg-white"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "calc(50% + 10px)",
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
};




const VARIANTS = {
    top: {
        open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
        closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
    },
    middle: {
        open: { rotate: ["0deg", "0deg", "-45deg"] },
        closed: { rotate: ["-45deg", "0deg", "0deg"] },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};