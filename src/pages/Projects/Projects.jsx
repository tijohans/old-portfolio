import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import gsap from 'gsap';
import './Projects.css';

function Projects() {
    // Data from JSON file
    const [data, setData] = useState([])

    // Elements to animate
    let info = useRef(null);
    let projects = useRef(null);


    const getData = () => {
        fetch('projects.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            })
    }

    useEffect(() => {
        // Get data from json file
        getData()

        // Animations
        gsap.fromTo(
            info,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1
            }
        )

        gsap.fromTo(
            projects,
            {
                y: 70,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                delay: 0.5,
                duration: 1
            }
        )

    }, [])

    return (
        <main>
            <header ref={el => {info = el}} className='projects__header'>
                <h1>Projects</h1>
                <p>This is a list of my five most recent projects, the list will be updated regularly. </p>
                <p>If no live version of project exists both links will go to github. WIP.</p>
            </header>
            <section ref={el => {projects = el}} className='projects'>
                {
                    data && data.length > 0 && data.map((item) =>
                        <ProjectCard
                            
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            imgPath={item.imgPath}
                            description={item.description}
                            link={item.link}
                            github_link={item.github_link}
                            totalNoOfItems={data.length}
                        />)
                }
            </section>
        </main>
    );
}

export default Projects;