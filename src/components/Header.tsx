import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation then scroll
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 text-slate-900 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#F9F8F4]/90 backdrop-blur-sm border-b border-slate-200' : 'py-8'}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div
                    className="font-display font-bold text-3xl tracking-tighter cursor-pointer uppercase"
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

                <button className="md:hidden text-sm font-bold uppercase tracking-widest">
                    Menu
                </button>
            </div>
        </header>
    );
};

export default Header;
