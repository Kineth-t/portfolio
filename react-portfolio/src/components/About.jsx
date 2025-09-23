import './About.css'

export default function About() {
    return (
        <div className="info-container-all">
            <div className="info-container">
                <div className="about">
                    <div className="about-header">
                        <h2>About me</h2><img src='./src/assets/about.png' />
                    </div>
                    <p>I’m currently pursuing a degree in Computer Science at SMU, where I’ve explored everything from web development to machine learning. <br /> I also loved building things and seeing it comes into life.</p>
                    <p>My interests span a range of areas including full-stack development, software engineering, and machine learning. <br /> I love solving problems with code, exploring new technologies, and continuously learning how to write better software.</p>
                </div>
                <div className="skills">
                    <div className="skills-header">
                        <h2>Skills that I have or currently learning</h2><img src='./src/assets/skills.png' />
                    </div>
                    <h3>Langauges</h3>
                    <p>C &bull; Java &bull; Javascript &bull; Python &bull; SQL </p>
                    <br />
                    <h3>Frameworks/Tools</h3>
                    <p>Docker &bull; Express &bull; FastAPI &bull; React &bull; SpringBoot &bull; TensorFlow </p>
                </div>
            </div>
        </div>
    )
}