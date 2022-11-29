import styled from 'styled-components'
import { darkGray } from '../../constants/colors'

export const Body = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CalcContainer = styled.div`
  background-color: ${darkGray};
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  width: 260px;
  display: flex;
  flex-direction: column;
`

export const Result = styled.span`
  font-size: 24px;
  margin-left: auto;
`

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top: 2rem;
`

export const Row = styled.div`
  display: flex;
  gap: .5rem;
  width: 100%;
  justify-content: space-between;

`