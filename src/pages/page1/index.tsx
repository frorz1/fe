import React, { FC, useEffect, useState } from 'react'
import IMAGE_RIVER from '@/assets/images/river.jpeg'
import { usePage1Store } from '@/store'
import Config from '@/config'
import ReactSke from '@/ske/page1/react-ske/react-test'
import JSSke from '@/ske/page1/js-ske/js-test'
import styles from './index.module.less'

if (import.meta.env.DEV) {
  JSSke()
}

const Page1: FC = () => {
  console.log(Config, import.meta.env.VITE_ENV)
  const { count, addCount } = usePage1Store((state) => state)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      // const event = new CustomEvent('ske', {
      //   hazcheeseburger: true,
      // })
      // window.dispatchEvent(event)
      document.body.removeChild(document.querySelector('#ske'))
      // setLoading(false)
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
