"use client";
import React from 'react'
import s from './page.module.scss'
import Link from 'next/link' 
import { usePathname } from 'next/navigation';
import cm from 'classnames'
export const Navigatio = () => {
    const pathname = usePathname();
    console.log(pathname.length);
 
    return (
        <nav className={`Contend ${s.nav}`}>
            <samp className={cm(s.home,{
                [s.homeAcc]:pathname.length >= 4
            })}>
            <Link  href="/">Blog</Link>
            </samp>
            <ul >
          
                <li><Link  href="/blog">Blog</Link></li>
                <li><Link href="/works">Works </Link></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
