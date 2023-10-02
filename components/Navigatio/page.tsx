import React from 'react'
import s from './page.module.scss'

export const Navigatio = () => {
    return (
        <nav className={`Contend ${s.nav}`}>
            <ul >
          
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog </a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
