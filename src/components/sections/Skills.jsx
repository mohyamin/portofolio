import {
    Code2,
    Palette,
    Smartphone,
    Database,
    Wrench,
    Layers3,
    GitBranch,
} from "lucide-react";

import "./Skills.css";
/* =========================================================
   SKILL DATA
========================================================= */

const skillCategories = [
    {
        title: "Web Development",
        description:
            "Building modern and responsive web applications with clean and maintainable code.",
        icon: Code2,
        skills: [
            { name: "Analys System", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "Node.js", level: "Intermediate" },
            { name: "React", level: "Intermediate" },
            { name: "Codeigniter 4", level: "Advanced" },
            { name: "Vue", level: "Intermediate" },
            { name: "Laravel", level: "Advanced" },
            { name: "QA Tester Automation", level: "Advanced" },
        ],
    },

    {
        title: "UI/UX Design",
        description:
            "Designing interfaces with a strong focus on usability, consistency, and user experience.",
        icon: Palette,
        skills: [
            { name: "Figma", level: "Advanced" },
            { name: "UI Design", level: "Advanced" },
            { name: "UX Research", level: "Intermediate" },
            { name: "Prototyping", level: "Advanced" },
        ],
    },

    {
        title: "Mobile Experience",
        description:
            "Creating and improving digital experiences for modern mobile applications.",
        icon: Smartphone,
        skills: [
            { name: "Mobile Banking UI/UX", level: "Advanced" },
            { name: "Android", level: "Intermediate" },
            { name: "iOS", level: "Intermediate" },
        ],
    },

    {
        title: "Database & API",
        description:
            "Working with data, APIs, and application integration.",
        icon: Database,
        skills: [
            { name: "MySQL", level: "Advanced" },
            { name: "REST API", level: "Intermediate" },
            { name: "Firebase", level: "Intermediate" },
            { name: "SQL", level: "Advanced" },
            { name: "PostgreSQL", level: "Advanced" },
        ],
    },

    {
        title: "Tools & Platform",
        description:
            "Tools and platforms I use throughout the development workflow.",
        icon: Wrench,
        skills: [
            { name: "Git & GitHub", level: "Advanced" },
            { name: "VS Code", level: "Advanced" },
            { name: "Google Play Console", level: "Intermediate" },
            { name: "App Store Connect", level: "Intermediate" },
            { name: "MySQL 8.0 Command Line Client", level: "Advanced" },
        ],
    },
];

/* =========================================================
   LEVEL WIDTH
========================================================= */

const levelWidth = {
    Beginner: "w-1/3",
    Intermediate: "w-2/3",
    Advanced: "w-full",
};

/* =========================================================
   SKILL ITEM
========================================================= */

function SkillItem({ skill }) {
    const widthClass = levelWidth[skill.level] || "w-1/3";

    return (
        <div className="skill-item group">
            <div className="skill-item-top">
                <span className="skill-name">
                    {skill.name}
                </span>

                <span className="skill-level">
                    {skill.level}
                </span>
            </div>

            <div className="skill-bar">
                <div
                    className={`skill-bar-progress ${widthClass}`}
                />
            </div>
        </div>
    );
}

/* =========================================================
   SKILL GROUP
========================================================= */

function SkillGroup({ group }) {
    const Icon = group.icon;

    return (
        <article className="skill-group">

            <div className="skill-group-header">

                <div className="skill-group-icon">
                    <Icon
                        size={21}
                        strokeWidth={1.8}
                    />
                </div>

                <div>
                    <h3>
                        {group.title}
                    </h3>

                    <p>
                        {group.description}
                    </p>
                </div>

            </div>

            <div className="skill-list">
                {group.skills.map((skill) => (
                    <SkillItem
                        key={skill.name}
                        skill={skill}
                    />
                ))}
            </div>

        </article>
    );
}

/* =========================================================
   MAIN SKILLS COMPONENT
========================================================= */

export default function Skills() {
    return (
        <section
            id="skills"
            className="skills-section"
        >

            <div className="skills-container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="skills-header">

                    <div>

                        <span className="skills-eyebrow">
                            SKILLS & TECHNOLOGIES
                        </span>

                        <h2>
                            Technology I{" "}
                            <span>
                                work with.
                            </span>
                        </h2>

                        <p>
                            A combination of development,
                            design, and digital tools I use
                            to build practical and
                            user-focused experiences.
                        </p>

                    </div>

                    <div className="skills-header-icon">
                        <Layers3
                            size={28}
                            strokeWidth={1.5}
                        />
                    </div>

                </div>

                {/* =================================================
                    FEATURED DEVELOPMENT
                ================================================= */}

                <div className="skills-featured">

                    <div className="skills-featured-heading">

                        <div className="skills-featured-number">
                            01
                        </div>

                        <div>

                            <h3>
                                Core Development
                            </h3>

                            <p>
                                My main development stack
                                for building modern web
                                applications.
                            </p>

                        </div>

                    </div>

                    <div className="skills-featured-grid">

                        {skillCategories[0].skills.map(
                            (skill) => (
                                <SkillItem
                                    key={skill.name}
                                    skill={skill}
                                />
                            )
                        )}

                    </div>

                </div>

                {/* =================================================
                    OTHER SKILL GROUPS
                ================================================= */}

                <div className="skills-grid">

                    {skillCategories
                        .slice(1)
                        .map((group) => (
                            <SkillGroup
                                key={group.title}
                                group={group}
                            />
                        ))}

                </div>

                {/* =================================================
                    WORKFLOW
                ================================================= */}

                <div className="skills-workflow">

                    <div className="workflow-title">

                        <GitBranch
                            size={19}
                            strokeWidth={1.8}
                        />

                        <span>
                            MY WORKFLOW
                        </span>

                    </div>

                    <div className="workflow-items">

                        {/* STEP 01 */}

                        <div className="workflow-item">

                            <span>
                                01
                            </span>

                            <strong>
                                Understand
                            </strong>

                            <p>
                                Identify the problem
                                and user needs.
                            </p>

                        </div>

                        <div className="workflow-line" />

                        {/* STEP 02 */}

                        <div className="workflow-item">

                            <span>
                                02
                            </span>

                            <strong>
                                Design
                            </strong>

                            <p>
                                Create the interface
                                and user experience.
                            </p>

                        </div>

                        <div className="workflow-line" />

                        {/* STEP 03 */}

                        <div className="workflow-item">

                            <span>
                                03
                            </span>

                            <strong>
                                Develop
                            </strong>

                            <p>
                                Turn the concept into
                                a functional product.
                            </p>

                        </div>

                        <div className="workflow-line" />

                        {/* STEP 04 */}

                        <div className="workflow-item">

                            <span>
                                04
                            </span>

                            <strong>
                                Improve
                            </strong>

                            <p>
                                Test, refine, and
                                continuously improve.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}