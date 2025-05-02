import React, { useState, useEffect } from 'react';
import { allProjects } from '../datas/projectList';
import chevron from '../assets/images/chevron.png'
import '../styles/Portfolio-grid.css';

function PortfolioGrid() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTag, setSelectedTag] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => document.body.classList.remove('no-scroll');
    }, [selectedProject]);


    const openLightbox = (project) => {
        setSelectedProject(project);
    };

    const closeLightbox = () => {
        setSelectedProject(null);
    };

    const nextProject = () => {
        const currentIndex = allProjects.findIndex(proj => proj === selectedProject);
        const nextIndex = (currentIndex + 1) % allProjects.length;
        setSelectedProject(allProjects[nextIndex]);
    };

    const prevProject = () => {
        const currentIndex = allProjects.findIndex(proj => proj === selectedProject);
        const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
        setSelectedProject(allProjects[prevIndex]);
    };

    const filteredProjects = selectedTag
        ? allProjects.filter(project => project.tags.includes(selectedTag))
        : allProjects;

    return (
        <section id='portfolio'>
            <h2 className="fjalla-one">Mes projets</h2>
            <div className='filters'>
                {[
                    { label: "HTML, CSS, PHP, JavaScript", tag: "vanilla" },
                    { label: "WordPress", tag: "wordpress" },
                    { label: "React", tag: "react" },
                    { label: "UX Design", tag: "uxdesign" },
                    { label: "Tout afficher", tag: null }
                ].map(({ label, tag }) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`button-cartouche ${selectedTag === tag ? "selected" : ""}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="grid">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="card" onClick={() => openLightbox(project)}>
                        <div className='card-img'>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3 className='fjalla-one'>{project.title}</h3>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeLightbox}>✖</button>
                        <div className="project-img">
                            <img src={selectedProject.image} alt={selectedProject.title} />
                        </div>
                        <div className='project-info'>
                            <h3>{selectedProject.title}</h3>
                            <p>{selectedProject.context}</p>
                            <div className='project-description'>
                                {selectedProject.text.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            {selectedProject.tags.includes('uxdesign-link') ? (
                                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link cta-btn">
                                    Voir le prototype
                                </a>
                            ) : selectedProject.tags.includes('dev-link')
                                ? (
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link cta-btn">
                                        Voir le projet
                                    </a>
                                ) : selectedProject.tags.includes('no-link')
                                    ? (
                                        null
                                    )
                                    : null}
                        </div>
                    </div>
                    <div className='navigation' onClick={(e) => e.stopPropagation()}>
                        <button onClick={prevProject} className="prev-btn">
                            <img src={chevron} alt="Précedent" />
                        </button>
                        <button onClick={nextProject} className="next-btn">
                            <img src={chevron} alt="Suivant" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default PortfolioGrid;
