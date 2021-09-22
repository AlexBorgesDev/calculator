import { memo } from 'react'

import styles from './styles.module.css'

export interface DisplayProps {
  value: string | number
  operation?: string
}

const Display = ({ value, operation }: DisplayProps) => {
  return (
    <div className={styles.container}>
      <span>{operation}</span> {value}
    </div>
  )
}

export default memo(Display)
