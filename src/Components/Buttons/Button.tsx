import React from 'react'
import styles from './Button.module.scss'

const Button = () => {
  return (
    <div className={styles.btn_container}>
    <button className={styles.btn} >
        Click Me
    </button>
    </div>
  )
}

export default Button