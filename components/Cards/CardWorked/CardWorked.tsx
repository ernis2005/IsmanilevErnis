import React from 'react'
import s from './page.module.scss'
import Image  from 'next/image'
export const CardWorked = () => {
  return (
    <div className={s.Cards}>
         <div className={s.Card}>
          <div className={s.Image}>
            <Image alt="hello" src={'/kassir.png'} layout='fill' objectFit='fill'/>
          </div>
          <div className={s.Info}>
            <h3>Kassir KG</h3>
            <div>7 месяц</div>
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
         </div>

    </div>
  )
}
