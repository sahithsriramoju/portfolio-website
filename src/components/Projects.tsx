import { Link } from 'react-router-dom';


const projects = [
    {
        id: "payment-reconciliation",
        title: "Payment Reconciliation Service",
        category: "Backend-Focused",
        description: "A backend service that reconciles payment status between the e-commerce system and a payment provider.",
    },
    {
        id: "products-page",
        title: "Products Page Frontend App",
        category: "Full-Stack Signal",
        description: "A simple e-commerce products listing page that fetches products from backend APIs and supports filtering.",
    },
    {
        id: "secure-payment",
        title: "Secure Payment Service",
        category: "Security & Auth",
        description: "A backend payment API secured using Okta-generated JWTs for service-to-service communication.",
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="font-bold uppercase tracking-widest text-4xl text-black mb-16 tracking-tighter">
                    Featured Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={index}
                            className="group block bg-[#F9F8F4] border-t-2 border-slate-900 pt-8 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
                                {project.category}
                            </div>
                            <h3 className="text-3xl font-black uppercase text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 mb-8 leading-relaxed max-w-sm">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900">
                                View Case Study
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
