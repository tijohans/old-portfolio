import React from 'react';
import Button from '../button/Button';
import './ProjectCard.css';

function ProjectCard(props) {  
    
    // Formatting numbers 
    function formatNumber(num) {
        if(num < 9) {
            num = "0" + num;
        }

        return num
    }

    // Formatting numbers
    let id = formatNumber(props.id);
    let noOfItems = formatNumber(props.totalNoOfItems);

    return (
        <article className='projectcard'>
            <header className='projectcard__header'>
                <h2 className='projectcard__name'>{props.name}</h2>
                <p className="projectcard__projectnumber">{id} / {noOfItems}</p>
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