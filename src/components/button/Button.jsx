import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {

    if(props.link) 
        return <Link to={props.link} target="_blank" ><button className='button__component'>{props.text}</button></Link>
    

    if(props.route) 
        return <Link className='button__component' to={props.route}><button>{props.text}</button></Link>;
    

    return <button className='button__component'>{props.text}</button>;
}

export default Button;