import React from 'react'
import CustomLink from './Custom';
import './header.css';


const Header = () => {

    return (
        <>
            <ul className='header-ul'>
                <li><CustomLink path="/" label='Home'></CustomLink></li>
                <li><CustomLink path="/tour" label='Tour'></CustomLink></li>
            </ul> 
        </>
    )
}

export default Header