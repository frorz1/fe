import React, { FC, useEffect, useState } from 'react'
import IMAGE_RIVER from '@/assets/images/river.jpeg'
import { usePage1Store } from '@/store'
import Config from '@/config'
import ReactSke from '@/ske/page1/react-ske/react-test'
import '@/ske/page1/js-ske/js-test'
import { query } from '@/utils'
import styles from './index.module.less'

const Page1: FC = () => {
  console.log(query.search())
  console.log(Config, import.meta.env.VITE_ENV)
  const { count, addCount } = usePage1Store((state) => state)
  useEffect(() => {
    setTimeout(() => {
      const skeRoot = document.querySelector('#ske')
      if (skeRoot) {
        skeRoot.remove()
      }
    }, 3000)
  }, [])
  return (
    <>
      <div className={styles.page1}>
        <div>page1</div>
        <div>count: {count}</div>
        <div onClick={() => addCount(1)}>addCount</div>
        <img className={styles.img} src={IMAGE_RIVER} />
      </div>
    </>
  )
}

export default Page1
