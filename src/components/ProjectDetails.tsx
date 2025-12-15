import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = {
    "payment-reconciliation": {
        title: "Payment Reconciliation Service",
        role: "Backend-Focused",
        timeline: "2023",
        description: "A backend service that reconciles payment status between the e-commerce system and a payment provider when callbacks are delayed, missed, or duplicated.",
        challenge: "Payment providers sending callbacks late or multiple times caused payment status to get stuck in 'Pending'. Manual reconciliation was required by support teams due to inconsistent states.",
        solution: "Created a reconciliation job that periodically checks pending payments. Used Azure Queue Storage to enqueue tasks and Azure Functions to process them asynchronously using idempotent logic. Stored latest state in DB and cached in Redis.",
        tech: [".NET Core", "Azure Functions", "Azure Queue Storage", "Azure SQL", "Redis", "App Insights"],
        impact: [
            "Reduced incorrect payment states",
            "Lowered manual support effort",
            "Improved trust in payment reporting",
            "Cleaner operational workflows"
        ]
    },
    "products-page": {
        title: "Products Page Frontend App",
        role: "Frontend",
        timeline: "2023",
        description: "A simple e-commerce products listing page that fetches products from backend APIs and supports filtering and pagination.",
        challenge: "Handling large product lists efficiently while keeping UI responsive. Needed to avoid unnecessary backend calls and ensure clean integration between frontend and backend.",
        solution: "Built backend APIs with pagination and cached frequently accessed data in Redis. built a React + Redux UI with filters (category, price) and implemented loading/error states for better UX.",
        tech: ["React", "Redux Toolkit", ".NET Core Web API", "Redis", "Azure App Service"],
        impact: [
            "Faster page load times",
            "Better browsing experience for users",
            "Reduced backend load",
            "Clean separation of UI and backend logic"
        ]
    },
    "secure-payment": {
        title: "Secure Payment Service Using Okta JWT",
        role: "Security & Auth",
        timeline: "2023",
        description: "A backend payment API secured using Okta-generated JWTs for service-to-service communication within an e-commerce platform.",
        challenge: "Securing internal payment APIs to avoid repeated calls to identity provider while maintaining performance under load and validating tokens efficiently.",
        solution: "Implemented Okta JWT-based authentication for payment APIs. Validated tokens at API layer and cached token metadata in Redis. Exposed APIs via Azure APIM for rate limiting.",
        tech: [".NET Core", "Okta JWT", "Redis", "Azure APIM", "App Insights"],
        impact: [
            "Improved security of payment workflows",
            "Reduced authentication latency",
            "Better isolation between internal services",
            "Scalable and maintainable auth model"
        ]
    }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id as keyof typeof projects];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/#projects" className="inline-block mb-12 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-accent transition-colors">
                    ← Back
                </Link>

                <h1 className="text-4xl md:text-6xl font-black uppercase text-slate-900 mb-6 leading-none">
                    {project.title}
                </h1>

                <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-slate-500 mb-12 border-b border-slate-200 pb-12">
                    <span className="flex items-center gap-2">🔹 {project.role}</span>
                    <span>{project.timeline}</span>
                </div>

                <div className="mb-12">
                    <h3 className="font-bold uppercase text-lg mb-4 flex items-center gap-2">
                        🔹 What it is
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-4 flex items-center gap-2">
                            🔥 Key Challenges
                        </h3>
                        <p className="text-lg text-slate-700 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-4 flex items-center gap-2">
                            💡 Solution
                        </h3>
                        <p className="text-lg text-slate-700 leading-relaxed">{project.solution}</p>
                    </div>
                </div>

                <hr className="border-slate-200 mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h3 className="font-bold uppercase text-lg mb-6 flex items-center gap-2">
                            📈 Business Impact
                        </h3>
                        <ul className="space-y-4">
                            {project.impact.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-accent mt-2.5 rounded-full flex-shrink-0"></span>
                                    <span className="text-slate-800 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-6 flex items-center gap-2">
                            🛠 Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;
