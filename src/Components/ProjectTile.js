import "./ProjectTile.css"


function ProjectTile(props) {
    return (
        <div className="project-tile">
            <a href="" target="_blank">
                <img alt="Project Thumbnail" src={props.image}/>
                <p>{props.title}</p>
            </a>  
        </div>
    )
}

export default ProjectTile;