import React, { useRef, useEffect } from 'react';
import Button from '../../components/button/Button';
import gsap from 'gsap';
import './Home.css';


function Home() {

    let heroSection = useRef(null);
    let aboutSection = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heroSection,
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
            aboutSection,
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
    })


    return (
        <main className="main__content">
            <section ref={el => {heroSection = el}} className="main__hero">
                <div >
                    <h1 className="main__hero__header">Hi! <span>I'm Thor, a web-development</span> student at NTNU Gjøvik</h1>

                    <Button
                        route='projects'
                        text='View My Projects' />
                </div>
                <div>
                    <img

                        className='main__hero__svg'
                        src="/svg/Vector-1.svg" alt="" />
                </div>
            </section>

            <div ref={el => {aboutSection = el}} className="about__section__container">
                <section className="about__section">
                    <h2 className="about__section__header">About Me</h2>
                    <p>I am currently in my second year of studying towards a bachelor’s degree in web development at NTNU
                        Gjøvik. Looking to expand my competency in the field in as many ways as possible. </p>
                </section>
                <section className="about__section">
                    <h2 className="about__section__header">About this page</h2>
                    <p>This page works as my personal portfolio, a place for people to look at my work, and as a way to get
                        in touch with me. </p>
                </section>
            </div>
        </main>
    );
}

export default Home;