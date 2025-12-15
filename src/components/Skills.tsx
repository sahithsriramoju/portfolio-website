import { SiDotnet, SiRedis, SiNewrelic, SiDocker, SiGithubcopilot, SiReact, SiRedux, SiHtml5, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { MdApi } from 'react-icons/md';
import { SiSharp } from 'react-icons/si';
// Fallbacks: C# -> VscCode, SQL/Azure -> VscAzure/SiMicrosoft
// Note: Some specific Azure icons might need generic Azure or alternatives if exact matches aren't in 'si' or 'vsc'
// Using SiMicrosoftazure for general Azure items where specifics are missing or combining.
// APIM -> Azure API Management (using best approximation)
// EF Core -> Entity Framework (usually represented by .NET or generic DB icon, will use SiDotnet for now or code icon)

const skills = [
    { name: ".NET", icon: SiDotnet },
    { name: "C#", icon: SiSharp },
    { name: "Azure Functions", icon: VscAzure },
    { name: "Azure APIM", icon: VscAzure }, // General Azure for APIM if specific missing
    { name: "Azure Redis", icon: SiRedis },
    { name: "Azure SQL", icon: VscAzure },
    { name: "Azure Key Vault", icon: VscAzure },
    { name: "EF Core", icon: SiDotnet }, // EF Core often associated with .NET logo
    { name: "App Insights", icon: VscAzure }, // Part of Azure Monitor
    { name: "Queue Storage", icon: VscAzure }, // Storage generic
    { name: "New Relic", icon: SiNewrelic },
    { name: "Docker", icon: SiDocker },
    { name: "Azure DevOps", icon: VscAzure },
    { name: "GitHub Copilot", icon: SiGithubcopilot },
    { name: "React", icon: SiReact },
    { name: "Redux", icon: SiRedux },
    { name: "HTML", icon: SiHtml5 },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "API", icon: MdApi },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center gap-3 mb-12">
                    <h2 className="font-bold uppercase tracking-widest text-4xl text-black">Skills</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 border border-slate-200 bg-white hover:border-slate-900 transition-colors duration-300"
                        >
                            <skill.icon className="text-4xl text-slate-400 group-hover:text-accent transition-colors duration-300 mb-4" />
                            <span className="font-display font-bold uppercase tracking-wider text-sm text-slate-900 text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
