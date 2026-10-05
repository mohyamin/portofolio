import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
]

function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <header className="fixed left-0 right-0 top-0 z-50">

            <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">

                <nav className="flex items-center justify-between rounded-full border border-slate-200/70 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-xl">

                    {/* LOGO */}

                    <a
                        href="#home"
                        className="text-xl font-bold tracking-tight text-slate-900"
                    >
                        YAMIN
                        <span className="text-blue-600">
                            .
                        </span>
                    </a>


                    {/* DESKTOP MENU */}

                    <div className="hidden items-center gap-8 md:flex">

                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
                            >
                                {item.name}
                            </a>
                        ))}

                    </div>


                    {/* DESKTOP CTA */}

                    <a
                        href="#contact"
                        className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/25 md:block"
                    >
                        Let's Talk
                    </a>

                    {/* MOBILE BUTTON */}

                    <button
                        type="button"
                        className="rounded-full p-2 text-slate-700 md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation"
                    >
                        {open
                            ? <X size={22} />
                            : <Menu size={22} />
                        }
                    </button>

                </nav>


                {/* MOBILE MENU */}

                {open && (
                    <div className="mt-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl md:hidden">

                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                            >
                                {item.name}
                            </a>
                        ))}

                    </div>
                )}

            </div>

        </header>
    )
}

export default Navbar