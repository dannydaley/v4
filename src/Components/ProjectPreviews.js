import "./ProjectPreviews.css"
import ProjectTile from "./ProjectTile"
import unshore from "../Images/unshoreLogo2.png";
import v3 from "../Images/v3.png";
import smartbrain from "../Images/smartbrain.png";
import ff7 from "../Images/7.png";
import eightBall from "../Images/8.png";

const project = [
    { 
        id: 'p1',
        title: 'Unshore',
        image: unshore,
        date: new Date(2021, 2, 28)},
    { 
        id: 'p2',
        title: 'Version 3 launched!',
        image: v3,
        date: new Date(2021, 3, 19)},
    { 
        id: 'p3',
        title: 'SmartBrain - Face Recognition App',
        image: smartbrain,
        date: new Date(2021, 4, 17)},
    { 
        id: 'p4',
        title: 'Final Fantasy VII:R Product Page',
        image: ff7,
        date: new Date(2021, 5, 8)},    
    { 
        id: 'p5',
        title: 'JavaScript Magic 8-ball',
        image: eightBall,
        date: new Date(2021, 2, 28)}];

function ProjectPreviews(){
    return (
        <div id="projWindow">
            <section id="projects">
                {project.map(project => (
                    <ProjectTile title={project.title} image={project.image} />
                ))}
            </section>
            <div className="seeMore">
                <ul>
                    <li id="seeMore" className="flashingLight"><a href="">See more</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectPreviews;