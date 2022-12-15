import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
    const [data, setData] = useState([]);

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
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main>
            <header className='projects__header'>
                <h1>Projects</h1>
                <p>This is a list of my five most recent projects, the list will be updated regularly. </p>
            </header>
            <section className='projects'>
                {
                    data && data.length > 0 && data.map((item) =>
                        <ProjectCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            imgPath={item.imgPath}
                            description={item.description}
                            link={item.link}
                        />)
                }
            </section>
        </main>
    );
}

export default Projects;