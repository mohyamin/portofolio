import { useEffect, useState } from "react";
import {
    X,
    ChevronLeft,
    ChevronRight,
    UserRound,
    Smartphone,
    Wrench,
    Target,
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        if (!project) return;

        setActiveImage(0);

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

            if (event.key === "ArrowRight") {
                setActiveImage((current) =>
                    current === project.images.length - 1 ? 0 : current + 1
                );
            }

            if (event.key === "ArrowLeft") {
                setActiveImage((current) =>
                    current === 0 ? project.images.length - 1 : current - 1
                );
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    if (!project) return null;

    const nextImage = () => {
        setActiveImage((current) =>
            current === project.images.length - 1 ? 0 : current + 1
        );
    };

    const previousImage = () => {
        setActiveImage((current) =>
            current === 0 ? project.images.length - 1 : current - 1
        );
    };

    return (
        <div
            className="project-modal-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="project-modal">
                {/* Header */}
                <div className="project-modal-header">
                    <div className="project-modal-title">
                        <span className="project-modal-number">
                            {String(project.number).padStart(2, "0")}
                        </span>

                        <div>
                            <span className="project-modal-category">
                                {project.category}
                            </span>

                            <h2>{project.title}</h2>
                        </div>
                    </div>

                    <button
                        className="project-modal-close"
                        onClick={onClose}
                        aria-label="Close project"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Main Image */}
                <div className="project-gallery">
                    <img
                        src={project.images[activeImage].src}
                        alt={project.images[activeImage].alt}
                        className="project-gallery-main"
                    />

                    {project.images.length > 1 && (
                        <>
                            <button
                                className="gallery-arrow gallery-arrow-left"
                                onClick={previousImage}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                className="gallery-arrow gallery-arrow-right"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                <ChevronRight size={22} />
                            </button>
                        </>
                    )}

                    <div className="gallery-counter">
                        {activeImage + 1} / {project.images.length}
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="project-thumbnails">
                    {project.images.map((image, index) => (
                        <button
                            key={image.src}
                            className={`project-thumbnail ${activeImage === index ? "active" : ""
                                }`}
                            onClick={() => setActiveImage(index)}
                        >
                            <img src={image.src} alt={image.alt} />

                            <span>{image.label}</span>
                        </button>
                    ))}
                </div>

                {/* Description */}
                <div className="project-modal-content">
                    <div className="project-overview">
                        <span className="project-section-label">PROJECT OVERVIEW</span>

                        <p>{project.overview}</p>
                    </div>

                    {/* Information */}
                    <div className="project-info-grid">
                        <div className="project-info-item">
                            <div className="project-info-icon">
                                <UserRound size={18} />
                            </div>

                            <div>
                                <span>My Role</span>
                                <strong>{project.role}</strong>
                            </div>
                        </div>

                        <div className="project-info-item">
                            <div className="project-info-icon">
                                <Smartphone size={18} />
                            </div>

                            <div>
                                <span>Platform</span>
                                <strong>{project.platform}</strong>
                            </div>
                        </div>

                        <div className="project-info-item">
                            <div className="project-info-icon">
                                <Wrench size={18} />
                            </div>

                            <div>
                                <span>Tools</span>
                                <strong>{project.tools}</strong>
                            </div>
                        </div>

                        <div className="project-info-item">
                            <div className="project-info-icon">
                                <Target size={18} />
                            </div>

                            <div>
                                <span>Focus Area</span>
                                <strong>{project.focus}</strong>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="project-tags">
                        {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;