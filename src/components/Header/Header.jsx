import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="navigation">
            <h2 className="navigation__header">TINJ</h2>
            <ul className="navigation__list">
                <li className="navigation__list__li">
                    <Link to={"/"}>Home</Link>
                </li>
                {/* <li className="navigation__list__li"><a href="">About</a></li> */}
                <li className="navigation__list__li">
                    <Link to={"/projects"}>Projects</Link>
                </li>
            </ul>
        </header>
    )
};

export default Header;



