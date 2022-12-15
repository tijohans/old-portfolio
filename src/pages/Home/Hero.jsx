import React, { useLayoutEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import Button from '../../components/button/Button';

function Hero() {
    return (
        <section className="main__hero">
            <div >
                <h1 className="main__hero__header">Hi! <span>I'm Thor, a web-development</span> student at NTNU Gjøvik</h1>
                <Button route='projects' text='View My Projects' />
            </div>
            <div>
                <img className='main__hero__svg' src="/svg/Vector-1.svg" alt="" />
            </div>
        </section>
    );
}

export default Hero;