import React, { FC } from 'react'
import IMAGE_RIVER from '@/assets/images/river.jpeg'
import { usePage1Store } from '@/store'
import Config from '@/config'
import styles from './index.module.less'

const Page1: FC = () => {
  console.log(Config, import.meta.env.VITE_ENV)
  const { count, addCount } = usePage1Store((state) => state)
  return (
    <div className={styles.page1}>
      <div>page1</div>
      <div>count: {count}</div>
      <div onClick={() => addCount(1)}>addCount</div>
      <img className={styles.img} src={IMAGE_RIVER} />
    </div>
  )
}

export default Page1
