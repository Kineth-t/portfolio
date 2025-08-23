import './Projects.css'
import projectData from './projects.json';

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="project-head">
                <h1>Projects</h1>
                <img src="./src/assets/project-icon.png" alt="project icon" />
            </div>
            <h3>Here are some of the projects that I did in school or on my free time.</h3>
            <div className="caution"><strong>Note:</strong> Some of the projects in this portfolio are hosted on school or personal servers, and due to limited resources, certain projects may not be available for viewing</div>
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