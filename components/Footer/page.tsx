
import React from 'react'
import s  from './page.module.scss'
import {SiInstagram, SiTelegram} from 'react-icons/si'
export const Footer = () => {
  return (
    <footer className={`Contend ${s.footer}`}>
      <ul>
        <li> <a target="_blank" href="https://t.me/ErnisIsmanaliev"><SiTelegram/></a></li>
        <li><a  target="_blank" href="https://www.instagram.com/ernis0.0"><SiInstagram/></a></li>
       
      </ul>
    </footer>
  )
}
