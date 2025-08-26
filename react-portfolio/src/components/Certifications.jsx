import certifications from './certifications.json'
import './Certifications.css'

export default function Certifications() {
    return <div className="certifications-container">
        <div className="cert-header">
            <h1>Certifications</h1>
            <img src="./src/assets/certs.png" />
        </div>
            <div className="cert-cards-container">
                {certifications.map(cert =>
                    <div className="cert-card" key={cert.url}>
                        <h3>{cert.name}</h3>
                        <div className="organisation">
                            <img src={cert.img} alt="Organisation logo" />
                            <p>{cert.organisation}</p>
                        </div>
                        <span>Issued on: {cert.date}</span>
                        {cert.expiry ? <span> - {cert.expiry}</span> : undefined}
                        <div>Credential: <a href={cert.url} target='_blank'>{cert.url}</a></div>
                    </div>
                )}
        </div>
    </div>
}