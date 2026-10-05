import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        number: 1,
        category: "MOBILE BANKING",
        title: "STARBOII Mobile",

        previewImage: "/projects/starboii/STARBOII.png",

        description:
            "A modern mobile banking experience focused on usability, accessibility, and a cleaner digital banking journey.",

        tags: ["Analis System", "UI/UX", "Mobile", "Usability"],

        overview:
            "STARBOII Mobile is a mobile banking application designed to provide a simple, secure, and user-friendly banking experience. The project focuses on improving usability, accessibility, and creating a cleaner digital banking journey for customers.",

        role: "UI/UX Design, Application Testing",
        platform: "iOS, Android",
        tools: "Figma, Mobile Design",
        focus: "Usability, User Experience, Interface Design",

        images: [
            {
                src: "/projects/starboii/1.png",
                alt: "STARBOII Mobile Dashboard",
                label: "Dashboard",
            },
            {
                src: "/projects/starboii/2.png",
                alt: "STARBOII Mobile Transfer",
                label: "Transfer",
            },
            {
                src: "/projects/starboii/qris.png",
                alt: "STARBOII Mobile QRIS",
                label: "QRIS",
            },
            {
                src: "/projects/starboii/pembayaran.png",
                alt: "STARBOII Mobile Pembayaran",
                label: "Pembayaran",
            },
            {
                src: "/projects/starboii/profile.png",
                alt: "STARBOII Mobile Profile",
                label: "Profile",
            },
        ],
    },

    {
        number: 2,
        category: "RISK MANAGEMENT",
        title: "RiskApps",

        previewImage: "/projects/riskapps/3.png",

        description:
            "A web-based risk management platform designed to support risk assessment, RCSA, workflow approval, and reporting.",

        tags: ["Laravel", "PHP", "MySQL"],

        overview:
            "RiskApps is a web-based risk management platform designed to support organizational risk management processes, including risk assessment, RCSA, workflow approval, and reporting.",

        role: "Web Development & UI/UX",
        platform: "Web Application",
        tools: "Laravel, PHP, MySQL",
        focus: "Risk Management, Workflow, Usability",

        images: [
            {
                src: "/projects/riskapps/3.png",
                alt: "RiskApps Dashboard",
                label: "Login Pages",
            },

            {
                src: "/projects/riskapps/4.png",
                alt: "RiskApps Dashboard",
                label: "Dashboard",
            },

            {
                src: "/projects/riskapps/5.png",
                alt: "RiskApps Dashboard",
                label: "Risk Register list",
            },

            {
                src: "/projects/riskapps/6.png",
                alt: "RiskApps Dashboard",
                label: "Risk Register Form",
            },

            {
                src: "/projects/riskapps/7.png",
                alt: "RiskApps Dashboard",
                label: "Workflow progress",
            },
        ],
    },

    {
        number: 3,
        category: "Sop Online",
        title: "Document SOP",

        previewImage: "/projects/dms/dashboard.png",

        description:
            "A document management platform for organizing, previewing, and securely accessing corporate documents.",

        tags: ["CodeIgniter", "PHP", "MySQL"],

        overview:
            "A corporate document management system designed to organize documents, provide secure access, support PDF preview, and manage document attachments.",

        role: "Web Development",
        platform: "Web Application",
        tools: "CodeIgniter, PHP, MySQL",
        focus: "Document Management, Security, Usability",

        images: [
            {
                src: "/projects/dms/dashboard.png",
                alt: "Document Management Dashboard",
                label: "Dashboard",
            },
        ],
    },

    {
        number: 4,
        category: "WEBSITE COMPANY PROFILE",
        title: "Website Bank of India Indonesia",

        previewImage: "/projects/website/8.png",

        description:
            "A website to provide banking-related information and publish details of all bank activities in accordance with regulations established by the BI and OJK.",

        tags: ["Laravel", "React", "UI/UX Design", "Analys System", "CMS"],

        overview:
            "A digital career portal designed to simplify job discovery and the candidate application process while providing an easy-to-manage recruitment experience.",

        role: "Web Development & UI/UX",
        platform: "Web Application",
        tools: "Firebase, JavaScript",
        focus: "Recruitment, User Experience, Accessibility",

        images: [
            {
                src: "/projects/website/8.png",
                alt: "Home Page",
                label: "Home Page",
            },
            {
                src: "/projects/website/9.png",
                alt: "Chatbot",
                label: "Chatbot",
            },
            {
                src: "/projects/website/10.png",
                alt: "Footer",
                label: "Footer",
            },
            {
                src: "/projects/website/11.png",
                alt: "Contact Us",
                label: "Contact Us",
            },
        ],
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section id="projects" className="projects-section">
                <div className="projects-container">

                    {/* Header */}
                    <div className="projects-header">
                        <div>
                            <span className="section-eyebrow">
                                SELECTED PROJECTS
                            </span>

                            <h2>
                                Things I've <span>worked on.</span>
                            </h2>

                            <p>
                                A selection of digital products and applications I've
                                worked on, combining development, design, and user
                                experience.
                            </p>
                        </div>

                        <div className="projects-count">
                            <span>04</span> Projects
                        </div>
                    </div>

                    {/* Featured Project */}
                    <article className="featured-project">
                        <div className="featured-project-image">
                            <img
                                src={projects[0].previewImage}
                                alt={projects[0].title}
                            />

                            <button
                                className="image-view-button"
                                onClick={() => setSelectedProject(projects[0])}
                                aria-label="View project gallery"
                            >
                                <ArrowUpRight size={20} />
                            </button>
                        </div>

                        <div className="featured-project-content">
                            <div className="project-meta">
                                <span>01</span>
                                <i></i>
                                <small>{projects[0].category}</small>
                            </div>

                            <h3>{projects[0].title}</h3>

                            <p>{projects[0].description}</p>

                            <div className="project-card-tags">
                                {projects[0].tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                            <button
                                className="view-project-button"
                                onClick={() => setSelectedProject(projects[0])}
                            >
                                View Project
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </article>

                    {/* Other Projects */}
                    <div className="project-grid">
                        {projects.slice(1).map((project) => (
                            <article className="project-card" key={project.title}>

                                <div className="project-card-image">
                                    <img
                                        src={project.previewImage}
                                        alt={project.title}
                                    />

                                    <button
                                        className="project-card-arrow"
                                        onClick={() => setSelectedProject(project)}
                                        aria-label={`View ${project.title}`}
                                    >
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>

                                <div className="project-card-body">

                                    <div className="project-meta">
                                        <span>
                                            {String(project.number).padStart(2, "0")}
                                        </span>

                                        <i></i>

                                        <small>{project.category}</small>
                                    </div>

                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>

                                    <div className="project-card-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
};

export default Projects;