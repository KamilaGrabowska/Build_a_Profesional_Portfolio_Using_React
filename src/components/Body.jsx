import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/Avatar.JPG';
import './Body.scss'
const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} width={150} height={140} />

                    <div className="body-content">
                        <div className="body-headline">Kamila Gabowska</div>
                        <div className="body-text">Frontend Developer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/KamilaGrabowska" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/kamila-grabowska-01703443/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;