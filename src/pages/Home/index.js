import { useState } from "react"
import { Button } from "../../components/Button"
import { Title } from "../../components/Title"
import { Body, CalcContainer, NumbersContainer, Result, ResultContainer, Row } from './styles'

export const Home = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState(0)

  const handleClickNumber = (number) => {
    if (operator) {
      const newNumber = Number(`${secondNumber}${number}`)

      setSecondNumber(newNumber)
    } else {
      const newNumber = Number(`${firstNumber}${number}`)

      setFirstNumber(newNumber)
    }
  }

  const handleClickOperator = (newOperator) => {
    setOperator(newOperator)
  }

  const handleClear = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperator('')
  }

  const handleCalculate = () => {
    let newResult;

    if (operator === '/') {
      newResult = firstNumber / secondNumber
    }

    if (operator === 'X') {
      newResult = firstNumber * secondNumber
    }

    if (operator === '+') {
      newResult = firstNumber + secondNumber
    }

    if (operator === '-') {
      newResult = firstNumber - secondNumber
    }

    setResult(newResult)
    handleClear()
  }

  return (
    <>
      <Title text='Calculadora da Turma de React' />

      <Body>
        <CalcContainer>
          <ResultContainer>
            <Result>
              {
                firstNumber
                  ? (
                    <>
                      {firstNumber} {operator} {secondNumber}
                    </>
                  )
                  : result
              }

            </Result>
          </ResultContainer>

          <NumbersContainer>
            <Row>
              <Button mlAuto isOperation onClick={() => handleClickOperator('/')}>
                /
              </Button>
            </Row>

            <Row>
              <Button onClick={() => handleClickNumber(1)}>
                1
              </Button>

              <Button onClick={() => handleClickNumber(2)}>
                2
              </Button>

              <Button onClick={() => handleClickNumber(3)}>
                3
              </Button>

              <Button isOperation onClick={() => handleClickOperator('X')}>
                X
              </Button>
            </Row>

            <Row>
              <Button onClick={() => handleClickNumber(4)}>
                4
              </Button>

              <Button onClick={() => handleClickNumber(5)}>
                5
              </Button>

              <Button onClick={() => handleClickNumber(6)}>
                6
              </Button>

              <Button isOperation onClick={() => handleClickOperator('-')}>
                -
              </Button>
            </Row>

            <Row>
              <Button onClick={() => handleClickNumber(7)}>
                7
              </Button>

              <Button onClick={() => handleClickNumber(8)}>
                8
              </Button>

              <Button onClick={() => handleClickNumber(9)}>
                9
              </Button>

              <Button isOperation onClick={() => handleClickOperator('+')}>
                +
              </Button>
            </Row>

            <Row>
              <Button />

              <Button onClick={() => handleClickNumber(0)}>
                0
              </Button>

              <Button onClick={handleClear}>
                AC
              </Button>

              <Button isOperation onClick={handleCalculate}>
                =
              </Button>
            </Row>
          </NumbersContainer>
        </CalcContainer>
      </Body>
    </>
  )
}