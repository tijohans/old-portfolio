import React from 'react';
import Button from '../button/Button';
import './ProjectCard.css';

function ProjectCard(props) {  
    
    let id = props.id;
    if(id < 9) {
        id = "0" + id;
    }

    return (
        <article className='projectcard'>
            <header className='projectcard__header'>
                <h2 className='projectcard__name'>{props.name}</h2>
                <p className="projectcard__projectnumber">{id} / 04</p>
            </header>
            <img className='projectcard__image' src={props.imgPath} alt="" />

                <p className='projectcard__description'>{props.description}</p>
                <Button
                    className="projectcard__button"
                    text="View Project"
                    link={props.link}
                />
        </article>
    );
}

export default ProjectCard;