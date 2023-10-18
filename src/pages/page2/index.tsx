import React from 'react'
import IMAGE_CODE from '@/assets/images/code.png'
import { query } from '@/utils'
import { usePage1Store, usePage2Store } from '@/store'
import styles from './index.module.less'

export default () => {
  console.log(query.search())
  const { count: page2Count, addCount } = usePage2Store((state) => state)

  const { count: page1Count } = usePage1Store((state) => state)

  return (
    <div className={styles.page2}>
      <div>page2</div>
      <div>page1Count: {page1Count}</div>
      <div>page2Count: {page2Count}</div>
      <div onClick={() => addCount(1)}>addCount</div>
    </div>
  )
}
