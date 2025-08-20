import './Projects.css'
import projectData from './projects.json';

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <h3>Here are some of the projects that I did in school or on my free time</h3>
            <div className='project-cards'>
                {projectData.map((project, index) =>
                    <div className="project-card" key={project.name} style={{'--position': index, zIndex: 10 - index}}>
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p><b>Description:</b> {project.description}</p>
                            <p><b>Stack:</b> {project.stack}</p>
                        </div>
                        <img src={project.image} alt="Project's Website homepage" style={{'--position': index, zIndex: 10 - index}}/>
                    </div>
                )}
            </div>
        </div>
    )
}