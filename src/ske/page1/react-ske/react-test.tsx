import { useEffect, useState } from 'react'
import styles from './test.module.less'
const Skeleton = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('ske', () => {
      console.log('copy')
      setLoading(false)
    })
    return () => {
      window.removeEventListener('ske', () => {
        console.log('cancel')
      })
    }
  }, [])

  return loading ? <div className={styles.test}>user</div> : null
}

export default Skeleton
