import {
    UserRound,
    Code2,
    Palette,
    Smartphone,
    Database,
    Layers3,
} from "lucide-react";

const skills = [
    {
        icon: Code2,
        title: "Web Development",
        description:
            "Building modern and responsive web applications with clean and maintainable code.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Designing interfaces with a strong focus on usability, consistency, and user experience.",
    },
    {
        icon: Smartphone,
        title: "Mobile Experience",
        description:
            "Creating and improving digital experiences for modern mobile applications.",
    },
    {
        icon: Database,
        title: "Backend & Database",
        description:
            "Working with backend systems, APIs, databases, and application architecture.",
    },
    {
        icon: Layers3,
        title: "System Development",
        description:
            "Developing business applications that solve real operational and organizational needs.",
    },
    {
        icon: UserRound,
        title: "User Centered",
        description:
            "Combining technology and user needs to create practical digital solutions.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white px-6 py-28 md:px-12 lg:px-20"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        About Me
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        Turning ideas into{" "}
                        <span className="text-blue-600">digital experiences.</span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-500">
                        I’m a web developer and UI/UX enthusiast who enjoys creating
                        digital products that are simple, useful, and visually refined.
                    </p>
                </div>

                {/* Main About */}
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left */}
                    <div className="relative">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
                            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                <UserRound size={26} />
                            </div>

                            <h3 className="text-2xl font-semibold text-slate-900">
                                A little about me
                            </h3>

                            <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-500">
                                <p>
                                    I have an interest in web development, UI/UX design, and
                                    building digital solutions that can support real business
                                    needs.
                                </p>

                                <p>
                                    My approach combines technology, visual design, and
                                    understanding of users to create interfaces that are not only
                                    attractive but also practical to use.
                                </p>

                                <p>
                                    I enjoy exploring new technologies and continuously improving
                                    the way digital products are designed and developed.
                                </p>
                            </div>

                            {/* Small information */}
                            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8">
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">10+</p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Projects
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-slate-900">5+</p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Technologies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {skills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={skill.title}
                                        className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                                    >
                                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                            <Icon size={21} />
                                        </div>

                                        <h3 className="text-base font-semibold text-slate-900">
                                            {skill.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-500">
                                            {skill.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}