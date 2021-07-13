
import "./Contact.css";
import html5Logo from "../LayoutImages/html5.png";
import css3Logo from "../LayoutImages/css3.png";
import jsLogo from "../LayoutImages/jslogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faCodepen, faFreeCodeCamp, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faGithub, faFreeCodeCamp, faCodepen, faEnvelope)

function Contact(){
    return(
        <section id="contact">
            <header>Let's build something..</header>
            <div className="contact-links">
                <script src="https://kit.fontawesome.com/a7b4d738fb.js" crossorigin="anonymous"></script>
                <a href="https://github.com/dannydaley" target="_blank" id="profile-link" class="contact-link">
                    <i className="fab fa-Github">
                        <FontAwesomeIcon icon={['fab', 'github']} />                        
                    </i> GitHub                        
                </a>                
                <a href="https://www.freecodecamp.org/dannydaley" target="_blank" className="contact-link">
                    <i className="fab fa-free-code-camp">
                        <FontAwesomeIcon icon={['fab', 'free-code-camp']} />
                    </i> freeCodeCamp
                </a>
                <a href="https://codepen.io/dannydaley" target="_blank" className="contact-link">
                    <i className="fab fa-codepen">
                        <FontAwesomeIcon icon={['fab', 'codepen']} />
                    </i> CodePen
                </a>
            </div>
            <div  id="email_link">
                <a href="#">
                    <i className="far fa-envelope emailicon">
                        <FontAwesomeIcon icon={['far', 'envelope']}/>
                    </i>dannydaley@outlook.com
                </a>
            </div>
            <div className="sandbox">                
                <img alt="HTML5 Logo" className="html" src={html5Logo} height="100px" width="100px" />
                <img alt="CSS3 Logo" className="css" src={css3Logo} height="100px" width="100px" />
                <img alt="JavaScript Logo"className="js play" src={jsLogo} height="100px" width="100px" />
            </div>
        </section>
    )
}

export default Contact;