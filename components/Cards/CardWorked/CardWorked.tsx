import React from 'react'
import s from './page.module.scss'
import Image  from 'next/image'
interface Person {
  data:string[]
}
export const CardWorked = ({data}:Person) => {
  return (
    <div className={s.Cards}>
      {data.map((res,i)=>(
     <div className={s.Card} key={i}>
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
 
      ))}
    
     
    </div>
  )
}
