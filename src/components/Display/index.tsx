import { memo } from 'react'

import styles from './styles.module.css'

export interface DisplayProps {
  value: string | number
}

const Display = ({ value }: DisplayProps) => {
  return <div className={styles.container}>{value}</div>
}

export default memo(Display)
