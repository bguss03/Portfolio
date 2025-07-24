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
        <div className="bg-black">

            <div className="navbar relative py-7 flex items-center justify-between">
                <div className="logo text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:dark:text-white
                px-5">
                   <a href="#" className="hover:text-[#113F67] transition-colors duration-300 italic">Portofolio</a>
                </div>
                <ul className="hidden md:flex items-center gap-10 px-7">
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

                <div className="md:hidden">
                    <AnimatedHamburgerButton
                        active={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>

                <ul className={`
                absolute top-full left-0 w-full bg-white text-black md:hidden rounded-xl
                ${isMenuOpen ? 'block' : 'hidden'}
            `}>
                    {menuItems.map((item) =>
                        <li key={item.name} className="border-b">
                            <a href={item.href} className="block p-4">{item.name}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

// --- PERBAIKAN DI SINI ---
type AnimatedProps = {
    active: boolean;
    onClick: () => void;
};
const AnimatedHamburgerButton = ({ active, onClick }: AnimatedProps) => {
    // const [active, setActive] = useState(false); <-- Dihapus
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
                onClick={onClick} // <-- Diubah
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

// Komponen Example tidak diperlukan di dalam file Navbar.jsx, bisa dihapus
// export const Example = () => { ... }