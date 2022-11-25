import React, { Component } from 'react';
import { useState } from 'react';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`navbar ${showLinks ? "shownav" : "hide-nav"}`}>
            <div className='navbar_logo font-fancy text-4xl'>Ange & Vie</div>
            <ul className='navbar_links'>
                <li className='navbar_item slideInDown-1'>
                    <a className='navbar_link' href="/" >Accueil</a>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <a className='navbar_link' href="/prestations" >Prestations</a>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <a className='navbar_link' href="/tarifs" >Tarifs</a>
                </li>
                <li className='navbar_item slideInDown-3'>
                    <a className='navbar_link' href="/about" >Qui suis-je ?</a>
                </li>
            </ul>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className='burger_bar'></span>
            </button>
        </nav >
    );
}

export default Navbar;