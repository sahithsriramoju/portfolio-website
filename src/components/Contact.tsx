
const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-slate-900 text-slate-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

                <h2 className="text-5xl font-black uppercase mb-8 tracking-tighter leading-none">
                    Contact
                </h2>

                <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                    Please use these handles to connect with me:
                </p>

                <div className="flex flex-row items-center justify-center gap-12 md:gap-16">
                    <a href="https://www.linkedin.com/in/sahithi-sriramoju/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://github.com/sahithsriramoju" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
