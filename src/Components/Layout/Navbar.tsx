import { useState, useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') { 
            if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                return true;
            }
        }
        return false;
    });

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Project", href: "/Project" },
        { name: "Contact", href: "/Contact" },
    ];

    const defaultNavStyles = "hover:bg-[#9EC6F3] dark:hover:bg-sky-500/20 py-3 px-3 rounded-full";
    const activeNavStyles = "font-semibold bg-[#9EC6F3] dark:bg-sky-500/20 py-3 px-3 rounded-full";

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [isDark]);

    useEffect(() => {
        if (isMenuOpen) {
            document.documentElement.classList.add('overflow-hidden');
        } else {
            document.documentElement.classList.remove('overflow-hidden');
        }
        return () => {
            document.documentElement.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    const handleThemeToggle = () => {
        setIsDark(!isDark);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full h-20 z-50 ${isMenuOpen ? '' : 'backdrop-blur-xs'}`}>
            <div className="max-w-5xl mx-auto">
                <div className="navbar relative py-0 sm:py-6 flex items-center justify-between">
                    <div className="logo relative z-50 text-3xl font-bold p-1 md:bg-transparent md:dark:text-white px-5">
                        <NavLink to="/" className="hover:text-[#9EC6F3] dark:hover:text-[#113F67] transition-colors duration-300 italic">Bguss</NavLink>
                    </div>

                    <div className="flex flex-items-center gap-x-5">
                        <ul className='hidden md:flex items-center gap-5 px-5'>
                            {menuItems.map((item) => (
                                <li key={item.name} className="text-lg font-semibold italic">
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `dark:text-white ${isActive ? activeNavStyles : defaultNavStyles}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-x-2">
                            <label className="swap swap-rotate relative z-50 ">
                                <input
                                    type="checkbox"
                                    className="theme-controller"
                                    onChange={handleThemeToggle}
                                    checked={isDark} 
                                />
                                {/* sun icon */}
                                <svg className="swap-off h-11 w-11 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                                {/* moon icon */}
                                <svg className="swap-on h-11 w-11 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                            <div className="md:hidden relative z-50">
                                <AnimatedHamburgerButton
                                    active={isMenuOpen}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                />
                            </div>
                        </div>
                    </div>
                    <ul className={`
                        absolute top-0 left-0 right-0 z-40 min-h-screen flex flex-col items-center pt-55 gap-y-8
                        bg-[#F5FAE1]/95 text-black backdrop-blur-xl
                        dark:bg-zinc-900/95 dark:text-white
                         md:hidden
                        transition-opacity duration-300
                        ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    >
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `block p-4 text-3xl font-semibold ${isActive ? 'text-[#1B56FD] dark:text-[#77BEF0]' : ''}`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
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
                    className="absolute h-1 w-10 bg-black dark:bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-1 w-10  bg-black dark:bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-1 w-5  bg-black dark:bg-white"
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