import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";

const NavBar = () => {
    return (
        <nav className="Navigation">
            <ul className="List-ul">
                <li>
                    <a href="www.google.com">Inicio</a>
                </li>
                <li>
                    <a href="www.google.com">Catálogo</a>
                </li>
                <li>
                    <a href="www.google.com">Nosotros</a>
                </li>
                <li>
                    <a href="www.google.com">Contacto</a>
                </li>
                <li>
                    <Shop />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;