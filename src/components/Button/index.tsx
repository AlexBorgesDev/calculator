import { memo } from 'react'

import styles from './styles.module.css'

export interface ButtonProps {
  label?: string | number
}

const Button = (props: ButtonProps) => {
  return <button className={styles.container}>{props.label}</button>
}

export default memo(Button)
