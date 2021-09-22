import { memo } from 'react'

import styles from './styles.module.css'

export interface ButtonProps {
  cols?: 2 | 3
  label: string | number
  isOperation?: boolean
  onClick?: (value: string | number) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${styles.container} ${
        props.isOperation ? styles.operation : ''
      }`}
      data-col={props.cols || 1}
      onClick={() => props.onClick && props.onClick(props.label)}
    >
      {props.label}
    </button>
  )
}

export default memo(Button)
