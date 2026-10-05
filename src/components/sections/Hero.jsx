import HeroScene from "../three/HeroScene";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-slate-50"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

                <div className="absolute right-[-200px] top-[10%] h-[600px] w-[600px] rounded-full bg-slate-200/50 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div>

                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            Hello, I'm
                        </p>

                        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                            Moh Yamin
                            <span className="text-blue-600">.</span>
                        </h1>

                        <h2 className="mt-5 text-2xl font-semibold text-slate-700 sm:text-3xl">
                            Web Developer
                            <span className="text-slate-400">
                                {" "} & UI/UX Designer
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                            I build modern digital experiences that
                            combine clean interfaces, thoughtful
                            user experience, and reliable technology.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            <a
                                href="#projects"
                                className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/30"
                            >
                                View My Work
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
                            >
                                Contact Me
                            </a>

                        </div>

                        {/* SMALL INFO */}
                        <div className="mt-10 flex items-center gap-8">

                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    5+
                                </p>

                                <p className="text-sm text-slate-500">
                                    Projects
                                </p>
                            </div>

                            <div className="h-10 w-px bg-slate-200" />

                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    7+
                                </p>

                                <p className="text-sm text-slate-500">
                                    Technologies
                                </p>
                            </div>

                            {/* <div className="h-10 w-px bg-slate-200" />

                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    5
                                </p>

                                <p className="text-sm text-slate-500">
                                    Curiosity
                                </p>
                            </div> */}

                        </div>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex h-[500px] items-center justify-center">

                        {/* 3D BACKGROUND */}
                        <div className="absolute inset-0 z-0">
                            <HeroScene />
                        </div>

                        {/* Soft blue glow */}
                        <div
                            className="
        absolute
        h-[390px]
        w-[390px]
        rounded-full
        bg-blue-50/70
        blur-[2px]
    "
                        />

                        {/* Outer ring */}
                        <div
                            className="
                        absolute
                        h-[430px]
                        w-[430px]
                        rounded-full
                        border
                        border-blue-100/80
                        "
                        />

                        {/* Inner ring */}
                        <div
                            className="
        absolute
        h-[350px]
        w-[350px]
        rounded-full
        border
        border-blue-100/50
    "
                        />

                        {/* PROFILE */}
                        <div className="relative z-10 flex items-end justify-center">
                            <img
                                src="/images/profile.png"
                                alt="Moh Yamin"
                                className="
    h-auto
    w-[420px]
    max-w-none
    object-contain
    transition-transform
    duration-500
    ease-out
    hover:scale-[1.02]
"
                            />
                        </div>

                    </div>

                </div>

            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition hover:text-blue-600"
                aria-label="Scroll to About section"
            >
                <div className="flex flex-col items-center gap-2">

                    <span className="text-xs uppercase tracking-[0.2em]">
                        Scroll
                    </span>

                    <span className="animate-bounce text-lg">
                        ↓
                    </span>

                </div>
            </a>

        </section>
    )
}

export default Hero