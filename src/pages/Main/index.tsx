import { useState } from 'react'

import Button from '../../components/Button'
import Display from '../../components/Display'

import styles from './styles.module.css'

const Main = () => {
  const [value, setValue] = useState('')
  const [values, setValues] = useState<string[]>([])
  const [operations, setOperations] = useState<string[]>([])
  const [isResult, setIsResult] = useState(false)

  const clear = () => {
    setValue('')
    setValues([])
    setIsResult(false)
    setOperations([])
  }

  const calc = (calcValues: (string | number)[]) => {
    let calcString = ''

    calcValues.forEach((value, index) => {
      if (!operations[index]) calcString += value
      else calcString += value + operations[index]
    })

    setValues([eval(calcString)])
    setIsResult(true)
    setOperations([])
  }

  const setOperation = (operation: unknown) => {
    if (typeof operation !== 'string') return
    setValues([...values, value])
    isResult && setIsResult(false)

    if (operation === 'x') setOperations([...operations, '*'])
    else if (operation === '=') calc([...values, value])
    else setOperations([...operations, operation])

    setValue('')
  }

  const addDigit = (value: string | number) => {
    if (isResult) {
      setIsResult(false)
      setValues([])
    }

    setValue(oldValue => oldValue + value)
  }

  return (
    <div className={styles.calculator}>
      <Display
        value={value || values[values.length - 1] || 0}
        operation={
          isResult
            ? '='
            : operations[operations.length - 1] === '*'
            ? 'x'
            : operations[operations.length - 1]
        }
      />

      {/* Row 1 */}
      <Button label="AC" cols={3} onClick={clear} />
      <Button label="/" isOperation onClick={setOperation} />
      <Button label="7" onClick={addDigit} />
      <Button label="8" onClick={addDigit} />

      {/* Row 2 */}
      <Button label="9" onClick={addDigit} />
      <Button label="x" isOperation onClick={setOperation} />
      <Button label="4" onClick={addDigit} />
      <Button label="5" onClick={addDigit} />

      {/* Row 3 */}
      <Button label="6" onClick={addDigit} />
      <Button label="-" isOperation onClick={setOperation} />
      <Button label="1" onClick={addDigit} />
      <Button label="2" onClick={addDigit} />

      {/* Row 4 */}
      <Button label="3" onClick={addDigit} />
      <Button label="+" isOperation onClick={setOperation} />
      <Button label="0" cols={2} onClick={addDigit} />
      <Button label="." onClick={addDigit} />

      {/* Row 5 */}
      <Button label="=" isOperation onClick={setOperation} />
    </div>
  )
}

export default Main
