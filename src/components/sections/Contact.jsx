import "./Contact.css";

import {
    Mail,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                {/* ================= HEADER ================= */}
                <div className="contact-header">
                    <span className="contact-eyebrow">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Let's build something{" "}
                        <span>meaningful.</span>
                    </h2>

                    <p>
                        Have a project, idea, or opportunity in mind?
                        Feel free to reach out. I'm always open to
                        discussing new ideas and collaborations.
                    </p>
                </div>


                {/* ================= CONTACT CARD ================= */}
                <div className="contact-content">

                    {/* ================= LEFT ================= */}
                    <div className="contact-intro">

                        <span className="contact-number">
                            01
                        </span>

                        <h3>
                            Let's talk.
                        </h3>

                        <p>
                            Whether you need help building a web application,
                            improving a user experience, or developing a
                            digital product, I'd be happy to hear about it.
                        </p>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohyamin18@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-email"
                        >
                            <span className="contact-email-icon">
                                <Mail
                                    size={17}
                                    strokeWidth={1.8}
                                />
                            </span>

                            <span className="contact-email-text">
                                mohyamin18@gmail.com
                            </span>

                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.8}
                                className="contact-arrow"
                            />
                        </a>

                    </div>


                    {/* ================= RIGHT ================= */}
                    <div className="contact-info">

                        {/* LOCATION */}
                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                <MapPin
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div className="contact-info-text">

                                <span className="contact-info-label">
                                    LOCATION
                                </span>

                                <span className="contact-info-value">
                                    Jakarta, Indonesia
                                </span>

                            </div>

                        </div>


                        {/* EMAIL */}
                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                <Mail
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div className="contact-info-text">

                                <span className="contact-info-label">
                                    EMAIL
                                </span>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mohyamin18@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-info-value contact-info-email"
                                >
                                    mohyamin18@gmail.com
                                </a>

                            </div>

                        </div>


                        {/* SOCIAL */}
                        <div className="contact-socials">

                            {/* GITHUB */}
                            <a
                                href="https://github.com/USERNAME_KAMU"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="contact-social"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.35-3.87-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                </svg>
                            </a>


                            {/* LINKEDIN */}
                            <a
                                href="https://www.linkedin.com/in/USERNAME_KAMU/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="contact-social"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.54v4.92h-4v-11Z" />
                                </svg>
                            </a>


                            {/* EMAIL */}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohyamin18@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email"
                                className="contact-social"
                            >
                                <Mail
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </a>

                        </div>

                    </div>

                </div>


                {/* ================= FOOTER ================= */}
                <div className="contact-bottom">

                    <div className="contact-bottom-line"></div>

                    <div className="contact-footer">

                        <span>
                            © {new Date().getFullYear()} Moh Yamin
                        </span>

                        <span>
                            Designed & Developed by Yamin
                        </span>

                    </div>

                </div>

            </div>
        </section>
    );
}