import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const handleLogoClick = () => {
        setIsMenuOpen(false);
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 text-slate-900 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#F9F8F4]/90 backdrop-blur-sm border-b border-slate-200' : 'py-8'}`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
                    <div
                        className="font-display font-bold text-3xl tracking-tighter cursor-pointer uppercase select-none"
                        onClick={handleLogoClick}
                    >
                        SAHITHI
                    </div>

                    <nav className="hidden md:flex gap-12">
                        {['Skills', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-sm font-bold uppercase tracking-widest z-50 relative"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {['Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
