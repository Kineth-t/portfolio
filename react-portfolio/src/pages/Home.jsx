import About from '../components/About'
import Projects from '../components/Projects'
import Experiences from '../components/Experiences'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'

export default function HomePage() {
    return (
        <>  
            <header className="intro">
                <h1 className="main-headline">Hello, I'm Kenneth Tay.</h1>
                <div className="my-photo-container"><img className='my-photo' src='./src/img/me.jpeg'/></div>
                <h2 className="headline-text">
                    I'm{' '}
                    <span className="typewriter">
                        <Typewriter
                            words={[
                            'an aspiring developer.',
                            'a problem solver.',
                            'always curious.',
                            'always learning.'
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h2>
                <h3 className='headline-subtext'>Exploring the world of technology and software development at Singapore Management University(SMU).</h3>
            </header>
            <main>
                <About />
                <Projects />
                <Experiences />
            </main>
        </>
    )
}