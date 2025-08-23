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
                        <div className="experience-row">
                            <img src="./src/assets/role.png" alt="icon" />
                            <h2>{exp.role}</h2>
                        </div>
                        <div className="experience-row">
                            <img src="./src/assets/company.png" alt="icon" />
                            <h3>{exp.company}</h3>
                        </div>
                        <div className="experience-row">
                            <img src="./src/assets/date.png" alt="icon" />
                            <p>{exp.date}</p>
                        </div>
                        <div className="experience-row">
                            <img src="./src/assets/detail.png" alt="icon" />
                            <p>{exp.description}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="background">
                <img className='background-image' src='./src/img/experience-background.jpg' alt="Just a background image" />
            </div>
        </div>
    )
}