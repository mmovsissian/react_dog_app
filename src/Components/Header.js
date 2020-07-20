import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

    return(
        <header> 
            <Link to='/breeds'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contacts'>CONTACTS</Link>
        </header>
    )
}