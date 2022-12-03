import React, { Component } from 'react';
import { useState } from 'react';
import Link from 'next/link'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`navbar ${showLinks ? "shownav" : "hide-nav"}`}>

            <Link className='navbar_logo navbar_logo font-fancy text-4xl' href="/" >Ange & Vie</Link>

            <ul className='navbar_links'>
                <li className='navbar_item slideInDown-1'>
                    <Link className='navbar_link' href="/" >Accueil</Link>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <Link className='navbar_link' href="/prestations" >Prestations</Link>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <Link className='navbar_link' href="/tarifs" >Tarifs</Link>
                </li>
                <li className='navbar_item slideInDown-3'>
                    <Link className='navbar_link' href="/about" >Qui suis-je ?</Link>
                </li>
            </ul>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className='burger_bar'></span>
            </button>
        </nav >
    );
}

export default Navbar;