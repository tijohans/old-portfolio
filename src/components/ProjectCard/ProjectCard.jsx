import React from 'react';
import Button from '../button/Button';
import './ProjectCard.css';
import { Link } from 'react-router-dom'

function ProjectCard(props) {

    // Formatting numbers 
    function formatNumber(num) {
        if (num < 9) {
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

            <div className='button__container'>
                <Button
                    className="projectcard__button"
                    text="View Project"
                    link={props.link}
                />
                <Link className='github__link' target="_blank" to={props.github_link}><img className='github__link__image' src="/img/githib_icon.svg" alt="github icon" /></Link>
            </div>

            {/* <Link to={props.id}>View Project</Link> */}
        </article>
    );
}

export default ProjectCard;