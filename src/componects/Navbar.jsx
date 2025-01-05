import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../assets/sasika.jpg';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={90} height={33} alt="Logo"/> 
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/sasikad"
                    target="_blank"rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin />
            </a>
            <a href="https://github.com/sasikad1"
                    target="_blank"rel="noopener noreferrer"
                    aria-label="GitHub">
                    <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sasikad"
                    target="_blank"rel="noopener noreferrer"
                    aria-label="Instargram">
                    <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sasikad"
                    target="_blank"rel="noopener noreferrer"
                    aria-label="StackOverFLow">
                    <FaTwitter />
            </a>
            </div>
        </nav>
    )
}

export default Navbar