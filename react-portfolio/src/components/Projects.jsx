import './Projects.css'
import projectData from './projects.json';

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <h3>Here are some of the projects that I did in school or on my free time!</h3>
            <div className='project-cards'>
                {projectData.map(project =>
                    <div className="project-card" key={project.name}>
                        <h3>{project.name}</h3>
                        <img src={project.image} alt="Project's Website homepage"/>
                        <p>{project.description}</p>
                        <p>{project.stack}</p>
                    </div>
                )}
            </div>
        </div>
    )
}