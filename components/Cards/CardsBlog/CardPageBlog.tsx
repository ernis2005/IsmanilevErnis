import React from 'react'
import s from './page.module.scss'
interface Person {
  data: string[]
}
export const CardPageBlog = ({ data }: Person) => {
  return (
    <div className={s.Cards}>
      {
        data.map(res => (
          <div key={res} className={s.Card}>
            <h2>Making a design system from scratch</h2>
            <span>
              12 Feb 2020
            </span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        ))
      }

    </div>

  )
}
