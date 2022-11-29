import { StyledButton } from './styles'

export const Button = ({ children, mlAuto, isOperation }) => {
  return <StyledButton mlAuto={mlAuto} isOperation={isOperation}>{children}</StyledButton>
}