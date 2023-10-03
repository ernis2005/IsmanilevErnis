import React from 'react'
import s from './page.module.scss'
import { CardWorked } from '@/components/Cards/CardWorked/CardWorked'
import { data } from '../page'
const works = () => {
  return (
    <div className={`Contend ${s.Works}`}>
      <h2>Works</h2>
  <CardWorked data={data}/>
    </div>
  )
}

export default works
