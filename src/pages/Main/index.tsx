import Button from '../../components/Button'

import styles from './styles.module.css'

const Main = () => {
  return (
    <>
      <h1 className={styles.title}>Calculator</h1>

      <div className={styles.calculator}>
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </div>
    </>
  )
}

export default Main
