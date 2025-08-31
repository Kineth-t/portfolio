import './Contact.css';

export default function ContactPage() {
    return (
        <div className="contacts-container">
            <h1>Get in Touch</h1>
            <h3>I’m always open to new opportunities, collaborations, learning, or even just a casual chat. Don't hesitate to reach out!</h3>
            <ul className="links-container">
                <div className="link">
                    <img src="./src/assets/linkedin.png" alt="Linkedin logo" />
                    <a href='https://www.linkedin.com/in/tay-kenneth' target='_blank'>LinkedIn</a>
                </div>
                <div className="link">
                    <img src="./src/assets/gmail.png" alt="Gmail logo" />
                    <a href='mailto:kenneth21tay@gmail.com' target='_blank'>Gmail</a>
                </div>
                <div className="link">
                    <img src="./src/assets/github.png" alt="Github logo" />
                    <a href='https://github.com/Kineth-t' target='_blank'>Github</a>
                </div>
            </ul>
        </div>
    )
}