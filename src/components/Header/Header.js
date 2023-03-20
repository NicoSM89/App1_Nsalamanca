//RAFCE es para crear la estructura rápido
import React from 'react';
import "./Header.css";
import img from "./camara.png";

const Header = () => {
    return <div className='Header'>
        <img src={img} alt="logo" />
        <h1>Title</h1>
        <h2>Subtitle</h2>
    </div>;
};

export default Header
