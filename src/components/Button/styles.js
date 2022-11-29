import styled from 'styled-components'
import { lightGray, orange } from '../../constants/colors'

export const StyledButton = styled.button`
  outline: none;
  background-color: ${({ isOperation }) => isOperation ? orange : lightGray};
  border: none;
  border-radius: 50%;
  color: white;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  font-size: 16px;
  margin-left: ${({ mlAuto }) => mlAuto && 'auto'};
  /* margin-left: auto; */
`