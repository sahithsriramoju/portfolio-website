import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

const Hero = () => {
    const line1 = "Hi there,";
    const line2 = "I'm Sahithi Sriramoju";
    const line3 = "Full Stack .NET Developer";

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.05,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 relative overflow-hidden max-w-[1400px] mx-auto">
            {/* 2-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column: Intro + About Me */}
                <div className="flex flex-col gap-12">

                    {/* Intro Text Block */}
                    <div className="overflow-visible">
                        <motion.h1
                            className="text-[3.5vw] lg:text-[42px] leading-tight font-black uppercase tracking-tighter text-slate-900"
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                        >
                            <span className="block mb-4">
                                {line1.split("").map((char, index) => (
                                    <motion.span key={index} variants={letter}>
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="block mb-1">
                                {line2.split("").map((char, index) => (
                                    <motion.span key={index} variants={letter}>
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="block text-lg md:text-2xl font-medium tracking-normal text-slate-500 normal-case">
                                {line3.split("").map((char, index) => (
                                    <motion.span key={index} variants={letter}>
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>
                    </div>

                    {/* About Me Block (Below Intro) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="max-w-2xl"
                    >
                        <h3 className="text-lg font-bold uppercase mb-4">About Me</h3>
                        <p className="text-base md:text-lg font-body leading-relaxed text-slate-800 mb-6">
                            I’m a full-stack developer with a strong backend focus, building cloud-native applications using .NET, Azure, and React. I enjoy working on e-commerce and payment systems where reliability, security, and clean design really matter.
                        </p>
                        <div className="flex gap-6">
                            <a href="#projects" className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">
                                View Projects
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Image */}
                <div className="w-full flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="w-full max-w-md aspect-[4/5] bg-slate-200 relative overflow-hidden rounded-sm group"
                    >
                        <img
                            src={heroImage}
                            alt="Sahithi Sriramoju - Full Stack Developer"
                            className="w-full h-full object-cover transition-all duration-700"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
