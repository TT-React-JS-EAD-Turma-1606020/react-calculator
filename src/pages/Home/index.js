import { Button } from "../../components/Button"
import { Title } from "../../components/Title"
import { Body, CalcContainer, NumbersContainer, Result, Row } from './styles'

export const Home = () => {
  return (
    <>
      <Title text='Calculadora da Turma de React' />

      <Body>
        <CalcContainer>
          <Result>0</Result>

          <NumbersContainer>
            <Row>
              <Button mlAuto isOperation>
                /
              </Button>
            </Row>

            <Row>
              <Button>
                1
              </Button>

              <Button>
                2
              </Button>

              <Button>
                3
              </Button>

              <Button isOperation>
                X
              </Button>
            </Row>
          </NumbersContainer>
        </CalcContainer>
      </Body>
    </>
  )
}