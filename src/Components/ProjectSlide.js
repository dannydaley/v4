import "./ProjectSlide.css"
import unshore from "../Images/unshoreLogo2.png";

function ProjectSlide(postData) {
    return(
        <section id="projectsSection">
            <div className="project-slide">
                <div className="projInfo">
                    <a href="<?php the_permalink();?>" target="_blank">
                        <p>{postData.postTitle}</p>
                    </a>  
                    <p>{postData.postContent}</p>
                </div>
                <a href="" target="_blank">
                    <img alt="Project Thumbnail" src={postData.postThumbnail}/>
                </a>                   
            </div>          
            <div className="post-info-container">
                <div className="post-meta-data">
                    <p>posted by <span><a href="http://www.dannydaley.com/author/admin/" title="Posts by Danny Daley" rel="author">{postData.author}</a></span> on <span>29 Jan 2021</span> in <span><a href="http://www.dannydaley.com/category/games/" rel="category tag">Games</a>, <a href="http://www.dannydaley.com/category/projects/" rel="category tag">Projects</a></span></p>
                </div>
            </div>
        </section>
    )
}

export default ProjectSlide;