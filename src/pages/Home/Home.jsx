import React from 'react';
import Hero from './Hero';
import './Home.css';


function Home() {
    return (
        <main className="main__content">

            <Hero />

            <div className="about__section__container">
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