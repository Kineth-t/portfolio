import './Experiences.css'
import experienceData from './experiences.json'

export default function Experiences() {
    return (
        <div className="experience-tab">
            <div className="experience-header">
                <h1>Experience</h1>
                <img src='./src/assets/experience.png'/>
            </div>
            <div className="experience-container">
                {experienceData.map(exp =>
                    <div className='experience' key={exp.description}>
                        <h2>{exp.role}</h2>
                        <h3>{exp.company}</h3>
                        <p>{exp.description}</p>
                    </div>
                )}
            </div>
            <div className="background">
                <img src='./src/img/experience-background.jpg' alt="Testing" />
            </div>
        </div>
    )
}